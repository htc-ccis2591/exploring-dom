// This exercise is to help with DOM Navigation.  
// It otherwise has no practical real world value.
// Please enter your code for each part under the appropriate comment.

//---------------------------------------------
// Create a variable to hold the requested item and log it to the console
var item = document.getElementsByTagName("h1");
console.log(item);

// 1.  The heading that says "Weekly Specials"
var headings = document.getElementsByTagName("h2").item(0); console.log(headings);

// 2.  The next sibling of the item from #1. 
var ULunderHeadings = headings.nextElementSibling;
console.log(ULunderHeadings);

// 3.  The first child of the item from #2.
var UlChild = ULunderHeadings.firstElementChild;
console.log(UlChild);

//  4. The item with the id of "move".
var idMove = document.getElementById ("move");
console.log(idMove);

//  5. The last child of the item from #4.
var idMoveChild = idMove.lastElementChild;
console.log(idMoveChild);

//  6. All of the paragraphs that are children of the item from #4.
var paragraphs = idMove.getElementsByTagName("p"); console.log(paragraphs);

//  7. The previous sibling of the item from #4.
var idItemSibling = idMove.previousElementSibling;
console.log(idItemSibling);

//  8. All of the h3's that are children of the item from #7
var allItemChildren = idItemSibling.getElementsByTagName("h3");
console.log(allItemChildren);

//  9. Get all of the h3's and Alert (pop-up) the text from each one.  
//     (Extra - do it all in one alert box!)
var allheading3s = document.getElementsByTagName("h3");
var i=0;
for (i=0; i<allheading3s.length; i++){
alert (allheading3s[i].firstChild.nodeValue);
}


//---------------------------------------------------------------------------------
// 10.  Get all articles in the document.
//      Use a for loop to do the following to each one:
//        - log it to the console
//        - add the class of hide to the h3
//        - EXTRA!  - If there are two paragraphs of text, hide the second one

var allarticles = document.getElementsByTagName("article");
var i=0;
for (i=0; i<allarticles.length; i++){
console.log(allarticles[i]);
    var article = allarticles[i];
    var heading = article.getElementsByTagName("h3");
    heading[0].setAttribute("class", "hide");
}

//var articleExtra = allElements.getElementsByTagName("p");
    //for (ii = 0; ii < articleExtra.length; ii++) {
        //if (ii == 1) {
            //var articleInd = articleExtra[ii];
            //articleInd.setAttribute("class", "hide");
        //}
//}
// --------------------------------------------------------------------------------


//---------------------------------------------------------------------------------
//  Add two new "people" to the team by adding a new h3 followed by a paragraph.
//  1. Add "Abby" to the end of the list.  In the paragraph say "Abby is the shop mouser."
//  2. Add "Maris" AFTER "Moonflower".  In the paragraph Say "Maris was here."

var idPeople = document.getElementById("people");

var p = document.createElement("p");
var h3 = document.createElement("h3");
var textheading = document.createTextNode("Abby");
var heading = document.createTextNode("Abby is the shop mouser");
idPeople.appendChild(h3);
idPeople.appendChild(p);
h3.appendChild(textheading);
p.appendChild(heading);

var idMoonflower = document.getElementById("moonflower");
var p = document.createElement("p");
var h3 = document.createElement("h3");
var textheading = document.createTextNode("Maris");
var heading = document.createTextNode("Maris was here");
idMoonflower.appendChild(h3);
idMoonflower.appendChild(p);
h3.appendChild(textheading);
p.appendChild(heading);



//---------------------------------------------------------------------------------


