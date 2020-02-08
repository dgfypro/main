jQuery(document).ready(function(){
	jQuery(".titleWrapper").addClass("ready");
	
jQuery(".titleWrapper h1").each(function(){
	var fullString;
	var characters = jQuery(this).text().split("");
	
	$this = jQuery(this);
	$this.empty();
	$.each(characters, function (i, el) {
		if(el == " "){el = "&nbsp;"};
    $this.append("<span>" + el + "</span");
	});
		
});
	
});

$(window).scroll(function() {

	if ($(this).scrollTop()>200)
	 {
			$('.fadehide').fadeOut();
	 }
	else
	 {
		$('.fadehide').fadeIn();
	 }
});

var btn = $('#rtdbutton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    btn.addClass('rtdshow');
  } else {
    btn.removeClass('rtdshow');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
	// $('html, body').animate({scrollTop:0}, '300');
	window.open("https://dgfypro.com/readytodigital", "_blank");
});