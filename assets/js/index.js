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

	if ($(this).scrollTop()>0)
	 {
			$('.fadehide').fadeOut();
	 }
	else
	 {
		$('.fadehide').fadeIn();
	 }
});