Template.LoginLayout.onRendered(function () {
  if (Meteor.isClient) {
    //inicializar app y todo framework 7
      myApp = new Framework7({
      // Default title for modals
      modalTitle: 'Eichelmann App',
      router: false,
      ajaxLinks: 'ajax',
      sortable: false,
      swipeout: true,
      swipePanel: true,
      swipeoutNoFollow: true,
      swipePanelActiveArea: 300
    }); 
    $$ = Dom7;
  }
});