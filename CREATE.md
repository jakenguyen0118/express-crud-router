# Create/POST Routes

## Lesson Objectives

1. Create a post route
1. Test your route with Postman
1. View body of the post request

## Create a post route

1. Lets set up a route to listen to a post request for a fruit
```javascript
router.post('/', (req, res)=>{

});
```


## Define middleware

We can have a function execute for all routes but this time we include an additional argument: `next`.  `next()` is essentially a callback function built into express that is called once the middleware has completed.  This provides us the opportunity to perform some action on either the `req` or `res` objects and then pass the results to the next middleware. 

```javascript
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
```

- This is called 'middleware'
- It runs in the middle of the request response cycle (in the middle)
    - sometime after the request is received, but before the final route handler is called
- Be sure to put middleware at the top of your server.js file, so that other routes don't handle the request and send the response before the middleware can be executed
- Most of the time, you won't write your own middleware, but a lot of plugins and extended functionality of express exist as middleware

[Learn More](https://developer.okta.com/blog/2018/09/13/build-and-understand-express-middleware-through-examples)

## View body of a post request

1. The POST request to our sever has data in it (name, color, readyToEat, etc).
1. We can easily access this data with a middleware function
1. Tell express to use the middleware

    ```javascript
    //near the top, around other app.use() calls
    app.use(express.urlencoded({extended:false}));
    ```

**What does [urlencoded do](https://expressjs.com/en/api.html#express.urlencoded)**



1. Now inside the POST to `/fruits` route handler we can do the following:

```javascript
router.post('/', (req, res)=>{
    console.log(req.body);
    res.send('data received');
});
```


1. Push this data into our fruits array:

```javascript
router.post('/', (req, res)=>{
    fruits.push(req.body);
    console.log(fruits);
    res.send('data received');
});
```

<hr>

## Test with Postman
<img src="https://miro.medium.com/max/516/1*MP7BSXKJrQzCz_aI2zJr-g.png" width="300px" >

- Open up a new tab in postman
- Set your type of request
- Set the correct request url
- Add content to the Body tab
- Make sure you are using `x-www-form-urlencoded`

<br>
<hr>

## Extra
**form-data / vs form-urlencoded in Postman**

##### form-data

multipart/form-data is the default encoding a web form uses to transfer data. This simulates filling a form on a website, and submitting it. The form-data editor lets you set key/value pairs (using the key-value editor) for your data. You can attach files to a key as well. Do note that due to restrictions of the HTML5 spec, files are not stored in history or collections. You would have to select the file again at the time of sending a request.

#### urlencoded

This encoding is the same as the one used in URL parameters. You just need to enter key/value pairs and Postman will encode the keys and values properly. Note that you can not upload files through this encoding mode. There might be some confusion between form-data and urlencoded so make sure to check with your API first.
