$(".modal-dialog").dialog({ 
  autoOpen: false,
  draggable: false,
  modal: true,
  resizable: false
});

$(".opener").click(function() {
  var id = '#' + $(this).data('id');
  $(id).dialog("open");

  // Close dialog when user clicks the "x" button
  $(".btn-close").click(function() {
    $(id).dialog("close");
  });
  
  // Close dialog when user clicks outside the dialog box
  $(".ui-widget-overlay").click(function() {
    $(id).dialog("close");
  });

  // Prevent page from reloading to anchor "#"
  return false;
}); 
