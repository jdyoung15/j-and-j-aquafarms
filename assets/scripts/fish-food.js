$(".modal-dialog").dialog({ 
  autoOpen: false,
  draggable: false,
  modal: true,
  resizable: false
});

$(".opener").click(function() {
  // If desktop mode, show ingredients popup instead of ingredients html page.
  if (screen.width >= 960) {
    var ffId = $(this).data('id');
    var dialogId = `#${ffId}-dialog`;
    $(dialogId).dialog("open");
    if (ffId !== 'ff-reference') {
      $(`${dialogId} .ff-ingredient-snippet`).load(`snippets/${ffId}.html`);
    }


    // Close dialog when user clicks the "x" button
    $(".btn-close").click(function() {
      $(dialogId).dialog("close");
    });
    
    // Close dialog when user clicks outside the dialog box
    $(".ui-widget-overlay").click(function() {
      $(dialogId).dialog("close");
    });

    // Prevent page from reloading to ingredients page
    return false;
  }
}); 

// Update fish food listings with selected filter options
$(".ff-filter").change(function() {
  // Value from fish food type select
  var ffType = $("#ff-types").val();
  // Value from fish type select
  var fishType = $("#fish-types").val();
  var desiredTypes = "." + ffType + "." + fishType;

  // Hide all listings, and then fade in appropriate listings
  $(".listing-row").hide();
  fadeIn(desiredTypes);
});

// In fish food table dialog, when link is clicked, close dialog and focus page on that specific listing.
$( ".tbl-2-hdr a" ).click( function() {
  // Reset filters to default option ("Any")
  $( ".ff-filter :nth-child(1)" ).prop('selected', true);

  // Show all listings (in case any had previously been filtered)
  fadeIn(".listing-row");

  // Close fish food table dialog
  $( "#ff-reference-dialog" ).dialog("close");
});

/* Animates the appearance of elements with the provided class name. */
function fadeIn(className) {
  $(className).css("opacity", "0");
  $(className).show();
  $(className).animate({"opacity": "1"}, 700);
}
