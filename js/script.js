// This exercise is to help with DOM Navigation.  
// It otherwise has no practical real world value.
// Please enter your code for each part under the appropriate comment.

//---------------------------------------------
// Create a variable to hold the requested item and log it to the console

// 1.  The heading that says "Weekly Specials"

var specials = document.getElementsByTagName('aside')[0].childNodes[3];
console.log(specials);

// 2.  The next sibling of the item from #1.

var ul = document.getElementsByTagName('aside')[0].childNodes[5];
console.log(ul);

// 3.  The first child of the item from #2.

var li = document.getElementsByTagName('ul')[0].childNodes[1];
console.log(li);

//  4. The item with the id of "move".

move = document.getElementById('move');
console.log(move);

//  5. The last child of the item from #4.

var last_child = move.lastElementChild;
console.log(last_child);

//  6. All of the paragraphs that are children of the item from #4.

var all_children = move.childNodes
console.log(all_children);

//  7. The previous sibling of the item from #4.

var previous_sib = move.previousElementSibling
console.log(previous_sib);

//  8. All of the h3's that are children of the item from #7

origin = document.getElementById('origin');
origin_h3 = origin.childNodes[1];
console.log(origin_h3);

//  9. Get all of the h3's and Alert (pop-up) the text from each one.  
//     (Extra - do it all in one alert box!)

var heading = document.getElementsByTagName('h3');
for (i = 0; i < heading.length; i++) {
    h3 = heading[i];
//    alert(h3.textContent);
}

//---------------------------------------------------------------------------------
// 10.  Get all articles in the document.
//      Use a for loop to do the following to each one:
//        - log it to the console
//        - add the class of hide to the h3
//        - EXTRA!  - If there are two paragraphs of text, hide the second one
// --------------------------------------------------------------------------------
story = document.getElementsByTagName("section");
for (i = 0; i < story.length; i++) {
    article = story[i];
    console.log(article);
}

hide_h3 = document.getElementsByTagName("h3");
for (i = 0; i < hide_h3.length; i++) {
    hideH3 = hide_h3[i];
    hideH3.setAttribute("class", "hide");
    console.log(hideH3)
}

// hide_p2 = document.getElementsByTagName("p");
// for (i =0; i < hide_p2.length; i++) {
    // hideP2 = hide_p2[i];
    
    // hideP2.nextElementSibling.setAttribute("class", "hide");
    // console.log(hideP2);
// }
 



//---------------------------------------------------------------------------------
//  Add two new "people" to the team by adding a new h3 followed by a paragraph.
//  1. Add "Abby" to the end of the list.  In the paragraph say "Abby is the shop mouser."
//  2. Add "Maris" AFTER "Moonflower".  In the paragraph Say "Maris was here."
//---------------------------------------------------------------------------------

// Adding Abby---------------------------------------
var abby_h3 = document.createElement("H3");
var abby_h3_text = document.createTextNode("Abby");                                         
abby_h3.appendChild(abby_h3_text);

var abby_p = document.createElement("p");
var abby_p_text = document.createTextNode("Abby is the shop mouser.");
abby_p.appendChild(abby_p_text);

add_abby = document.getElementsByTagNameNS([4], "rose");


// Adding Maris--------------------------------------

var maris_h3 = document.createElement("H3");
var h3_text = document.createTextNode("Maris");
maris_h3.appendChild(h3_text);

var maris_p = document.createElement("p");
var p_text = document.createTextNode("Maris was here");
maris_p.appendChild(p_text);


var add_maris = document.getElementById("people");

add_maris.insertBefore(maris_h3, add_maris.childNodes[4]);

add_maris.insertBefore(maris_p, add_maris.childNodes[5]);

console.log(add_maris);



