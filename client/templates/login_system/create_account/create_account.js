/*****************************************************************************/
/* CreateAccount: Event Handlers */
/*****************************************************************************/
Template.CreateAccount.events({
    'click #facebook-login': function(event) {
        event.preventDefault();
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
            else
            {
                Router.go('home');   
            }
        });
    },
    'submit form': function(event, template) {
        event.preventDefault();
        var username = $('[name=registerUsername]').val();
        var password = $('[name=registerPassword]').val();
        Accounts.createUser({
                email: username,
                password: password
            }, function(error){
                if(error){
                    console.log(error);
                    Router.go('login');
                    myApp.alert("User Exist, Login with your password.");
                }
                else
                {
                    Session.set('isNewUser',true);
                    Router.go('home');
                }
            });
    }
});

/*****************************************************************************/
/* CreateAccount: Helpers */
/*****************************************************************************/
Template.CreateAccount.helpers({
});

/*****************************************************************************/
/* CreateAccount: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateAccount.onCreated(function () {
    //import '/imports/client/login/create_account.less';
});

Template.CreateAccount.onRendered(function () {

});

Template.CreateAccount.onDestroyed(function () {
});
