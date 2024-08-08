//We are going to add a function that will trigger after the page has fully loaded
$(document).ready(function () {
    //a fuction to have global header,meta and footer
   $(function (){
       $("#head").load("meta.html");
       $("#header").load("header.html");
       $("#footer").load("footer.html");
   })
})