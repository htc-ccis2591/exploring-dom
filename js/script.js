// This exercise is to help with DOM Navigation.  
// It otherwise has no practical real world value.
// Please enter your code for each part under the appropriate comment.

//---------------------------------------------
// Create a variable to hold the requested item and log it to the console

// 1.  The heading that says "Weekly Specials"

var h2text = document.querySelector("aside h2");
console.log(h2text);

// 2.  The next sibling of the item from #1.

console.log(h2text.nextElementSibling);


// 3.  The first child of the item from #2.

console.log(h2text.nextElementSibling.firstElementChild);


//  4. The item with the id of "move".

var item = document.getElementById("move");
console.log(item);

//  5. The last child of the item from #4.

console.log(item.lastElementChild);

//  6. All of the paragraphs that are children of the item from #4.

var p_childs = item.getElementsByTagName("p"); 
console.log(p_childs);

//  7. The previous sibling of the item from #4.

console.log(item.previousElementSibling);

//  8. All of the h3's that are children of the item from #7

var h3_all = item.previousElementSibling.getElementsByTagName("h3");
console.log(h3_all);


//  9. Get all of the h3's and Alert (pop-up) the text from each one.  
//     (Extra - do it all in one alert box!)


//this works only alert text from each one of the h3s.
var h3s = document.getElementsByTagName("h3");
console.log(h3s);

for (i = 0; i < h3s.length; i++) {
    current_heading = h3s[i]
    alert("Heading is: " + current_heading.firstChild.nodeValue);
}

//---------------------------------------------------------------------------------
// 10.  Get all articles in the document.
//      Use a for loop to do the following to each one:
//        - log it to the console
//        - add the class of hide to the h3
//        - EXTRA!  - If there are two paragraphs of text, hide the second one
// --------------------------------------------------------------------------------

//var article_h3 = document.getElementsByTagName("h3");
//console.log(article_h3);
//
//for (a = 0; a < article_h3.length; a++) {
//    all_article = article_h3[a]
//    all_article.setAttribute("class","hide");
//
//}

//---------------------------------------------------------------------------------
//  Add two new "people" to the team by adding a new h3 followed by a paragraph.
//  1. Add "Abby" to the end of the list.  In the paragraph say "Abby is the shop mouser."
//  2. Add "Maris" AFTER "Moonflower".  In the paragraph Say "Maris was here."
//---------------------------------------------------------------------------------

//  1. Add "Abby" to the end of the list.  In the paragraph say "Abby is the shop mouser."
var allelement = document.getElementById("people");

var article_add = document.createElement("article");
article_add.setAttribute("id","abby");
allelement.appendChild(article_add);

var h3_add = document.createElement("h3");
var h3p_add = document.createTextNode("Abby");

var p_add = document.createElement("p");
var p_text = document.createTextNode("Abby is the shop mouser.");

h3_add.appendChild(h3p_add);
p_add.appendChild(p_text);
article_add.appendChild(h3_add);
article_add.appendChild(p_add);


//  2. Add "Maris" AFTER "Moonflower".  In the paragraph Say "Maris was here."
var sec_people = document.getElementById("people"),
    firstChild = sec_people.childNodes[3];

if (sec_people && firstChild) {

var article_add_maris = document.createElement("article");
article_add_maris.setAttribute("id","maris");


var h3_add_maris = document.createElement("h3");
var h3p_add_maris  = document.createTextNode("Maris");

var p_add_maris  = document.createElement("p");
var p_text_maris  = document.createTextNode("Maris was here.");

h3_add_maris.appendChild(h3p_add_maris);
p_add_maris.appendChild(p_text_maris);
article_add_maris.appendChild(h3_add_maris);
article_add_maris.appendChild(p_add_maris);
    
    firstChild.parentNode.insertBefore(article_add_maris, firstChild.nextSibling); 
}

var childall = allelement.children;
console.log(childall);










