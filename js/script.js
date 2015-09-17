// This exercise is to help with DOM Navigation.  
// It otherwise has no practical real world value.
// Please enter your code for each part under the appropriate comment.

//---------------------------------------------
// Create a variable to hold the requested item and log it to the console

// 1.  The heading that says "Weekly Specials"

var headings = document.getElementsByTagName("h2");
weeklySpecial= headings[0];
console.log(weeklySpecial);


// 2.  The next sibling of the item from #1.

firstSpecial = headings[1];
console.log(firstSpecial);


// 3.  The first child of the item from #2.

var fChildren = document.getElementsByTagName("h3");
var fChild = fChildren[0];
console.log(fChild);
//  4. The item with the id of "move".

var move = document.getElementById("move");
console.log(move);

//  5. The last child of the item from #4.

var lChildren = move.lastElementChild;
console.log(lChildren);

//  6. All of the paragraphs that are children of the item from #4.
var allPara = document.getElementById("move").childNodes;
console.log(allPara);

//  7. The previous sibling of the item from #4.
var perviousSibling = document.getElementById("move").previousElementSibling;
console.log(perviousSibling);

//  8. All of the h3's that are children of the item from #7

var h3Child = perviousSibling.getElementsByTagName("h3");
console.log(h3Child);

//  9. Get all of the h3's and Alert (pop-up) the text from each one.  
//     (Extra - do it all in one alert box!)


var allH3 = document.getElementsByTagName("h3");
var i = 0;
var alertMessage = "All h3 Headings in Document" + String.fromCharCode(13);
for (i = 0; i < allH3.length; i++) {
    alertMessage = alertMessage + String.fromCharCode(13) + allH3[i].innerHTML;
}
alert(alertMessage);


//---------------------------------------------------------------------------------
// 10.  Get all articles in the document.
//      Use a for loop to do the following to each one:
//        - log it to the console
//        - add the class of hide to the h3
//        - EXTRA!  - If there are two paragraphs of text, hide the second one
// --------------------------------------------------------------------------------

var allElements = document.getElementsByTagName("article");
var i = 0;
var x = 0;
for (i = 0; i < allElements.length; i++) {
    var allElementsIndividual = allElements[i];
    console.log(allElementsIndividual);
    var articleH3 = allElementsIndividual.getElementsByTagName("h3");
    for (x = 0; x < articleH3.length; x++) {
        var articleH3Individual = articleH3[x];
        articleH3Individual.setAttribute("class", "hide");
    }
    var articleP = allElementsIndividual.getElementsByTagName("p");
    for (x = 0; x < articleP.length; x++) {        if (x == 1) {
            var articlePIndividual = articleP[x];
            articlePIndividual.setAttribute("class", "hide");
        }
    }
}

//---------------------------------------------------------------------------------
//  Add two new "people" to the team by adding a new h3 followed by a paragraph.
//  1. Add "Abby" to the end of the list.  In the paragraph say "Abby is the shop mouser."
//  2. Add "Maris" AFTER "Moonflower".  In the paragraph Say "Maris was here."
//---------------------------------------------------------------------------------
var textTarget = document.getElementById("people");

var addNewH3 = document.createElement('h3');
addNewH3.innerHTML = 'Abby';
textTarget.appendChild(addNewH3);

var addNewP = document.createElement("p");
addNewP.innerHTML = "Abby is the shop mouser.";
textTarget.appendChild(addNewP);

var textTarget = document.getElementById("moonflower");

var addNewH3 = document.createElement('h3');
addNewH3.innerHTML = 'Maris';
textTarget.appendChild(addNewH3);
 
var addNewP = document.createElement("p");
addNewP.innerHTML = "Maris was here.";
textTarget.appendChild(addNewP);