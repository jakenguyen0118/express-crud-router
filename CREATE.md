# Create/POST Routes

## Lesson Objectives

1. Create a post route
1. Test your route with Postman
1. View body of the post request

## Create a post route

1. Lets set up a route to listen to a post request for a fruit
```javascript
app.post('/fruits', (req, res)=>{

});
```

1. Push this data into our fruits array:

```javascript
app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    console.log(fruits);
    res.send('data received');
});
```

## Test with Postman
