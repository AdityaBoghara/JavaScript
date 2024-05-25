// fetch data from txt File
// ---------------------------------------
// const promiseObj = fetch("text.txt");
// console.log(promiseObj);
// // promiseObj.then((res) => console.log(res));
// promiseObj
//   .then((res) => {
//     // text method returns promise, if resolved will return text representation of body.
//     return res.text();
//   })
//   .then((data) => console.log(data));
// ---------------------------------------

// ---------------------------------------
// Removing Clutters
// fetch("text.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// ---------------------------------------

// ---------------------------------------
// Handling Errors
// -> Fetch API promise only rejects when we have network error (not in other cases).

// This is not a network error 👇
// fetch("texxxxxt.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// ---------------------------------------

// ---------------------------------------
// Handling Errors (Real Code)

// fetch("text.txt")
//   .then((res) => {
//     if (!res.ok) throw Error(res.statusText);
//     return res.text();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// ---------------------------------------

// ---------------------------------------
// Displaying Results to the (browser)

// const result = document.querySelector(".result");

// fetch("text.txt")
//   .then((res) => {
//     if (!res.ok) throw Error(res.statusText);
//     return res.text();
//   })
//   .then((data) => (result.innerHTML = data))
//   .catch((err) => console.log(err));
// ---------------------------------------

// ---------------------------------------
// Using async/await (without Error Handling)
// const result = document.querySelector(".result");

// async function readData() {
//   const response = await fetch("text.txt");
//   const data = await response.text();
//   result.textContent = data;
// }

// readData();
// ---------------------------------------

// ---------------------------------------
// Using async/await (With Error Handling)
// const result = document.querySelector(".result");

// async function readData() {
//   try {
//     const response = await fetch("text.txt");
//     if (!response.ok) throw Error(response.statusText);
//     const data = await response.text();
//     result.textContent = data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// readData();

// -----------------------------------------Fetching from JSON----------------------------------

const result = document.querySelector(".result");

async function renderData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw Error(response.statusText);
    const data = await response.json();
    result.textContent = `${data.name} and roll no ${data.roll}`;
    // result.textContent = data.roll;
  } catch (error) {
    console.log(error);
  }
}

renderData();

// -----------------------------------------Fetching from API----------------------------------

const btn = document.querySelector(".btn");
btn.addEventListener("click", makeRequest);

// ---------------------------------------
// function makeRequest() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => {
//       if (!res.ok) new Error(res.statusText);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data.id);
//       console.log(data.title);
//       console.log(data.body);
//     })
//     .catch((error) => console.log(error));
// }
// ---------------------------------------

// ---------------------------------------
// Rendering content to the browser
// function makeRequest() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => {
//       if (!res.ok) new Error(res.statusText);
//       return res.json();
//     })
//     .then((data) => {
//       document.querySelector(".id").innerHTML = data.id;
//       document.querySelector(".title").innerHTML = data.title;
//       document.querySelector(".body").innerHTML = data.body;
//     })
//     .catch((error) => console.log(error));
// }
// ---------------------------------------

// ---------------------------------------
// Rendering Multiple Data
function makeRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) new Error(res.statusText);
      return res.json();
    })
    .then((data) => {
      let output = document.querySelector(".all-posts");
      data.forEach((element) => {
        output.innerHTML += `
            <div>ID: ${element.id} </div>
            <div>Title: ${element.title} </div>
            <div>Body: ${element.body} </div> </br>
            <hr>
        `;
      });
    })
    .catch((error) => console.log(error));
}
// ---------------------------------------
