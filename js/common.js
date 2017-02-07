$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});
	
	$(".section1 .section1-header h1, .section1 .section1-header span").animated("fadeInLeft");
	$(".section1 .about-item").animated("rollIn");
	$(".profile-card").animated("lightSpeedIn");
	$(".section6 .section6-content-items").animated("bounceInLeft")
	$(".section7 .blog-item").animated("flipInY")
	$(".plans-item").animated("flipInX")
	$("body h1").animated("fadeIn");
	
	

	

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
!function(d){var c="portfilter";var b=function(e){this.$element=d(e);this.stuff=d("[data-tag]");this.target=this.$element.data("target")||""};b.prototype.filter=function(g){var e=[],f=this.target;this.stuff.fadeOut("fast").promise().done(function(){d(this).each(function(){if(d(this).data("tag")==f||f=="all"){e.push(this)}});d(e).show()})};var a=d.fn[c];d.fn[c]=function(e){return this.each(function(){var g=d(this),f=g.data(c);if(!f){g.data(c,(f=new b(this)))}if(e=="filter"){f.filter()}})};d.fn[c].defaults={};d.fn[c].Constructor=b;d.fn[c].noConflict=function(){d.fn[c]=a;return this};d(document).on("click.portfilter.data-api","[data-toggle^=portfilter]",function(f){d(this).portfilter("filter")})}(window.jQuery);
