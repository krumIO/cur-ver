#!/usr/bin/env node
'use strict';

const args = require('yargs').argv;

// Set git-dir if operating in a different folder than root. For example: ../../.git
var gitpath = (args["git-dir"] && typeof args["git-dir"] === "string") ? ' --git-dir '+ args["git-dir"] : "";

var git = require('child_process').execSync('git'+ gitpath + ' rev-parse --short HEAD').toString().trim();

var version = require("./package.json").version;

if(args["suffix"] && typeof args["suffix"] === "string"){
    version += "-" + args["suffix"];
}

process.stdout.write(JSON.stringify({ "version" : version, "hash" : git }));
