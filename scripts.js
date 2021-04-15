var jsonCollection = [
  {
    "image":"images/locs.jpg",
    "hairstyle":"Distressed Locs",
    "description": ["long distressed locs using water wave hair", "price: $200"],
    "button":""
   },
   {
     "image":"images/braids.jpg",
     "hairstyle":"Knotless Box Braids",
     "description": ["long knotless boxbraids using kenakelon hair", "price: $150"],
     "button":""
    },
    {
      "image":"images/marley.jpg",
      "hairstyle":"Long Marley Twists",
      "description": ["long marley twists using Marley Hair", "price: $150"],
      "button":""
     },
     {
       "image":"images/passtwits.jpg",
       "hairstyle":"Short Passion Twists",
       "description": ["Short passion twists using waterwave hair", "price: $100"],
       "button":""
      }
  ];

let output = document.getElementById("JSONCollect");
for (var i=0; i<jsonCollection.length; i++){
  readFromDatabase(jsonCollection[i]);
}
function readFromDatabase(partOfDatabase){
  let newDiv = document.createElement("DIV");
  newDiv.classList.add("hairStyle");


  let leftDiv = document.createElement("DIV");
  leftDiv.classList.add("leftDiv");

  let theImage = document.createElement("IMG");
  theImage.classList.add("hairstylePic");
  theImage.src = partOfDatabase["image"];
  leftDiv.appendChild(theImage);
  newDiv.appendChild(leftDiv);

  let rightDiv = document.createElement("DIV");
  rightDiv.classList.add("rightDiv");

  let styleName  = document.createElement("H3");
  styleName.innerText = partOfDatabase["hairstyle"];
  styleName.classList.add("sName");
  rightDiv.appendChild(styleName);


  for(var i =0;i<partOfDatabase["description"].length;i++){
    var point = partOfDatabase["description"][i];
    let bulPoint= document.createElement("LI");
    bulPoint.innerText = point;
    rightDiv.appendChild(bulPoint);
  }

  let bullets = document.createElement("UL");
  rightDiv.appendChild(bullets);

  let  buttonMade= document.createElement("A");
  buttonMade.classList.add("divButton");
  buttonMade.innerText = "Book Now";
  rightDiv.appendChild(buttonMade);

  buttonMade.addEventListener("click", buttonClicked);

  newDiv.appendChild(rightDiv);
  output.appendChild(newDiv);



}

function buttonClicked(){
  console.log("button was clicked, booking website coming soon :)")
}
