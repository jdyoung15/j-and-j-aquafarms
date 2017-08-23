(function() { 
  Galleria.loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/themes/classic/galleria.classic.min.js');

  Galleria.run('.galleria', {
		thumbnails: false,
		_toggleInfo: false
		/*
  	extend: function(options) {
      Galleria.get(0).$('info-link').click();
  	}
		*/
	});

	Galleria.ready(function() {
		this.attachKeyboard({
  	left: this.prev,
  	right: this.next
		});
	});
}());
