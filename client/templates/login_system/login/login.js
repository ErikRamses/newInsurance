import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
    'click #facebook-login': function(event) {
        event.preventDefault();
        if(Meteor.isCordova) {
          facebookConnectPlugin.login(['email'],
          function(){
            console.log('success');
          },
          function() {
            console.log('error');
          }
          );
        }
        else
        {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
            else
            {
                Router.go('home');      
            }
        });
        }
    },
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=username]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                console.log(error);
                alert('Usuario o contraseña incorrectos.');
            } else {
             //   Router.go('perfil');
            }
        });
    }
});

/*****************************************************************************/
/* Login: Helpers */
/*****************************************************************************/
Template.Login.helpers({
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.onCreated(function () {
});

Template.Login.onRendered(function () {
});

Template.Login.onDestroyed(function () {
});
