// This exercise is to help with DOM Navigation.  
// It otherwise has no practical real world value.
// Please enter your code for each part under the appropriate comment.

//---------------------------------------------
// Create a variable to hold the requested item and log it to the console

// 1.  The heading that says "Weekly Specials"

var heading2Elements = document.getElementsByTagName("h2");
var i = 0;
for (i = 0; i < heading2Elements.length; i++) {
    var heading2Text = heading2Elements[i].innerHTML;
    if (heading2Text == "Weekly Specials") {
        var heading2 = heading2Elements[i];
    }
}
console.log(heading2);

// 2.  The next sibling of the item from #1.

var firstUlUnderHeading2 = heading2.nextElementSibling;
console.log(firstUlUnderHeading2);

// 3.  The first child of the item from #2.

var fstChildofUL = firstUlUnderHeading2.firstElementChild;
console.log(fstChildofUL);

//  4. The item with the id of "move".

var idMove = document.getElementById("move");
console.log(idMove);

//  5. The last child of the item from #4.

var lstChildOfIdMove = idMove.lastElementChild;
console.log(lstChildOfIdMove);

//  6. All of the paragraphs that are children of the item from #4.

var allParagraphsOfIdMove = idMove.getElementsByTagName("p");
console.log(allParagraphsOfIdMove);

//  7. The previous sibling of the item from #4.

var idOrigin = idMove.previousElementSibling;
console.log(idOrigin);
//  8. All of the h3's that are children of the item from #7

var h3sOfOrigin = idOrigin.getElementsByTagName("h3");
console.log(h3sOfOrigin);

//  9. Get all of the h3's and Alert (pop-up) the text from each one.  
//     (Extra - do it all in one alert box!)

var allH3s = document.getElementsByTagName("h3");
var i = 0;
var alertMessage = "All h3 Headings in Document" + String.fromCharCode(13);
for (i = 0; i < allH3s.length; i++) {
    alertMessage = alertMessage + String.fromCharCode(13) + allH3s[i].innerHTML;
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
var ii = 0;
for (i = 0; i < allElements.length; i++) {
    var allElementsIndividual = allElements[i];
    console.log(allElementsIndividual);
    var articleH3s = allElementsIndividual.getElementsByTagName("h3");
    for (ii = 0; ii < articleH3s.length; ii++) {
        var articleH3sIndividual = articleH3s[ii];
        articleH3sIndividual.setAttribute("class", "hide");
    }
    var articlePs = allElementsIndividual.getElementsByTagName("p");
    for (ii = 0; ii < articlePs.length; ii++) {
        if (ii == 1) {
            var articlePsIndividual = articlePs[ii];
            articlePsIndividual.setAttribute("class", "hide");
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
