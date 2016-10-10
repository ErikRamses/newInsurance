/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
    //'click img.chat': function (e) {
    //    e.preventDefault()
    //    var roomId = Meteor.user()._id
    //    var username = Meteor.user().profile.name
    //    if (!username) {
    //        if ($('.form-group').hasClass('has-error'))
    //            return
    //        $('.form-group').addClass('has-error').append('<span class="help-block">Is required</span>')
    //        $('input').keyup(function () {
    //            if ($(this).val() != '') {
    //                $('.form-group').removeClass('has-error')
    //                $('span').remove()
    //            }
    //        })
    //        return
    //    }
    //    console.log(username, roomId)
    //    Router.go('room', {roomId: roomId}, {query: 'username=' + username})
    //},
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
    //if (Session.get('isNewUser') == true) {
    //    $(".typed").typed({
    //      strings: ["Hello, welcome to Eichelman Insurance App.", "At bottom you can see 3 buttons.", "The red one will alert us about your situation, ^1000 let us help you.", "Bottom left button will call Eichelmann Insurance Agency.", "With bottom right button you can talk with a specialist.", "Top right button will show your profile, feel free to complete your data, this will allow us to help you more."],
    //      typeSpeed: 50,
    //      contentType: 'text',// or 'html'
    //      loop: true,
    //      showCursor: true,
    //      backDelay: 2000,
    //    });
    //}
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
