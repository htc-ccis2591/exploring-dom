// This exercise is to help with DOM Navigation.  
// It otherwise has no practical real world value.
// Please enter your code for each part under the appropriate comment.

//---------------------------------------------
// Create a variable to hold the requested item and log it to the console

// 1.  The heading that says "Weekly Specials"

var wSpecials = document.getElementsByTagName("aside")[0].childNodes[3];
console.log(wSpecials);

// 2.  The next sibling of the item from #1.

var uList = document.getElementsByTagName("aside")[0].childNodes[3].nextElementSibling;
console.log(uList);

// 3.  The first child of the item from #2.

var fListItem = document.getElementsByTagName("ul")[0].childNodes[1];
console.log(fListItem);

//  4. The item with the id of "move".

var articleMove = document.getElementById("move");
console.log(articleMove);

//  5. The last child of the item from #4.

var articleMove = document.getElementById("move");
articleMoveLastChild = articleMove.lastElementChild;
console.log(articleMoveLastChild);

//  6. All of the paragraphs that are children of the item from #4.

var articleMove = document.querySelectorAll("#move p");
console.log(articleMove);


//  7. The previous sibling of the item from #4.

var articleMove = document.getElementById("move");
articleMovePreviousSibling = articleMove.previousElementSibling;
console.log(articleMovePreviousSibling);

//  8. All of the h3's that are children of the item from #7

var articleOrigin = document.querySelectorAll("#origin h3");
console.log(articleOrigin);

//  9. Get all of the h3's and Alert (pop-up) the text from each one.  
//     (Extra - do it all in one alert box!)


// Individual Alerts ----

var allh3s = document.querySelectorAll("body h3");

for (i = 0; i < allh3s.length; i = i + 1) {
    h3Text = allh3s[i];
    h3TextContent = h3Text.textContent;
    alert(h3TextContent);
    console.log(h3TextContent);
}


// All in one Alert ---

var allh3s = document.querySelectorAll("body h3");
var allh3sText = new Array();

for (i = 0; i < allh3s.length; i = i + 1) {
    h3Text = allh3s[i];
    h3TextContent = h3Text.textContent;
    allh3sText.push(h3TextContent);
}
alert(allh3sText);
console.log(allh3sText);

//---------------------------------------------------------------------------------
// 10.  Get all articles in the document.
//      Use a for loop to do the following to each one:
//        - log it to the console
//        - add the class of hide to the h3
//        - EXTRA!  - If there are two paragraphs of text, hide the second one
// --------------------------------------------------------------------------------


// Hiding all h3s under Article Elements and hide second paragragh if it exists.

var allArticles = document.querySelectorAll("article");
var allArticlesh3s = document.querySelectorAll("article h3");

for (i = 0; i < allArticlesh3s.length; i = i + 1) {
    hideh3 = allArticlesh3s[i];
    hideh3.setAttribute("class", "hide");
    console.log(allArticlesh3s);

    if (allArticles.item(i).childNodes[5]) {
        hideSecondPara = allArticles.item(i).childNodes[5];
        hideSecondPara.style.visibility = "hidden";
        console.log(hideSecondPara);
    }
}

//---------------------------------------------------------------------------------
//  Add two new "people" to the team by adding a new h3 followed by a paragraph.
//  1. Add "Abby" to the end of the list.  In the paragraph say "Abby is the shop mouser."
//  2. Add "Maris" AFTER "Moonflower".  In the paragraph Say "Maris was here."
//---------------------------------------------------------------------------------


// Insert new employee "Abby"

var newTM1_Location = document.getElementById("people");

new_TM1_Article = document.createElement("article");
new_TM1_Article.setAttribute("id", "Abby");
new_TM1_Heading = document.createElement("h3");
new_TM1_HeadingText = document.createTextNode("Abby");
new_TM1_ParaElement = document.createElement("p");
new_TM1_ParaText = document.createTextNode("Abby is the shop mouser.");

newTM1_Location.appendChild(new_TM1_Article);

new_TM1_Para = document.getElementById("Abby");

new_TM1_Article.appendChild(new_TM1_Heading);
new_TM1_Heading.appendChild(new_TM1_HeadingText);
new_TM1_ParaElement.appendChild(new_TM1_ParaText);

new_TM1_Para.appendChild(new_TM1_ParaElement);

// Insert new employee "Maris"

new_TM2_Article = document.createElement("article");
new_TM2_Article.setAttribute("id", "Maris");
var nextArticle = document.getElementsByTagName("article").item(4);
var newTM2_Location = document.getElementById("people").insertBefore(new_TM2_Article, nextArticle);

new_TM2_Heading = document.createElement("h3");
new_TM2_HeadingText = document.createTextNode("Maris");
new_TM2_ParaElement = document.createElement("p");
new_TM2_ParaText = document.createTextNode("Maris was here.");

new_TM2_Para = document.getElementById("Maris");

new_TM2_Article.appendChild(new_TM2_Heading);
new_TM2_Heading.appendChild(new_TM2_HeadingText);
new_TM2_ParaElement.appendChild(new_TM2_ParaText);

new_TM2_Para.appendChild(new_TM2_ParaElement);
