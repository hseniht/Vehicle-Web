// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          console.log("Failed, not validated");
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// $("form").on('submit', function(){
//    $('.exampleModalCenter').show();
// });
//
// $(window).load(function(){
//      $('#exampleModalCenter').modal('show');
// });

function show1(){
  document.getElementById('num-plate').style.display = 'block';
}

/*not used*/
// function show2(){
//   document.getElementById('num-plate').style.display = 'hidden';
//   document.getElementById('num-plate2').style.display = 'block';
// }

$(document).ready(function(){
    $("#showtable").click(function(){
      $("table").show();
      $("#hidetable").show();
      $("#showtable").hide();
    });
    $("#hidetable").click(function(){
        $("#showtable").show();
        $("#hidetable").hide();
        $("table").hide();
    });

});


/*TEST Json method*/

$("#jsonbtn").click(function(){

  $.getJSON( "data.json", function( obj ) {

    $.each( obj, function( key, value ) {
      $("#jsonlist").append( "<li>" + value.VEHREG + "</li>" );
    });
  });

});

// Alternate way
// $.getJSON( "data.json", function( data ) {
//   var items = [];
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val.DSCPTL + "</li>" );
//   });
//
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "#jsonlist2" );
// });

/* TEST Ajax method*/

$.ajax({
  url: "data.json",
  dataType: "json",
  type: "get",
  cache: false,
  success: function(data){

      $("#jsonbtn2").click(function(){

          var items =[];
          $.each( data, function( key, val ) {
               items.push( "<li id='" + key + "'>" + val.DSCPTL + "</li>" );
             });

             $( "<ul/>", {
               "class": "my-new-list",
               html: items.join( "" )
             }).appendTo( "#jsonlist2" );
        });

        //TEST for input

        $("#jsonbtn3").click(function(){

          var keyedValue = $('#inputvalue').val();

          console.log(keyedValue);

          $.each( data, function( key, value ) {
            if (keyedValue === value.VEHREG) {
              console.log("its a match!");
              $("#jsonlist3").replaceWith( "<div id=\"jsonlist3\">" + value.VEHREG +" | "+ value.DSCPTL + "</div>" );
            }
            else {
              console.log("not a match!");
            }
          });

          $('#inputvalue').val('');

        });

  }

});
