
$(document).ready(function
    
    // When the document loads, hide flag div
    $('#flag').hide

    // When an icon is clicked, identify ID and get corresponding house data
    $('.icon').click(function(){
            var id = $(this).attr('id');
        $.get(`https://anapioficeandfire.com/api/houses/${id}`, function(res){
                var titles = res.titles[0]
            for (var i = 1; i < res.titles.length; i++) {
                    titles += ", " + res.titles[i]
            }
            var house = `<h1>${res.name}</h1>`
                house += `<h2>Region</h2>`
                house += `<p>${res.region}</p>`
                house += `<h2>Coat of Arms</h2>`
                house += `<p>${res.coatOfArms}</p>`
                house += `<h2>Title of Leader</h2>`
                house += `<p>${titles}</p>`
                house += `<h2>Words</h2>`
                house += `<p>${res.words}</p>`
            $('#info').html(house);
        }, 'json');
        $('#flag').css('background-image', `url("banners/banner-${this.id}.png")`);
        $('#flag').slideDown();
    });
});