/*****************************************************************************/
/* Chat: Event Handlers */
/*****************************************************************************/
Template.Chat.events({
      'keydown textarea#message' : function (event) {
        if (event.which == 13) { // 13 is the enter key event
          if (Meteor.user())
            //var name = Meteor.user().profile.name;
            var name = Meteor.user().emails[0].address;
          else
            var name = 'Anonymous';
          var message = $("textarea#message").val();
          if (message.value != '') {
          	console.log(message);
          	Meteor.call('insertMessage', name, message);
            document.getElementById('message').value = '';
            message.value = '';
          }
        }
      }
});

/*****************************************************************************/
/* Chat: Helpers */
/*****************************************************************************/
Template.Chat.helpers({
});

/*****************************************************************************/
/* Chat: Lifecycle Hooks */
/*****************************************************************************/
Template.Chat.onCreated(function () {
});

Template.Chat.onRendered(function () {
});

Template.Chat.onDestroyed(function () {
});
