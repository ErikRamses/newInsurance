/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
    'click #facebook-login': function(event) {
        event.preventDefault();
        if(Meteor.isCordova) {
          console.log('Cordova');
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
        console.log('LoginWeb');
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
            else
            {
                Session.set('isNewUser',true);
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
                //Session.set('isNewUser',true);
                //Router.go('home');
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
    //import '/imports/client/login/login.less';
});

Template.Login.onRendered(function () {
});

Template.Login.onDestroyed(function () {
});
