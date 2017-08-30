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
  
  runGalleriaInstance(1);
  
  const numGalleriaInstances = $('.galleria').length;
  if (numGalleriaInstances > 1) {
    // Additional galleria instances should run only when user clicks tab to make them visible
    for (let i = 2; i <= numGalleriaInstances; i++) {
      $(`#tab-${i}-link`).one('click', function(e) {
        runGalleriaInstance(i); 
      });

    }
  } else {
    // Allow user to navigate images with arrow keys if only one Galleria instance exists
    Galleria.ready(function() {
      this.attachKeyboard({
      left: this.prev,
      right: this.next
      });
    });
  }
}());
