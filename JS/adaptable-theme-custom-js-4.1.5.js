<script>
var coll = document.getElementsByClassName("collapsible1");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active1");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//tag based search

var postsArr = new Array(),
    credentialArr = new Array(),
    categoryArr = new Array(),
    geographyArr = new Array(),
    trainingCenterArr = new Array(),

    $postsList = $('ul.inline-list');

//Create array of all posts in lists
$postsList.find('li').each(function(){
    postsArr.push($(this).html());
})

//console.log(postsArr);
trainingCenterArr[0] = 'By Organization';

trainingCenterArr[1] = postsArr[0];
trainingCenterArr[2] = postsArr[16];
trainingCenterArr[3] = postsArr[23];
trainingCenterArr[4] = '<a href = "https://www.bucme.org/node/1045" target= "_blank">SHIELD</a>';
trainingCenterArr[5] = '<a href = "https://sites.bu.edu/nephtc/nepthc-courses-on-train" target= "_blank">TRAIN</a>';

geographyArr[0] = 'By State';
geographyArr[1] = postsArr[7];
geographyArr[2] = postsArr[17];
geographyArr[3] = postsArr[19];
geographyArr[4] = postsArr[24];
geographyArr[5] = postsArr[28];
geographyArr[6] = postsArr[30];
//console.log(geographyArr);

credentialArr[0] = 'By Credential';
credentialArr[1] = postsArr[1];
credentialArr[2] = postsArr[3];
credentialArr[3] = postsArr[4];
credentialArr[4] = postsArr[10];
//console.log(credentialArr);

categoryArr[0] = 'By Topic';
categoryArr[1] = postsArr[6];
categoryArr[2] = postsArr[8];
categoryArr[3] = postsArr[9];
categoryArr[4] = postsArr[11];
categoryArr[5] = postsArr[12];
categoryArr[6] = postsArr[13];
categoryArr[7] = postsArr[18];
categoryArr[8] = postsArr[20];
categoryArr[9] = postsArr[22];
categoryArr[10] = postsArr[25];
categoryArr[11] = postsArr[26];
categoryArr[12] = postsArr[27];

//console.log(categoryArr);

//Split the array at this point. The original array is altered.
var ListHTML = '';

function createHTML(list) {
    ListHTML = '';
    for (var i = 0; i < list.length; i++) {
        ListHTML += '<li>' + list[i] + '</li>'
    };
}

//Generate HTML for first list
createHTML(credentialArr);
$postsList.html(ListHTML);

createHTML(trainingCenterArr);
//Create new list after original one
$postsList.after('<ul class="inline-list"></ul>').next().html(ListHTML);

createHTML(geographyArr);
//Create new list after original one
$postsList.after('<ul class="inline-list"></ul>').next().html(ListHTML);

//Generate HTML for second list
createHTML(categoryArr);
$postsList.after('<ul class="inline-list"></ul>').next().html(ListHTML);

var elements = document.querySelectorAll("div.tag-relatedtags ul.inline-list li");
//console.log(elements.length);
//console.log(elements);
for(var i=0; i < elements.length; i++){
if(elements[i].innerHTML === 'undefined' || elements[i].innerHTML === 'By Topic' || elements[i].innerHTML === 'By Credential' || elements[i].innerHTML === 'By Organization' || elements[i].innerHTML === 'By State' || elements[i].innerHTML === '<a href="https://www.bucme.org/node/1045" target="_blank">SHIELD</a>' || elements[i].innerHTML === '<a href="https://sites.bu.edu/nephtc/nepthc-courses-on-train" target="_blank">TRAIN</a>'){
//console.log(elements[i].innerHTML);
elements[i].style.display = 'none';

}



}
//end of tag based javascript**************//
/*
///banner sencond javascript
  var tag = document.createElement("div");
tag.classList.add("banner-second");

var adjustDiv = document.createElement("div");
adjustDiv.classList.add("adjustDiv");
tag.appendChild(adjustDiv);

   var text = document.createElement("h2");
/* heading text for right side of slider banner 
   text.innerText = "We want to hear from you!";
   adjustDiv.appendChild(text);

   var mailButton =  document.createElement("a");
   mailButton.classList.add("mailButton");
/* button text for right side of slider banner 
    mailButton.innerText = "Request Training Topics";
/* link target for button 
     mailButton.href = "https://docs.google.com/forms/d/e/1FAIpQLSdzP1e_STpdMMYcxEjgfZUtNAujnntMHyUpEheJN5WdXh80cw/viewform?usp=sf_link";
    mailButton.target = "_blank";
   adjustDiv.appendChild(mailButton);

   var element = document.getElementsByClassName("slidewrap");
   //console.log(element);
   element[0].appendChild(tag);
///banner sencond javascript
*/


</script>
