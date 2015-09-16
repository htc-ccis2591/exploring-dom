// This exercise is to help with DOM Navigation.  
// It otherwise has no practical real world value.
// Please enter your code for each part under the appropriate comment.

//---------------------------------------------
// Create a variable to hold the requested item and log it to the console

// 1.  The heading that says "Weekly Specials"
var headings = document.getElementsByTagName("h2");
console.log(headings);

// 2.  The next sibling of the item from #1.
var headingSibling = document.getElementsByTagName("ul");
console.log(headingSibling);

// 3.  The first child of the item from #2.
console.log(headingSibling.firstChild);

//  4. The item with the id of "move".
var move = document.getElementById("move");
console.log(move);

//  5. The last child of the item from #4.
console.log(move.lastChild);

//  6. All of the paragraphs that are children of the item from #4.
var move_children = move.children;
console.log(move.children);

//  7. The previous sibling of the item from #4.
//moveChildrenSibling = move_children[move_children.length - 1];
//console.log(moveChildrenSibling);
var origin = document.getElementById("origin");
console.log(origin);

//  8. All of the h3's that are children of the item from #7
var origin_children = menu.getElementsByTagName("h3");
for(i = 0; i < origin_children.length; i++){
console.log(origin_children[i]);
}

//  9. Get all of the h3's and Alert (pop-up) the text from each one.  
//     (Extra - do it all in one alert box!)
var getH3 = document.getElementsByTagName("h3");
console.log(getH3);
for(i = 0; i < getH3.length; i++){
    current_h3 = getH3[i];
    alert("h3 is: " + current_h3.firstChild.nodeValue);
}


//---------------------------------------------------------------------------------
// 10.  Get all articles in the document.
//      Use a for loop to do the following to each one:
//        - log it to the console
//        - add the class of hide to the h3
//        - EXTRA!  - If there are two paragraphs of text, hide the second one
// --------------------------------------------------------------------------------
var all_articles = document.getElementsByTagName("article");
for(i = 0; i < all_articles.length; i++){
    current_article = all_articles[i];
    console.log(current_article);
    current_h3 = current_article.getElementsByTagName("h3");
    current_h3.className = current_h3.className + " hide";
}

//---------------------------------------------------------------------------------
//  Add two new "people" to the team by adding a new h3 followed by a paragraph.
//  1. Add "Abby" to the end of the list.  In the paragraph say "Abby is the shop mouser."
//  2. Add "Maris" AFTER "Moonflower".  In the paragraph Say "Maris was here."
//---------------------------------------------------------------------------------


