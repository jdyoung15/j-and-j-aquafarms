(function() { 
  Galleria.loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/themes/classic/galleria.classic.min.js');

  function runGalleriaInstance(instanceNum) {
    const name = `galleria-${instanceNum}`;
    const className = `.${name}` 

    Galleria.run(className, {
      thumbnails: false,
      _toggleInfo: false,
      dataSource: galleriaImgData[name], // galleriaImgData is specified in javascript of each aquaponics page
      preload: 1
    });
  }

  const numGalleriaInstances = $('.galleria').length;
  for (var i = 1; i < numGalleriaInstances + 1; i++) {
    runGalleriaInstance(i);
  }

  if (numGalleriaInstances === 1) {
    Galleria.ready(function() {
      this.attachKeyboard({
      left: this.prev,
      right: this.next
      });
    });
  }

}());
