var _ = require("lodash");
var config = require("../config") || {};
var http = require("connect");
var io = require("socket.io");

var sockets = null;
var clients = [];

var inputs = [
	"action",
	"invite",
	"join",
	"kick",
	"mode",
	"msg",
	"nick",
	"notice",
	"part",
	"quit",
	"raw",
	"server",
	"topic",
	"whois"
];

var events = [
	"errors",
	"join",
	"kick",
	"mode",
	"motd",
	"message",
	"names",
	"nick",
	"notice",
	"part",
	"quit",
	"topic",
	"welcome",
	"whois"
];

module.exports = function() {
	sockets = io(http().use(http.static("client")).listen(config.port || 9000));
	sockets.on("connection", function(socket) {
		init(socket);
	});
};

var init = function(socket, client) {
	if (!client) {
		socket.emit("auth");
		socket.on("auth", auth);
	} else {
	}
};

var auth = function() {
	var socket = this;
};