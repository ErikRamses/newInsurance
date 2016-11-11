/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
    'click #facebook-login': function(event) {
        event.preventDefault();
        if(Meteor.isCordova) {
          facebookConnectPlugin.login(['email'],
<<<<<<< HEAD
          function(data){
            //alert('success');
            Router.go('home');
          },
          function(data) {
            alert('not login'+data);
            //Router.go('home');
          }
=======
            function(){
              console.log('exito');
              Router.go('home');
            }
>>>>>>> origin/master
          );
        }
        else
        {
        Meteor.loginWithFacebook({ requestPermissions: ['email']}, function(err){
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
                Router.go('home');
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
