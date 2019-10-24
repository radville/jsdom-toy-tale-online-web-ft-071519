const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
  } else {
    toyForm.style.display = 'none'
  }
})

document.addEventListener("DOMContentLoaded", function() {
  return fetch('http://localhost:4000/toys')
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    for (const element of json) {
    let card = document.createElement("div");
    card.classList.add("card");
    document.getElementById("toy-collection").appendChild(card)
    let h2 = document.createElement("h2");
    h2.innerHTML = element.name;
    card.appendChild(h2);
    let img = document.createElement("img");
    img.src = element.image;
    img.classList.add("toy-avatar");
    card.appendChild(img);
    card.appendChild(document.createElement("p"));
    button = document.createElement("button");
    button.classList.add("like-btn");
    var text = document.createTextNode("Like <3"); 
    button.appendChild(text);
    card.appendChild(button);
    }  
});
})

let formData = {
  name: document.querySelector(".input-text").value,
  image: document.querySelector(".input-text + br + .input-text").value,
  likes: 0
};
 
let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
 
fetch("http://localhost:4000/toys", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  });