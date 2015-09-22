// Be sure to add an IIFE to scope your work!
(function (){
var featured = {
    items : [
        {
            name: "Hazelnut Cappuccino",
            image: "images/cappuccino.jpg",
            description: "A warm, soothing cappuccino with a touch of hazelnut to warm you as the weather turns."
},
        {
          name: "Chocolate Cake",
          image: "images/choc-cake.jpg",
         description: "Our chocolate cake is rich, moist, and dark. More chocolate to love."
            
        }
        ]}      ;



console.log(featured);

var items = featured.items;
console.log(items);

var targetArea = document.getElementById("featured-items");
console.log(targetArea);
   
    for (i=0; i< items.length; i++){
        var lItems = items[i];
        var lName = document.createElement("h3");
        var textName = document.createTextNode(lItems.name);
        lName.appendChild(textName);
        targetArea.appendChild(lName);
//        var array = [
        var removeHide = document.getElementsByTagName("aside").item(0).removeAttribute("class");
        
        console.log(items);
        console.log(lName);
        console.log(textName);
        console.log(targetArea);
        console.log(removeHide);
        
    }
    
    




}())
    




