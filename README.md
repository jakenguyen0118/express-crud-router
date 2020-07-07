# Intro to REST

## Lesson Objectives

1. Describe what `CRUD` is
1. Describe REST and list the various routes
1. Create an Index route
1. Install JSON View to make viewing JSON easier
1. Create a Show route
1. Enhance the data in your data array


# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

## Getting started

1. Fork
1. Clone

# What is CRUD?

CRUD stands for **C**`reate`, **R**`ead`, **U**`pdate` and **D**`elete`. Why and how is this important you ask? Well CRUD is in everything you interact with online on a daily basis. Browsing Instagram and looking at posts? Thats **R**`ead`. Are you posting something? Well that's **C**`reate`. Didn't like that picture you posted? **D**`elete` to the rescue and finally, liking pictures of adorable animals? Hello **U**`date`!

So now that we have a reference point, how does that relate to code?

Below you'll find a table that relates normal `HTTP` actions to our CRUD operators.

| HTTP Action | CRUD Operator |
| ----------- | ------------- |
| GET         | Read          |
| POST        | Create        |
| PUT         | Update        |
| DELETE      | Delete        |

## Breaking It Down

#### Create

---

A Create or `POST` creates a new entry in a database that either you or someone else created. When we perform a `POST` request, we send some amount of information to our data source, usually data from a form; and we create a new entry in the data source.

#### Read

---

The `Read` or `GET` operation is something that you interact with every day. Whenever you pull information from an api, you are performing a `GET` request. `GET` requests only allow users to view or read from a data source. This can be something as simple as you checking your email in the morning. We perform a `GET` request to a server and if everything goes OK we get some type of information or data back.

#### Update

---

Update or `PUT` works very similar to a `POST` request. We are still sending along some sort of data to our data source, but instead of creating a new entry, we are actually updating an existing entry. In order to this, we need to target that entry specifically, most of the times using an `id`. This allows us to send some new information to to our existing piece of data and overwrite it's existing attributes.

#### Delete

---

Delete does just as the name implies, it `DELETE`'s something from our data source. We target the specific piece of information in the same way we did with our `PUT` request. This sends a request to the server to `DELETE` this item.

<br>
<hr>

## Describe REST and list the various routes

- REST stands for Representational state transfer
- It's just a set of principles that describe how networked resources are accessed and manipulated
- We have [7 RESTful routes](https://gist.github.com/alexpchin/09939db6f81d654af06b) that allow us basic operations for reading and manipulating a collection of data:

| **URL** | **HTTP Verb** |  **Action**|
|------------|-------------|------------|
| /photos/         | GET       | index  
| /photos/new      | GET       | new   
| /photos          | POST      | create   
| /photos/:id      | GET       | show       
| /photos/:id/edit | GET       | edit       
| /photos/:id      | PATCH/PUT | update    
| /photos/:id      | DELETE    | destroy  


**note** We will not map our crud functionality directly to REST. These are just some common and conventional rest endpoints we will use to create our routes.


<br>
<hr>

## Create an Index route

## Setup our app

1.  Create a directory in student examples called `fruits` (you will be using this folder over the next few days)
1. `touch server.js`
1. `npm init -y`
1. install express
1. install dotenv
1. create a `.env` file
1. require express and set up a basic server that logs listening when you start the app
1. Let's add a new `dev` config to our scripts section in our package.json

express-api/package.json
```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
}
```

9. Create a .gitignore file `touch .gitignore`!

```sh
echo "
/node_modules
.DS_Store
.env" >> .gitignore
```


10.  start the app with `nodemon` and make sure it is working


## Lets build our Fruits app!

Let's have a set of resources which is just a javascript array.  To create an index route, we'd do the following:

```javascript
require('dotenv').config
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const fruits = ['apple', 'banana', 'pear'];

app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

app.listen(port, () => {
    console.log('listening');
});
```

Now go to http://localhost:3000/fruits/

## Install JSON Formatter to make viewing JSON easier

- JSON stands for Javascript Object Notation
- It's just a way to represent data that looks like a Javascript object or array
- JSON Formatter extension just makes it easier to view JSON data.

Install it:

1.  Go to https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa
1. Click on "Add To Chrome"

## Create a Show route

To create a show route, we'd do this:

```javascript
require('dotenv').config
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const fruits = ['apple', 'banana', 'pear'];

app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

//add show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(port,function(){
    console.log('listening');
});
```

Now go to http://localhost:3000/fruits/1

## Enhance the data in your data array

- Right now are data array `fruits` is just an array of strings
- We can store anything in the array, though.
- Let's enhance our data a bit:

```javascript
require('dotenv').config
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];

app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(port, () => {
    console.log('listening');
});
```
