// href

// value

// type

// getAttribute(attrName)

// setAttribute(attrName, value)

const a = document.querySelector("a");

console.log(a.href);

const input = document.querySelector("input");

console.log(input.value);

console.log(input.type);

a.href = "https://www.google.com";
console.log((input.value = "Hello"));
console.log((input.type = "password"));
console.log((input.placeholder = "Provide a strong password"));

console.log(input.getAttribute("type"));

// getAttribute(attrName, value)
console.log(input.setAttribute("placeholder", "Email"));
