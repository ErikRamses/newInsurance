/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
    'click img.llamada': function (e) {
      e.preventDefault()
      myApp.modal({
        title:  'Call our representatives',
        text: 'In any of our lines',
        verticalButtons: true,
        buttons: [
          {
            text: 'Phone: 214-556-6971',
            onClick: function() {
              window.location.href="tel:+8119860234";
            }
          },
          {
            text: 'Phone: 214-556-6971',
            onClick: function() {
              window.location.href="tel:+8119860234";
            }
          },
          {
            text: 'Phone: 214-556-6971',
            onClick: function() {
              window.location.href="tel:+8119860234";
            }
          },
          {
            text: 'cancel',
            bold: true
          },
        ]
      });
    },
    'click img.choque': function (e) {
      e.preventDefault()
      $('#s-chat-submit-input').val($('#s-chat-submit-input').val() + 'Request for help on car accident');
      $( ".s-chat-box" ).addClass( "opened" );
      //emula enter
      var e = jQuery.Event("keydown");
      e.which = 13; // Enter
      $("#s-chat-submit-input").trigger(e);
      //emula enter

      $(".typed").typed({
        strings: ["Everything is gonna be alright.", "Take 3 deep breaths.^20000"],
        typeSpeed: 50,
        contentType: 'html',// or 'html'
        loop: false,
        showCursor: true,
        backDelay: 2000,
      });
    }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

Template.contenidoDashboard.helpers({
  newUser: function(){
    return Session.get('isNewUser');
  }
});
/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
    Session.set('isNewUser', false);
});

Meteor.startup(function () {
    sChat.init('AwXTF4uoB4uTaKM3t', {
        ssl: true,
        welcomeMessage: 'Welcome to Eichelmann Insurance Support, how can I help you?',
        hostName: 'www.simplechat.support',
        labels: {
            sendPlaceholder: 'Let us help you',
            headerTitle: '¡Eichelmann Insurance Support!'
        }
    });
});
