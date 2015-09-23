// This exercise is to help with DOM Navigation.  
// It otherwise has no practical real world value.
// Please enter your code for each part under the appropriate comment.

//---------------------------------------------
// Create a variable to hold the requested item and log it to the console

// 1.  The heading that says "Weekly Specials"

var WeeklySpecials = document.getElementsByTagName("h2");
console.log(WeeklySpecials[0].firstChild.nodeValue);

// 2.  The next sibling of the item from #1.

var NextSibling = WeeklySpecials[0].nextElementSibling;
console.log(NextSibling);

// 3.  The first child of the item from #2.

var FirstChild = NextSibling.firstElementChild;
console.log(FirstChild.firstChild.nodeValue);

//  4. The item with the id of "move".

var MoveID = document.getElementById("move");
console.log(MoveID);

//  5. The last child of the item from #4.

var LastChild = MoveID.lastElementChild;
console.log(LastChild);

//  6. All of the paragraphs that are children of the item from #4.

var ParagraphChildren = MoveID.getElementsByTagName('p');
console.log(ParagraphChildren);

//  7. The previous sibling of the item from #4.

var PreviousSibling = MoveID.previousElementSibling;
console.log(PreviousSibling);

//  8. All of the h3's that are children of the item from #7

var H3Children = PreviousSibling.getElementsByTagName('h3');
console.log(H3Children);

//  9. Get all of the h3's and Alert (pop-up) the text from each one.  
//     (Extra - do it all in one alert box!)

var AllH3Tags = document.getElementsByTagName('h3');
var AlertBoxText = "";
for (i = 0; i < AllH3Tags.length; i++) {
    CurrentH3 = AllH3Tags[i];
    var NextAlertValue = CurrentH3.firstChild.nodeValue;
    AlertBoxText = AlertBoxText + " " + NextAlertValue;
}
alert(AlertBoxText);

//---------------------------------------------------------------------------------
// 10.  Get all articles in the document.
//      Use a for loop to do the following to each one:
//        - log it to the console
//        - add the class of hide to the h3
//        - EXTRA!  - If there are two paragraphs of text, hide the second one
// --------------------------------------------------------------------------------

var Articles = document.getElementsByTagName("*");
for (i = 0; i < Articles.length; i++) {
    CurrentArticle = Articles[i];
    console.log(CurrentArticle);
    if (CurrentArticle.nodeName == "H3") {
        CurrentArticle.className = "hide";
    }
}

//---------------------------------------------------------------------------------
//  Add two new "people" to the team by adding a new h3 followed by a paragraph.
//  1. Add "Abby" to the end of the list.  In the paragraph say "Abby is the shop mouser."
//  2. Add "Maris" AFTER "Moonflower".  In the paragraph Say "Maris was here."
//---------------------------------------------------------------------------------

var AbbyArticle = document.createElement("article");
var AbbyH3 = document.createElement("H3");
var AbbyH3text = document.createTextNode("Abby");
var AbbyPtag = document.createElement("p");
var AbbyDescription = document.createTextNode("Abby is the shop mouser.");
AbbyPtag.appendChild(AbbyDescription);
AbbyH3.appendChild(AbbyH3text);
AbbyArticle.appendChild(AbbyH3);
AbbyArticle.appendChild(AbbyPtag);

var Abby = document.getElementById("people");
Abby.appendChild(AbbyArticle);

var MarisArticle = document.createElement("article");
var MarisH3 = document.createElement("H3");
var MarisH3text = document.createTextNode("Maris");
var MarisPtag = document.createElement("p");
var MarisDescription = document.createTextNode("Maris was here.");
MarisPtag.appendChild(MarisDescription);
MarisH3.appendChild(MarisH3text);
MarisArticle.appendChild(MarisH3);
MarisArticle.appendChild(MarisPtag);

var Maris = document.getElementById("moonflower");
Maris.appendChild(MarisArticle);
