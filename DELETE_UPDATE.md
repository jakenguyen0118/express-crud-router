# Express - Update and Delete

## Lesson Objectives

1. Create a Delete Route
1. Test Delete route with Postman
1. Create an update route
1. Test Edit rou

<hr>

| **URL** | **HTTP Verb** |  **Action**|
|------------|-------------|------------|
| /fruits/         | GET       | index  
| /fruits          | POST      | create   
| /fruits/:id      | GET       | show       
| /fruits/:id      | PUT | update    
| /fruits/:id      | DELETE    | destroy  

<hr>
<br>

## 🗑️ Delete

### Create a Delete Route

Inside our server.js file, add a `DELETE` route:

```js
app.delete('', (req, res) => {
	
});
```

```javascript
app.delete('/fruits/:indexOfFruitsArray', (req, res) => {
	fruits.splice(req.params.indexOfFruitsArray, 1); //remove the item from the array
	res.redirect('/fruits');  //redirect back to index route
});
```

<hr>

#### Test your Delete Route with Postman
<img src="https://miro.medium.com/max/516/1*MP7BSXKJrQzCz_aI2zJr-g.png" width="300px" >

<hr>
<br>
### Create an update route

In order to UPDATE, we use the http verb `PUT`.


```js
app.put('', (req, res) => {
	
});
```


Inside server.js add the following:

```javascript
app.put('/fruits/:indexOfFruitsArray', (req, res) => { //:indexOfFruitsArray is the index of our fruits array that we want to change
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
	fruits[req.params.indexOfFruitsArray] = req.body; //in our fruits array, find the index that is specified in the url (:indexOfFruitsArray).  Set that element to the value of req.body (the input data)
	res.redirect('/fruits'); //redirect to the index page
});
```

<hr>

#### Test your Update Route with Postman
<img src="https://miro.medium.com/max/516/1*MP7BSXKJrQzCz_aI2zJr-g.png" width="300px" >

