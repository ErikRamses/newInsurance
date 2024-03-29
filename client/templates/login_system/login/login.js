/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
    'click #facebook-login': function(event) {
        event.preventDefault();
        Meteor.loginWithFacebook({ requestPermissions: ['email']}, function(err){
            if (err) {
                throw new Meteor.Error(err);
            }
            else
            {
                Router.go('home');      
            }
        });
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
