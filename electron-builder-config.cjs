const packageJson = require("./package.json");

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration
 */
module.exports = {
  productName: packageJson.displayName,
  appId: "com.example.app",
  copyright: `${new Date().getFullYear()} $\{author}`,
  asar: true,
  compression: "store",
  artifactName: "${productName}_${version}_${os}_${arch}.${ext}",
  directories: {
    output: "release/${version}",
  },
  files: ["dist", "dist-electron"],
  mac: {
    target: ["dmg"],
  },
  win: {
    target: [
      {
        target: "portable",
        arch: ["x64"],
      },
      // {
      //   target: "nsis",
      //   arch: ["x64"],
      // },
    ],
  },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: false,
  },
  portable: {
    artifactName: "${productName}_${version}_${os}_${arch}_portable.${ext}",
  },
  linux: {
    target: ["AppImage"],
  },
};
