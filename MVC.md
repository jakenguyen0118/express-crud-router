# MVC

## Lesson Objectives

1. Define MVC and explain why it matters
1. Move our data into a separate file
1. Move our presentation code into an JSX file

## Define MVC and explain why it matters

- One of the core tenants of good programming is to compartmentalize your code
- Already our code is getting a little messy
    - we have data, app instantiation (listening), and routes all in one file
- One way to keep an app from getting messy is to separate it out into three sections

```js
    - Models
        - data (javascript variables)
    - Views
        - how the data is displayed to the user (HTML)
    - Controllers
        - the glue that connects the models with the views
```

There are a few good reasons why we may want to do this: 

1. This allows various developers to divide up a large code base
    - minimizes likelihood of developers overwriting each others code
    - allows developers to specialize
        - one can focus just on getting good with dealing with data
        - one can focus just on getting good with html
        - one can focus just on getting good with connecting the two
2. Keeps your organized and makes your files more maintainable


<hr>
<img src="https://miro.medium.com/max/1276/1*fdmEnFOCH8oDVo8mlQG2jg.jpeg">

## Think of MVC as a restaurant
    - Models are the cook
        - prepares food/data
    - Views are the customer
        - consumes food/data
    - Controllers are the waiter
        - brings food from cook to customer
        - has no idea how food/data is prepared
        - has no idea how the food/data is consumed


<hr> 

# Move our data into a separate file

1. Create a directory called models inside our app directory
1. Inside /models, create your data file (fruits.js)
1. Put your fruits variable in there

    ```javascript
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
    ```

1. We now require that file in the original server.js

    ```javascript
    const fruits = require('./models/fruits.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package
    ```

1. But, we could have multiple variables in our /models/fruits.js file.
    - How does javascript know which variable in /models/fruits.js to assign to the fruits const in server.js (the result of the `require()` statment)?
    - We must tell javascript which variable we want to be the result of the `require()` statement in server.js

        ```javascript
        //at the bottom of /models/fruits.js
        module.exports = fruits;
        ```

## VIEW

....coming soon

(we will be using React as our view!)

