// This exercise is to help with DOM Navigation.  
// It otherwise has no practical real world value.
// Please enter your code for each part under the appropriate comment.

//---------------------------------------------
// Create a variable to hold the requested item and log it to the console

// 1.  The heading that says "Weekly Specials"
var WeekSpecial = document.getElementsByTagName("h2")[0];
console.log(WeekSpecial);
// 2.  The next sibling of the item from #1.
var Sibling = document.getElementsByTagName("ul")[0];
console.log(Sibling);

// 3.  The first child of the item from #2.
var child = document.getElementsByTagName("li")[0];
console.log(child);
//  4. The item with the id of "move".
var move = document.getElementById("move");
console.log(move);
//  5. The last child of the item from #4.
var lastchild = move.getElementsByTagName("p")[1];
console.log(lastchild);
//  6. All of the paragraphs that are children of the item from #4.
var allP = move.getElementsByTagName("p");
console.log(allP);
//  7. The previous sibling of the item from #4.
var prevsibling = document.getElementById("origin");
console.log(prevsibling);
//  8. All of the h3's that are children of the item from #7
var allchild = prevsibling.getElementsByTagName("h3");
console.log(allchild);
//  9. Get all of the h3's and Alert (pop-up) the text from each one.  
//     (Extra - do it all in one alert box!)
var h3 = document.getElementsByTagName("h3"),
    h3Count = h3.length,
    i;
var hstring = "";
for (i = 0; i < h3Count; i = i + 1) {
    hstring = hstring + String(h3[i].innerHTML);
}
function h3text() {"use strict";
    alert(hstring);

                  }
console.log(h3);
h3text();
//---------------------------------------------------------------------------------
// 10.  Get all articles in the document.
//      Use a for loop to do the following to each one:
//        - log it to the console
//        - add the class of hide to the h3
//        - EXTRA!  - If there are two paragraphs of text, hide the second one
// --------------------------------------------------------------------------------
var articles = document.getElementsByTagName("article"),
    articleCount = articles.length,
    i;
for (i = 0; i < articleCount; i = i + 1) {
    console.log(articles[i]);
    articles[i].getElementsByTagName("h3")[0].setAttribute("class", "hide");
    if (articles[i].getElementsByTagName("p").length > 1){
        articles[i].getElementsByTagName("p")[1].setAttribute("class", "hide");
    }
    
 }


//---------------------------------------------------------------------------------
//  Add two new "people" to the team by adding a new h3 followed by a paragraph.
//  1. Add "Abby" to the end of the list.  In the paragraph say "Abby is the shop mouser."
//  2. Add "Maris" AFTER "Moonflower".  In the paragraph Say "Maris was here."
//---------------------------------------------------------------------------------
var target = document.getElementById("people");

var h3Abby = document.createElement("h3");

var AbbyText = document.createElement("p");

var AbbyP = document.createTextNode("Abby is the shop mouser.");

var Abby = document.createTextNode("Abby");

h3Abby.appendChild(Abby);
AbbyText.appendChild(AbbyP);
target.appendChild(h3Abby);
target.appendChild(AbbyText);



var h3Maris = document.createElement("h3");
var MarisText = document.createElement("p");
var Maris = document.createTextNode("Maris");
var MarisP = document.createTextNode("Maris was here.");
h3Maris.appendChild(Maris);
MarisText.appendChild(MarisP);
target.insertBefore(h3Maris, document.getElementById("kisa"));
target.insertBefore(MarisText, document.getElementById("kisa"));


