/*****************************************************************************/
/* CreateAccount: Event Handlers */
/*****************************************************************************/
Template.CreateAccount.events({
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
                    //myApp.alert("User Exist, Login with your password.");
                    Router.go('login');
                }
                else
                {
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
});

Template.CreateAccount.onRendered(function () {

});

Template.CreateAccount.onDestroyed(function () {
});
