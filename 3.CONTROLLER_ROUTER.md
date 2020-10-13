# Express Router

## Lesson Objectives

1. Explain What Express.Router does for us
1. Create External Controller File for Routes
1. Move `Server.js` Routes to External Controller File
1. Require Mongoose in Controller File
1. Use Controller File in `Server.js`
1. Remove References to Base of Controller's URLs

## Explain What Express.Router does for us

- Our `server.js` file is getting rather bloated
- express.Router will let us put our routes in a separate file

## What is express router?
- Routing refers to how an application’s endpoints (URIs) respond to client requests. 
- Express Router is a tool that allows us to abstract away our routes in to a separate file.
- It will make it so that we could have a router controller for each individual route and easily expand out routes.

## Create External Controller File for Routes

1. `mkdir controllers`
1. `touch controllers/fruits.js`
1. Edit controllers/fruits.js

```javascript
const express = require('express');
const router = express.Router();

module.exports = router;
```

## Move Server.js Routes to External Controller File

rename `app` to `router`

```javascript
const express = require('express');
const router = express.Router();

router.get('/fruits/', (req, res) => {
    res.send(fruits);
});

router.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});

module.exports = router;
```

## Require Fruit Model in Controller File

```javascript
const express = require('express');
const router = express.Router();
const fruits = require('../models/fruits.js')
//...
```

The `Fruit` model is no longer needed in `server.js`.  Remove it:

```javascript
require('dotenv').config
const express = require('express');
const app = express();
const mongoose = require('mongoose');
```

## Use Controller File in Server.js

```javascript
const fruitsController = require('./controllers/fruits.js');
app.use('/fruits', fruitsController);
```

## Remove References to Base of Controller's URLs

Since we've specified that the controller works with all urls starting with /fruits, we can remove this from the controller file:

```javascript
const express = require('express');
const router = express.Router();
const fruits = require('../models/fruits.js');

router.get('/', (req, res) => {
    res.send(fruits);
});

router.get('/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});


module.exports = router;
```


## Why use router?
- Our app is very simple right now.
- What if we want to add a vegetables index route, create, read update and delete?