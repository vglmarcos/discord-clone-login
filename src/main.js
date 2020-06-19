const { app, BrowserWindow, screen, ipcMain, Notification } = require('electron');
const path = require('path');
const url = require('url');
require('electron-reload')(__dirname);

const createWindow = () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    let window = new BrowserWindow({
        width: parseInt(width * .65),
        height: parseInt(height * .85),
        minHeight: 600,
        minWidth: 479,
        webPreferences: {
            nodeIntegration: true,
        },
        icon: path.join(
            __dirname,
            "public",
            "img",
            "logo.png"
        ),
        show: false
    });
    window.loadURL(url.format({
        pathname: path.join(__dirname, "public", "index.html"),
        protocol: 'file',
        slashes: true
    }));
    window.setMenu(null);
    return window;
}

app.on('ready', () => {
    const mainWindow = createWindow();
    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

ipcMain.on('signUp', (event, user) => {
    // verificacion suprema
    if (user.name === "Numpy" && user.password === "1265") {
        const notification = new Notification({
            title: 'Bienvenido',
            body: 'Bienvenido al sistema',
            icon: path.join(
                __dirname,
                "public",
                "img",
                "logo.png"
            )
        });
        notification.show();
    }
});

ipcMain.on('forgetPassword', (event) => {
    const notification = new Notification({
        title: 'forgetPassword',
        body: 'Not work yet.',
        icon: path.join(
            __dirname,
            "public",
            "img",
            "logo.png"
        )
    }
    );
    notification.show();
});

ipcMain.on('register', (event) => {
    const notification = new Notification({
        title: 'register',
        body: 'Not work yet.',
        icon: path.join(
            __dirname,
            "public",
            "img",
            "logo.png"
        )
    });
    notification.show();
});