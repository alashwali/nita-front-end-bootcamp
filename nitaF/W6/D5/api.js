// import axios from 'axios';
// //Get: Used to Get Data / Resources from a Server.
// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//      .then(response=>console.log('Get Response:',response.data))
//      .catch(error=>console.log('Error:',error));
// //Post: Used to Post Data to the Server.
// const postData = 
// {   userID: '1',
//     title: 'PostDemo',
//     body: 'This is a demo of how to use Post Method'
// }
// axios.post('https://jsonplaceholder.typicode.com/posts',postData);
// //Put: Used to Update the Data already present on the Server
// const putData = 
// {   userID: '1',
//     title: 'PutDemo',
//     body: 'This is a demo of how to use Put Method'
// }
// axios.put('https://jsonplaceholder.typicode.com/posts/1',putData)
// .then(response=>console.log('Put Response:',response.data))
// .catch(error=>console.log('There was error:',error));

// //Delete: Used to Delete the Data present on the Server.
// axios.delete('https://jsonplaceholder.typicode.com/posts/1')
// .then(response=>console.log('Delete Response:',response.data))
// .catch(error=>console.log('There was error:',error));


fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
fetch("", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "John", age: 30 }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
