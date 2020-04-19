# mvcheezburger
![dependencies status](https://img.shields.io/david/maxlemieux/mvcheezburger?style=for-the-badge)
![code size](https://img.shields.io/github/languages/code-size/maxlemieux/mvcheezburger?style=for-the-badge)

## Table of Contents
* [About](#about)
* [Installation](#installation)
* [Usage](#usage)
* [Demo](#demo)
* [Technologies](#technologies)

## About
mvcheezburger is a status tracking app, created with Node/Express/MySQL/Handlebars.

Sometimes, we have cheezburgers. 

Sometimes, we're not sure where the cheezburgers go - did we eat them? Were they taken by the Fair Folk? 

mvcheezburger is a way to help track where your cheezburgers have been and will be, and to observe the malleable nature of reality.

## Installation

Clone the repo:

`git clone https://github.com/maxlemieux/mvcheezburger.git`

Install the dependencies (node, express, mysql, node-handlebars, dotenv):

`cd mvcheezburger`

`npm i`

Create a file for your database connection information:

`touch .env`

Open the file `.env` with your favorite editor and add the connection information:

`DB_HOST=localhost`

`DB_USER=root`

`DB_PASS=password`

Create the database using MySQL Workbench by running the following schema:

`mvcheezburger/db/schema.sql`

## Usage

Start the server:

`npm start`

Load the app at [http://localhost:3000](http://localhost:3000).

Add a burger using the form at the bottom of the page, then click the "DEVOUR ME!" button on a burger once devoured.

Ethereal traces of formerly undevoured burgers will appear on the right side of the screen.

## Demo
A demo of the app can be found here:

[https://mvcheezburger.herokuapp.com/](https://mvcheezburger.herokuapp.com/)

## Technologies
* Node.js
* Express.js
* MySQL
* Handlebars.js
* ![alt text](https://i.chzbgr.com/full/875511040/h8EB4D6E9/famous-cat-meme-which-started-and-launched-the-website-i-can-haz-cheezburger "Logo Title Text 1")
