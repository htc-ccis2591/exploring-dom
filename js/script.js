// This exercise is to help with DOM Navigation.  
// It otherwise has no practical real world value.
// Please enter your code for each part under the appropriate comment.

//---------------------------------------------
// Create a variable to hold the requested item and log it to the console

// 1.  The heading that says "Weekly Specials"

var headings = document.getElementsByTagName("h2").item(0);
console.log(headings);

// 2.  The next sibling of the item from #1.

var nextSibling = document.getElementsByTagName("h2").item(1);
console.log(nextSibling);

// 3.  The first child of the item from #2.

var firstChild = document.getElementById("origin").firstElementChild;
console.log(firstChild);

//  4. The item with the id of "move".

var item = document.getElementById("move");
console.log(item);

//  5. The last child of the item from #4.

var lastChild = document.getElementById("move").lastElementChild;
console.log(lastChild);

//  6. All of the paragraphs that are children of the item from #4.

var paraChild = document.getElementById("move").childNodes;
console.log(paraChild);

//  7. The previous sibling of the item from #4.

var prevSibling = document.getElementById("move").previousElementSibling;
console.log(prevSibling);

//  8. All of the h3's that are children of the item from #7

var hChild = document.getElementById("origin").firstElementChild;
console.log(hChild);

//  9. Get all of the h3's and Alert (pop-up) the text from each one.  
//     (Extra - do it all in one alert box!)

var h3Alert = document.getElementsByTagName("h3");

for (var i = 0; i < h3Alert.length; i++) {
    h3 = h3Alert[i];
    alert("The h3 is: " + h3.textContent);

}
    //---------------------------------------------------------------------------------
    // 10.  Get all articles in the document.
    //      Use a for loop to do the following to each one:
    //        - log it to the console
    //        - add the class of hide to the h3
    //        - EXTRA!  - If there are two paragraphs of text, hide the second one
    //--------------------------------------------------------------------------------
var docArticles = document.getElementsByTagName("p");

for(var i = 0; i < docArticles.length; i++) {
    p = docArticles[i];
    h3.setAttribute("class", "hide");
}


    



    //---------------------------------------------------------------------------------
    //  Add two new "people" to the team by adding a new h3 followed by a paragraph.
    //  1. Add "Abby" to the end of the list.  In the paragraph say "Abby is the shop mouser."
    //  2. Add "Maris" AFTER "Moonflower".  In the paragraph Say "Maris was here."
    //---------------------------------------------------------------------------------
var para = document.createElement("h3");
var node = document.createTextNode("Abby");
para.appendChild(node);

var element = document.getElementById("rose");
element.appendChild(para);

var para = document.createElement("p");
var node = document.createTextNode("Abby is the shop mouser.");
para.appendChild(node);

var element = document.getElementById("rose");
element.appendChild(para);

var para = document.createElement("h3");
var node = document.createTextNode("Maris");
para.appendChild(node);

var element = document.getElementById("moonflower");
element.appendChild(para);

var para = document.createElement("p");
var node = document.createTextNode("Maris was here.");
para.appendChild(node);

var element = document.getElementById("moonflower");
element.appendChild(para);