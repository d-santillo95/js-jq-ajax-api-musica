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
                genre : data.response[i].genre
                };
                var html = template(disc);
                $('.cds-container').append(html);
            }
        },
        error: function() {
            alert("E' avvenuto un errore.");
        }
    })

    $('#genre-select').on("change" ,function() {
        if ($(this).val() == 'Pop') {
            $('.cd').removeClass('active');
            $('[data-genre="Pop"]').addClass('active');
        } else if ($(this).val() == 'Rock') {
            $('.cd').removeClass('active');
            $('[data-genre="Rock"]').addClass('active');
        } else if ($(this).val() == 'Jazz') {
            $('.cd').removeClass('active');
            $('[data-genre="Jazz"]').addClass('active');
        } else if ($(this).val() == 'Metal') {
            $('.cd').removeClass('active');
            $('[data-genre="Metal"]').addClass('active');
        } else{
            $('.cd').addClass('active');
        }
    });
});
