const electron = require("electron");
const BrowserWindow = electron.BrowserWindow;

const app = electron.app;
const url = require("url");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 490,
    width: 823,
    resizable: false,
  });

  mainWindow.loadURL("http://localhost:3040/");

  mainWindow.webContents.openDevTools();

  mainWindow.setMenu(null);
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
