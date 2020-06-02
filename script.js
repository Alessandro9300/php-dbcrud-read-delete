$(document).ready(function() {

  ajaxCall();
  $(document).on("click", ".delete", ajaxDelete);

})



function ajaxCall() {

  var template = Handlebars.compile($("#handlebar").html());

  $.ajax({
    url: "api.php",
    method: "get",
    success: function(data) {

      for (var i = 0; i < data.length; i++) {
        var ajaxArray = data[i];

        var objTemplate = {
          id: ajaxArray.id,
          name: ajaxArray.name,
          lastname: ajaxArray.lastname
        }

        var pushHtml = template(objTemplate);

        $(".pagamenti").append(pushHtml);

      }
    },
    error: function(errore) {
      console.log(errore);
    }
  })
}

function ajaxDelete() {

  var conferma = confirm("Sicuro di voler cancellare id dal database?");

  var parent = $(this).parent();
  var dataId = parent.data("id");

  console.log(dataId);
  if (conferma){

    $.ajax({
      url: "delete.php",
      data: {
        id: dataId
      },
      method: "get",
      success: function () {

        parent.remove();

      }
    })
  }
}
