/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
import '/imports/client/tpl-container/master_layout.js';
import '/imports/client/tpl-container/master_layout.less';

Template.Home.events({
    'click img.llamada': function (e) {
      e.preventDefault()
      myApp.modal({
        title:  'Call our representatives',
        text: 'In any of our lines',
        verticalButtons: true,
        buttons: [
          {
            text: 'After hours Safeco Insurance: 1866-272-3326',
            onClick: function() {
              window.location.href="tel:+1866-272-3326";
            }
          },
          {
            text: 'Eichelmann Insurance #: 214-556-6971',
            onClick: function() {
              window.location.href="tel:+214-556-6971";
            }
          },
          {
            text: 'Eichelmann Insurance Fax#: 214-879-0230',
            onClick: function() {
              window.location.href="tel:+214-879-0230";
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
        strings: ["Please follow the Checklist", "1.Check to confirm that everyone is OK? If not, Please call 911 for assistance. ^20000", "If option #1 is not needed", "2. Exchange insurance information", "3.Exchange IDs", "4. Dial 911 to file accident report", "5. Take pictures and videos to make sure at faults are established"],
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
        welcomeMessage: 'Thank you so much for using our EICHELMANN Insurance App! How may we assist you?',
        hostName: 'www.simplechat.support',
        labels: {
            sendPlaceholder: 'Let us help you',
            headerTitle: 'Eichelmann Insurance Support'
        }
    });
});
