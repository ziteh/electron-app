import { ipcMain, IpcMainEvent } from "electron";
import packageJson from "../package.json";

export class Ipc {
  public static init() {
    ipcMain.handle("getAppVersion", () => {
      return packageJson.version;
    });

    ipcMain.on(
      "rendererProcessMessage",
      async (_event: IpcMainEvent, msg: string) => {
        console.log("[Renderer]", msg);
      },
    );
  }
}
