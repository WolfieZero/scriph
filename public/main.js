// =============================================================================
// Main
// =============================================================================

const url = require('url');
const path = require('path');
const electron = require('electron');
const isDev = require('electron-is-dev');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({ width: 900, height: 680, frame: false, titleBarStyle : 'hidden-inset' });
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    mainWindow.on('close', () => mainWindow = null);

    app.setAboutPanelOptions({
        applicationName: 'Scriph',
        applicationVersion: '0.1.0',
    });
}

app.on('ready', createWindow);

app.on('all-windows-close', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
