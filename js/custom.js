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
      $("#num-plate").hide();
    });

    $("#hidetable").click(function(){
      $("num-plate").show();
      $("#showtable").show();
      $("#hidetable").hide();
      $("table").hide();
    });

    $("#hidetable").click(function(){
      $("num-plate").show();
      $("#showtable").show();
      $("#hidetable").hide();
      $("table").hide();
    });

});




/*fetch data */

var jsonObj = [{
       "id": "73",
       "visitor_id": "3",
        "type": "navigation",
        "key": "job_application",
        "value": "\/job\/customer-service-representative-31\/apply\/",
        "created_at": "2018-01-23 04:08:07"
    },
    {
        "id": "74",
        "visitor_id": "3",
        "type": "job_application",
        "key": "application_reference",
        "value": "JO-1801-152151_1516600755",
        "created_at": "2018-01-23 04:08:20"
    },
    {
        "id": "76",
        "visitor_id": "3",
        "type": "filter",
        "key": "job_types",
        "value": "temporary",
        "created_at": "2018-01-23 04:08:51"
    }
]


// document.querySelector('h1').innerText = 'Type of jsonObj: '+ typeof jsonObj;

/*jsonObj = JSON.stringify(jsonObj);  to json*/

console.log(jsonObj);
console.log(jsonObj[1].visitor_id);
