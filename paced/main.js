const electron = require("electron");
const fs = require("fs");
const path = require("path");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let main_window;

function rand_num(min, max) {
	return Math.random() * (max - min) + min;
}

function create_window() {
	main_window = new BrowserWindow({width: 1600, height: 900});
	main_window.loadURL("http://www.analyze-ed.com");

	main_window.on("closed", () => {
		window = null;
	});

	//inject the solver everytime a new webpage is loaded
	main_window.webContents.on("did-finish-load", () => {
		fs.readFile(path.join(__dirname, "/inject.js"), "utf8", (err, script) => {
			main_window.webContents.executeJavaScript(script);
			console.log("injecting solve script now.");
		});
	});
}

app.on("ready", create_window);

app.on("activate", () => {
	if (main_window == null) {
		create_window();
	}
});

app.on("window-all-closed", () => {
	if (process.platform != "darwin") {
		app.quit();
	}
});