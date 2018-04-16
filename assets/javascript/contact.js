function getParamByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var view = getParamByName("view");
if (view == "join") {
  $("#email-subjectselector").val("Joining the group");
}



if ($("#email-subjectselector").val() == "0") {
  $('#email-subject').val("");
}else {
  $('#email-subject').val($("#email-subjectselector").val());
}

$( "#email-subjectselector" ).change(function() {
  if ($("#email-subjectselector").val() == "0") {
    $('#email-subject').val("");
  }else {
    $('#email-subject').val($("#email-subjectselector").val());
  }
});
