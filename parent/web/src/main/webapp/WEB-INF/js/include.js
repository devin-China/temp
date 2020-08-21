$(function () {
    $.get("/WEB-INF/pages/sidebar.html",function (data) {
        $("#sidebar").html(data);
    });

});