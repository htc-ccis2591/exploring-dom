// This exercise is to help with DOM Navigation.  
// It otherwise has no practical real world value.
// Please enter your code for each part under the appropriate comment.

//---------------------------------------------
// Create a variable to hold the requested item and log it to the console

// 1.  The heading that says "Weekly Specials"
var weekSpecials = document.getElementsByTagName("h2").item(0);
console.log(weekSpecials);


// 2.  The next sibling of the item from #1.
var nextSib = weekSpecials.nextElementSibling;
console.log(nextSib);


// 3.  The first child of the item from #2.
var firstChild = nextSib.firstElementChild;
console.log(firstChild);


//  4. The item with the id of "move".
var itemMove = document.getElementById("move");
console.log(itemMove);


//  5. The last child of the item from #4.
var lastSib = itemMove.lastElementChild;
console.log(lastSib);


//  6. All of the paragraphs that are children of the item from #4.
var paraChildren = itemMove.getElementsByTagName("p");
console.log(paraChildren);
//check

//  7. The previous sibling of the item from #4.
var previousSib = itemMove.previousElementSibling;
console.log(previousSib);


//  8. All of the h3's that are children of the item from #7
//var childrenTypeH3s = previousSib.getElementsByTagName("h3");
var childrenTypeH3s = previousSib.getElementsByTagName("h3");
console.log(childrenTypeH3s);
//check


//  9. Get all of the h3's and Alert (pop-up) the text from each one.
var h3sPopup = document.getElementsByTagName("h3");
for (i=0; i <  h3sPopup.length; i++){
    var h3Headings = h3sPopup[i];


alert(h3Headings.textContent);
console.log(h3Headings);
}
//     (Extra - do it all in one alert box!)

//---------------------------------------------------------------------------------
// 10.  Get all articles in the document.
var articles = document.getElementsByTagName("article");
console.log(articles);

//      Use a for loop to do the following to each one:
for (i=0; i< articles.length; i++){
    var h3Articles = articles[i];
//     - log it to the console
    console.log(h3Articles);
    var hiddenArticles = h3Articles.getElementsByTagName("h3").item(0);
 //        - add the class of hide to the h3
    hiddenArticles.setAttribute("class", "hide");
    console.log(hiddenArticles);
}
    



//        - EXTRA!  - If there are two paragraphs of text, hide the second one
// --------------------------------------------------------------------------------


//---------------------------------------------------------------------------------
//  Add two new "people" to the team by adding a new h3 followed by a paragraph.
var targetArea = document.getElementById("moonflower");
console.log(targetArea);

var aTargetArea = document.getElementById("people");
//console.log(targetArea);


//  1. Add "Abby" to the end of the list.  In the paragraph say "Abby is the shop mouser."
var headAbby = document.createElement("h2");
console.log(headAbby);
var pAbby = document.createElement("p");
console.log(pAbby);
var textAbby = document.createTextNode("Abby is the shop mouser.");
var textHeadAbby = document.createTextNode("Abby");
console.log(textAbby);
headAbby.appendChild(textHeadAbby)
aTargetArea.appendChild(headAbby);
pAbby.appendChild(textAbby);
console.log(pAbby);
aTargetArea.appendChild(pAbby);
console.log(aTargetArea);

//  2. Add "Maris" AFTER "Moonflower".  In the paragraph Say "Maris was here."

//---------------------------------------------------------------------------------
var headMaris = document.createElement("h2");
console.log(headMaris);

var pmaris = document.createElement("p");
console.log(pmaris);
var textmaris = document.createTextNode("Maris was here.");
var textHeadmaris = document.createTextNode("Maris");
console.log(textHeadmaris);
headMaris.appendChild(textHeadmaris);
targetArea.appendChild(headMaris);
console.log(textmaris);
pmaris.appendChild(textmaris);
targetArea.appendChild(pmaris);
console.log(targetArea);

