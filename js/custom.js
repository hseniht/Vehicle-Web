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


// Scrolling Header Navbar
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar-scroll").style.top = "0";
//   } else {
//     document.getElementById("navbar-scroll").style.top = "-150px";
//   }
//   prevScrollpos = currentScrollPos;
// }

//jQuery Scripts
$(document).ready(function(){

    $("#form-vehicle").hide(); //hide form table initially

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

    //new TEST
    $("#search-again").click(function(){
        $("#jsonbtn3").show();
        $("#search-again").hide();
        $("#table-result").hide();
        $("#inputvalue").show();
        $(".invalid-feedback").hide();
    });

    //Registration page Login notification slide down

    if ( $( "#special1" ).is( ":hidden" ) ) {
      $( "#special2" ).slideDown(500);
      console.log("login notification - visible, slided down");
    } else {
      $( "#special2" ).hide();
      console.log("login notification - hidden");
    }


    $('#logos > div img').on('click mouseover', function () {
      $( this ).fadeTo( "fast" , 0.5, function() {
      });
    });

    $('#logos > div img').on('click mouseout', function () {
      $( this ).fadeTo( "fast" , 1, function() {
      });
    });

    // $('#navbar-scroll').hide();
    //
    // $(function(){
    //   $(window).scroll(function(){
    //     if ($(this)scrollTop()>100) {
    //       $('#navbar-scroll').fadeIn();
    //     } else {
    //       $('#navbar-scroll').fadeOut();
    //     }
    //   });
    // });

});

/*========================================================================FOR TESTING PURPOSES ================================================================================*/
/*TEST Json method*/

$("#cars,#motorcycles,#others").click(function(){
    $("#form-vehicle").show();
});
//or animate
// $("#cars,#motorcycles,#others").click(function(){
//     $("#form-vehicle").toggle("slow");
// });

// $("#cars").change(function(){
//   $("#form-vehicle").hide();
// });

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

$("#table-result").hide();

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
              $(".invalid-feedback").hide();
              $("#jsonlist3.inner").replaceWith( "<div id=\"jsonlist3\">" + value.VEHREG +" | "+ value.DSCPTL + "</div>" );
              $(".data-VEHREG").replaceWith( "<td class=\"data-VEHREG\">" + value.VEHREG + "</td>" );
              $(".data-DSCPTL").replaceWith( "<td class=\"data-DSCPTL\">" + value.DSCPTL + "</td>" );
              $(".data-MTNINARR").replaceWith( "<td class=\"data-MTNINARR\">" + value.MTNINARR + "</td>" );
              $("#table-result").show();
              return false; //to break loop
            }
            else {
              console.log("not a match!");
                $(".invalid-feedback").show();
            }
          });
          //reset input value
          $('#inputvalue').val('');
          console.log("after if else");
          // document.getElementById("num-plate").reset();

          $("#jsonbtn3").hide();
          $("#search-again").show();
          $("#inputvalue").hide();

        });

  //end of Ajax success
  }
}); //end of Ajax
