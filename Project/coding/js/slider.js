$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1800)
    .next()
    .fadeIn(800)
    .end()
    .appendTo('#slideshow');
},  3000);

$("#slideshow2 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow2 > div:first')
    .fadeOut(1800)
    .next()
    .fadeIn(800)
    .end()
    .appendTo('#slideshow2');
},  3000);