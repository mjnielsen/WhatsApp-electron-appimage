const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const shell = electron.shell

const path = require('path')
const url = require('url')

require('electron-context-menu')({
  showInspectElement: false
});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    icon: path.join(__dirname, 'assets/icons/png/64x64.png'),
    webPreferences: {
      nodeIntegration: false
    }
  })
  mainWindow.setMenu(null);

  // and load the index.html of the app.
  mainWindow.loadURL('https://web.whatsapp.com/', {userAgent: 'Mozilla/5.0 (Linux) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36'})

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  // Open external links in a new window
  mainWindow.webContents.on('new-window', (e, url, frame, tab) => {
      e.preventDefault()
      shell.openExternal(url)
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('browser-window-created',function(e,window) {
      window.setMenu(null);
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
