// This exercise is to help with DOM Navigation.  
// It otherwise has no practical real world value.
// Please enter your code for each part under the appropriate comment.

//---------------------------------------------
// Create a variable to hold the requested item and log it to the console

// 1.  The heading that says "Weekly Specials"

var special = document.getElementsByTagName("h2")[0];

// 2.  The next sibling of the item from #1.

special.nextElementSibling

// 3.  The first child of the item from #2.

special.firstElementChild

//  4. The item with the id of "move".

var move = document.getElementById('move')

//  5. The last child of the item from #4.

move.lastElementChild 

//  6. All of the paragraphs that are children of the item from #4.

document.getElementById('move').getElementsByTagName('p');

//  7. The previous sibling of the item from #4.

move.previousElementSibling  // origin

//  8. All of the h3's that are children of the item from #7

document.getElementById('origin').getElementsByTagName('p');

//  9. Get all of the h3's and Alert (pop-up) the text from each one.  
//     (Extra - do it all in one alert box!)

function popUp() {  
    var pars = document.getElementById('h3') ;
    
    var parsCount = pars.length;
    var i;
    
if(parsCount > 0) {
    
    for(i = 0; i < parsCount; i = i +1) {
        
        var dagnabbit = pars[i];
 alert(popUp);    
}

}
}


//for (i = 0; i < articles.length; i++) {
//    articles = articles[i];
//    articles.nextSibling = function () {
//        document.getElementsByTagName("h3")[0].setAttribute("class", "hide");
//        articles = document.getElementsByTagName("article");
//        articles.removeAttribute("class");
//    }   
////---------------------------------------------------------------------------------
// 10.  Get all articles in the document.
//      Use a for loop to do the following to each one:
//        - log it to the console
//        - add the class of hide to the h3
//        - EXTRA!  - If there are two paragraphs of text, hide the second one
// --------------------------------------------------------------------------------

//var articles = document.getElementsByTagName("article");
//        document.getElementsByTagName("h3")[0].setAttribute("class", "hide");
//        articles = document.getElementsByTagName("article");
//        articles.removeAttribute("class");
    

//---------------------------------------------------------------------------------
//  Add two new "people" to the team by adding a new h3 followed by a paragraph.
//  1. Add "Abby" to the end of the list.  In the paragraph say "Abby is the shop mouser."
//  2. Add "Maris" AFTER "Moonflower".  In the paragraph Say "Maris was here."
//---------------------------------------------------------------------------------


