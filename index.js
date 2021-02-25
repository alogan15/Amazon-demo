const myHeading = document.getElementById('heading');

myHeading.addEventListener('click', () => {
    myHeading.style.color = 'orange';
});

document.getElementById("heading").innerHTML = "Amazon";


const productData = [{
    img: "images/blkhoodie.jpg",
    title: "Hoodie",
    size: "S",
    size1: "M",
    size2: "L",
    price: "$100",
    button: "Add to Cart"
}, {
    img: "images/bluetee.jpg",
    title: "Shirt",
    size: "S",
    size1: "M",
    size2: "L",
    price: "$90",
    button: "Add to Cart"
}, {
    img: "images/blktee.jpg",
    title: "Shirt",
    size: "S",
    size1: "M",
    size2: "L",
    price: "$85",
    button: "Add to Cart"
}, {
    img: "images/dbbutton.jpg",
    title: "Shirt",
    size: "S",
    size1: "M",
    size2: "L",
    price: "$110",
    button: "Add to Cart"
}, {
    img: "images/facehoodie.jpg",
    title: "Shirt",
    size: "S",
    size1: "M",
    size2: "L",
    price: "$190",
    button: "Add to Cart"
    }, {
    img: "images/greybutton.jpg",
    title: "Shirt",
    size: "S",
    size1: "M",
    size2: "L",
    price: "$120",
    button: "Add to Cart"
}, {
    img: "images/mustardtee.jpg",
    title: "Shirt",
    size: "S",
    size1: "M",
    size2: "L",
    price: "$65",
    button: "Add to Cart"
}, {
    img: "images/plaidshirt.jpg",
    title: "Shirt",
    size: "S",
    size1: "M",
    size2: "L",
    price: "$90",
    button: "Add to Cart"
}, {
    img: "images/whiteshirt.jpg",
    title: "Shirt",
    size: "S",
    size1: "M",
    size2: "L",
    price: "$80",
    button: "Add to Cart"
}, {
  img: "images/bluetee.jpg",
  title: "Shirt",
  size: "S",
  size1: "M",
  size2: "L",
  price: "$80",
  button: "Add to Cart"
}, {
  img: "images/blktee.jpg",
  title: "Shirt",
  size: "S",
  size1: "M",
  size2: "L",
  price: "$80",
  button: "Add to Cart"
}, {
  img: "images/blkhoodie.jpg",
  title: "Shirt",
  size: "S",
  size1: "M",
  size2: "L",
  price: "$80",
  button: "Add to Cart"
}
]

// Container of all the Cards
const container = document.getElementById('grid');

productData.forEach((result) => {

  //Create a card element
  const card = document.createElement('div');

  //Construct card content
  const content = `
    <div class="card">
      <img src=${result.img} class="card-img-top" alt="hoodie">
      <div class="card-body">
        <h5 class="card-title text-center">${result.title}</h5>
        <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group me-2 mx-auto" role="group" aria-label="First group">
        <button type="button" class="btn btn-outline-secondary">${result.size}</button>
        <button type="button" class="btn btn-outline-secondary">${result.size1}</button>
        <button type="button" class="btn btn-outline-secondary">${result.size2}</button>
        
      </div>
      </div>
        <p class="card-text text-center">${result.price}</p>
      <div class="d-grid gap-2 col- mx-auto">
        <button type="button" class="btn btn-secondary">${result.button}</button>
      </div>
      </div>
    </div>`;

    //Append newly created card element to the container
    container.innerHTML += content;
})




