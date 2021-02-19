let car = +localStorage.getItem("carNumber") - 1;

$(document).ready(function() {
  $.get('/data', function(info) {
    info = JSON.parse(info);
    $("#car-image").attr('src',info[car].photo);
    $("#car-name").html(info[car].name);
    $("#car-price").html(info[car].price);
    $("#car-descript").html(info[car].description);
  })
})
