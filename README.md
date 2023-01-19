# discord.js v14 template

> A simple template for your [discord.js](https://discord.js.org/) bot with [discord.js Guide](https://discordjs.guide/) explanations.

## Features

+ Slash commands support
+ Status and activity configuration
+ Command handler
+ Event handler
+ Components handler
+ Working with databases ([sequelize](https://sequelize.org/), [keyv](https://www.npmjs.com/package/keyv))
+ Working with APIs ([undici](https://www.npmjs.com/package/undici))
+ Logging interactions and errors
+ Using modern ES6 syntax

## Installation

To install this repository properly, run this in your command-line interface:

```
git clone https://github.com/DevVali/djs14-template.git
```

After cloning the repository, you can install all required packages:

```
npm i 
```

> Tip: If you want to install only the packages of your choice, continue reading.

### Packages

All packages are installed by default, but you may not need some packages (e.g. you will not be working with databases).

#### discord.js 

A package to interact with the Discord API. Required to run the bot properly.

```
npm i discord.js
```

#### keyv

Simple key-value storage that allows you to work with databases.

```
npm i keyv
```

Additionally, install @keyv/sqlite (we used SQLite in this template):

```
npm i @keyv/sqlite
```

#### eslint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. 

```
npm i --save-dev eslint
```

Additionally, install the appropriate plugin(s) for your editor of choice.
+ [ESLint for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
+ [ESLint for Sublime Text](https://packagecontrol.io/packages/ESLint)

#### sequelize

Sequelize is an object-relational-mapper that allows you to work with databases.

```
npm i sequelize sqlite3
```

#### undici

An excellent library for making HTTP requests.

```
npm i undici
```

### Editor plugins

+ [Prettier for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
+ [Recommended theme for your VS Code editor](https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple)

## Jump to

> Examples and explanations from the discord.js Guide.

### Commands

+ [Buttons](https://github.com/DevVali/djs14-template/blob/7357cc3dadfcca6e011d43f6cc04bd56ea40a20a/commands/button.js)
+ [Select menus](https://github.com/DevVali/djs14-template/blob/7357cc3dadfcca6e011d43f6cc04bd56ea40a20a/commands/select.js)
+ [Modals](https://github.com/DevVali/djs14-template/blob/7357cc3dadfcca6e011d43f6cc04bd56ea40a20a/commands/question.js)
+ [Context Menus](https://github.com/DevVali/djs14-template/blob/7357cc3dadfcca6e011d43f6cc04bd56ea40a20a/commands/userid.js)
+ [Ping command](https://github.com/DevVali/djs14-template/blob/7357cc3dadfcca6e011d43f6cc04bd56ea40a20a/commands/ping.js)
+ [Threads and Embeds](https://github.com/DevVali/djs14-template/blob/7357cc3dadfcca6e011d43f6cc04bd56ea40a20a/commands/thread.js)
+ [Reactions, Permissions, Webhooks, Storing data with Keyv](https://github.com/DevVali/djs14-template/blob/7357cc3dadfcca6e011d43f6cc04bd56ea40a20a/commands/uwu.js)
+ [Storing data with Sequelize](https://github.com/DevVali/djs14-template/blob/7357cc3dadfcca6e011d43f6cc04bd56ea40a20a/commands/show-preference.js)
+ [Using a REST API](https://github.com/DevVali/djs14-template/blob/7357cc3dadfcca6e011d43f6cc04bd56ea40a20a/commands/neko.js)
