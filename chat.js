
var userJSON= '{"name":"Sophie", "age": 22,"photoURL":"http://images.freeimages.com/images/premium/small-comps/1465/14657807-beautiful-woman-long-hair.jpg", "place":"New York", "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."}';
var user= JSON.parse(userJSON);

$('h4.addProfile').append(user.name);



$(document).ready(function(){
    // Recoge el texto, lo guarde en variable de sesión y lo envía a pantalla.
    $("#chatSender").keypress(function(event) {
        if(event.which == 13) {
            var numberOfChats= sessionStorage.length;
            var msg= $('#chatSender').val();
            $('#chatSender').val("");
            sessionStorage.setItem("chat"+numberOfChats, msg);
            $("#main").append('<div class="row"><div class="col-3"><img class="rounded-circle" src="http://images.freeimages.com/images/premium/small-comps/1168/11686411-young-man-wearing-flat-cap-filming-with-old-fashioned-camera.jpg" width="64px" alt="Generic placeholder image"></div><div class="col-7"><div class="popover bs-popover-right bs-popover-right-docs right-profile"><div class="arrow"></div><div class="popover-body right-profile"><p>'+msg+'</p></div></div></div></div>');
        }
    });
});

 // Carga todo el chat que hay en variable de sessión.
if(sessionStorage){
//alert(sessionStorage.length);
    for(i=0; i<sessionStorage.length; i++){
        $("#main").append('<div class="row"><div class="col-3"><img class="rounded-circle" src="http://images.freeimages.com/images/premium/small-comps/1168/11686411-young-man-wearing-flat-cap-filming-with-old-fashioned-camera.jpg" width="64px" alt="Generic placeholder image"></div><div class="col-7"><div class="popover bs-popover-right bs-popover-right-docs right-profile"><div class="arrow"></div><div class="popover-body right-profile"><p>'+sessionStorage.getItem("chat"+i)+'</p></div></div></div></div>');
                }
}else{
    alert("Sorry, your browser doesn't support SESSION STORAGE");
}  
