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
router.delete('', (req, res) => {
	
});
```

```javascript
router.delete('/:indexOfFruitsArray', (req, res) => {
	fruits.splice(req.params.indexOfFruitsArray, 1); //remove the item from the array
	res.send('deleted');  
});
```

<hr>

#### Test your Delete Route with Postman
<img src="https://miro.medium.com/max/516/1*MP7BSXKJrQzCz_aI2zJr-g.png" width="300px" >

<hr>
<br>

### :right_anger_bubble: Create an update route

In order to UPDATE, we use the http verb `PUT`.


```js
router.put('', (req, res) => {
	
});
```


Inside server.js add the following:

```javascript

router.put('/:indexOfFruitsArray', (req, res) => { //:indexOfFruitsArray is the index of our fruits array that we want to change
    fruits[req.params.indexOfFruitsArray] = req.body; //in our fruits array, find the index that is specified in the url (:indexOfFruitsArray).  Set that element to the value of req.body (the input data)
    res.send(fruits[req.params.indexOfFruitsArray]);
});

```

<hr>

#### Test your Update Route with Postman
<img src="https://miro.medium.com/max/516/1*MP7BSXKJrQzCz_aI2zJr-g.png" width="300px" >

