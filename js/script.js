// This exercise is to help with DOM Navigation.  
// It otherwise has no practical real world value.
// Please enter your code for each part under the appropriate comment.

//---------------------------------------------
// Create a variable to hold the requested item and log it to the console

// 1.  The heading that says "Weekly Specials"
var headings = document.getElementsByTagName("h2");
heading = headings[0];
console.log(heading);

// 2.  The next sibling of the item from #1.
var lists = document.getElementsByTagName("ul");
list = lists[0]
console.log(list);

// 3.  The first child of the item from #2.
var items = list.getElementsByTagName("li");
item = items[0];
console.log(item);

//  4. The item with the id of "move".
var move = document.getElementById("move");
console.log(move);


//  5. The last child of the item from #4.
var paras = move.getElementsByTagName("p");
para = paras[1];
console.log(para);

//  6. All of the paragraphs that are children of the item from #4.
console.log(paras);
//  7. The previous sibling of the item from #4.
var origin = document.getElementById("origin");
console.log(origin);

//  8. All of the h3's that are children of the item from #7
var heads = origin.getElementsByTagName("h3");
console.log(heads);

//  9. Get all of the h3's and Alert (pop-up) the text from each one.  
//     (Extra - do it all in one alert box!)
var allhead = document.getElementsByTagName("h3");
for (i = 0; i < allhead.length; i++) {
    alert(allhead[i].textContent);
}

//---------------------------------------------------------------------------------
// 10.  Get all articles in the document.
//      Use a for loop to do the following to each one:
//        - log it to the console
//        - add the class of hide to the h3
//        - EXTRA!  - If there are two paragraphs of text, hide the second one
// --------------------------------------------------------------------------------
var articles = document.getElementsByTagName("article");
for (a = 0; a < articles.length; a++) {
    console.log(articles[a]);
articles[a].firstElementChild.setAttribute("class", "hide");
};
//---------------------------------------------------------------------------------
//  Add two new "people" to the team by adding a new h3 followed by a paragraph.
//  1. Add "Abby" to the end of the list.  In the paragraph say "Abby is the shop mouser."
//  2. Add "Maris" AFTER "Moonflower".  In the paragraph Say "Maris was here."
//---------------------------------------------------------------------------------
var id = document.getElementById("rose");
var h3 = document.createElement("h3");
var abby = document.createTextNode("Abby");
h3.appendChild(abby);
id.appendChild(h3);

var abbypara = document.createElement("p");
var abbytext = document.createTextNode("Abby is the shop mouser.");
var spot = id.lastElementChild
abbypara.appendChild(abbytext);
spot.appendChild(abbypara);

var moon = document.getElementById("moonflower");
var h32 = document.createElement("h3");
var maris = document.createTextNode("Maris");
h32.appendChild(maris);

var marispara = document.createElement("p");
var maristext = document.createTextNode("Maris was here");
marispara.appendChild(maristext);
moon.appendChild(h32);

moon.appendChild(marispara);




