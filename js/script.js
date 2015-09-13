// This exercise is to help with DOM Navigation.  
// It otherwise has no practical real world value.
// Please enter your code for each part under the appropriate comment.

//---------------------------------------------
// Create a variable to hold the requested item and log it to the console

// 1.  The heading that says "Weekly Specials"
var WeeklySpecials = document.getElementsByTagName("h2");
   console.log(WeeklySpecials[0]);






// 2.  The next sibling of the item from #1.
   var firstsiblingfrom1 = WeeklySpecials[0].nextElementSibling;
   console.log(firstsiblingfrom1);





// 3.  The first child of the item from #2.
   console.log(firstsiblingfrom1.children[0]);





//  4. The item with the id of "move".
   var getmove = document.getElementById("move");
   console.log(getmove);





//  5. The last child of the item from #4.
   console.log(getmove.children[2]);





//  6. All of the paragraphs that are children of the item from #4.
   var germoveptags = getmove.getElementsByTagName("p");
   console.log(germoveptags);






//  7. The previous sibling of the item from #4.
   console.log(getmove.previousElementSibling);





//  8. All of the h3's that are children of the item from #7
   var originsh3 = getmove.previousElementSibling.getElementsByTagName("h3");
   console.log(originsh3);




//  9. Get all of the h3's and Alert (pop-up) the text from each one. 
//     (Extra - do it all in one alert box!)
   var allh3 = document.getElementsByTagName("h3");
   var textholder = "";
   for (i = 0; i < allh3.length; i++) {
       textholder = textholder + " " + allh3[i].innerHTML;
   }
   alert(textholder);








//---------------------------------------------------------------------------------
// 10.  Get all articles in the document.
//      Use a for loop to do the following to each one:
//        - log it to the console
//        - add the class of hide to the h3
//        - EXTRA!  - If there are two paragraphs of text, hide the second one
// --------------------------------------------------------------------------------
   var allarticles = document.getElementsByTagName("article");
   var paragraphs;
   var x = 1;

   for (i = 0; i < allarticles.length; i++) {
       console.log(allarticles[i]);
       allh3[i].className = "hide"; 
       console.log(allh3[i].className);
       paragrah = allarticles[i].getElementsByTagName("p");

       if ( x < paragrah.length) {
           paragrah[1].style.visibility = "hidden";
       }
   }
//---------------------------------------------------------------------------------
//  Add two new "people" to the team by adding a new h3 followed by a paragraph.
//  1. Add "Abby" to the end of the list.  In the paragraph say "Abby is the shop mouser."
//  2. Add "Maris" AFTER "Moonflower".  In the paragraph Say "Maris was here."
//---------------------------------------------------------------------------------

   var createabby = document.createElement("article")
   var CreateMarris = document.createElement("article")
   var people = document.getElementById("people");
   people.appendChild(createabby)
   people.lastElementChild.id = "abby";
   people.lastElementChild.innerHTML = " Abby is the shop mouser";

   
   people.insertBefore(CreateMarris, people.children[2]);
   people.children[2].id = "Maris";
   people.children[2].innerHTML = "Maris was here";


