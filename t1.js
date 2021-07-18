$( function() {
    $( "#accordion" ).accordion();
    $( "#accordion" ).on( "accordionactivate", ( event, ui ) => {
        $( ui.newPanel ).css( "background-color", "yellow" );
        $( ui.oldPanel ).css( "background-color", "blue" );
    } );
    console.log("Done");
    alert("test");
  } );