/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
    'click #facebook-login': function(event) {
        event.preventDefault();
        if(Meteor.isCordova) {
          var fbLoginSuccess = function (userData) {
            alert("UserInfo: " + JSON.stringify(userData));
            }
        facebookConnectPlugin.login(["public_profile"],
            fbLoginSuccess,
            function (error) { alert("" + error) }
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
