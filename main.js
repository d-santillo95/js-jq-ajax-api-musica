$(document).ready(function() {
    $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        method: "GET",
        success: function(data) {
            var template = Handlebars.compile($('#cd-template').html());
            for (var i = 0; i < data.response.length; i++) {
                var disc = {
                img : data.response[i].poster,
                title : data.response[i].title,
                author : data.response[i].author,
                year : data.response[i].year,
                };
                var html = template(disc);
                $('.cds-container').append(html);
            }
        },
        error: function() {
            alert("E' avvenuto un errore.");
        }
    })
});
