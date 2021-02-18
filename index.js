const myHeading = document.getElementById('heading');

myHeading.addEventListener('click', () => {
    myHeading.style.color = 'orange';
});

document.getElementById("heading").innerHTML = "Amazon";




// var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// var text = "";
// var i;
// for (i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = text;


// const names = ['andre', 'london', 'paris', 'ken', 'grace', 'tay'];

// for(let i = 0; i < names.length; i++) {
//   console.log(names[i]);
//   if (i === 3) break;
// }

// for(name of names) console.log(name);

var images = ["images/blkhoodie.jpg", "images/blktee.jpg", "images/bluetee.jpg", "images/dbbutton.jpg", "images/whiteshirt.jpg", "images/plaidshirt.jpg"]

function myImages() {
  document.getElementById("images").src = images[2];
  console.log('images');
}

for(let i = 0; i < images.length; i++) {
  console.log(images[i]);
  if (i === 3) break;
}