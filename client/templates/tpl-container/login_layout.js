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
  //si es ios carga algo, si es android y web otra cosa
  if (is.ios()) {
      $('head').append('<link rel="stylesheet" type="text/css" href="/packages/nobutakaoshiro_framework7-ios-material/dist/css/framework7.ios.css" >');
      $('head').append('<link rel="stylesheet" type="text/css" href="/packages/nobutakaoshiro_framework7-ios-material/dist/css/framework7.ios.colors.css" >');
      $('head').append('<link rel="stylesheet" type="text/css" href="/packages/nobutakaoshiro_framework7-ios-material/dist/css/framework7.ios.rtl.css" >');
  } else {
      $('head').append('<link rel="stylesheet" type="text/css" href="/packages/nobutakaoshiro_framework7-ios-material/framework7/dist/css/framework7.material.css" >');
      $('head').append('<link rel="stylesheet" type="text/css" href="/packages/nobutakaoshiro_framework7-ios-material/framework7/dist/css/framework7.material.colors.css" >');
      $('head').append('<link rel="stylesheet" type="text/css" href="/packages/nobutakaoshiro_framework7-ios-material/dist/css/framework7.material.rtl.css" >');
  }

});