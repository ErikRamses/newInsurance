/*****************************************************************************/
/* ForgotPassword: Event Handlers */
/*****************************************************************************/
Template.ForgotPassword.events({
	'submit form': function(e, t) {
    e.preventDefault();
    var email = event.target.registerUsername.value;
    if (email) {
      Accounts.forgotPassword({email: email}, function(err) {
        if (err) {
          if (err.message === 'User not found [403]') {
            alert('User not found.');
          } else {
            alert('Sorry, something wrong.');
          }
        } else {
          alert('Email sent, verify your inbox.');
        }
      });

    }
    return false;
  }
});

/*****************************************************************************/
/* ForgotPassword: Helpers */
/*****************************************************************************/
Template.ForgotPassword.helpers({
});

/*****************************************************************************/
/* ForgotPassword: Lifecycle Hooks */
/*****************************************************************************/
Template.ForgotPassword.onCreated(function () {
});

Template.ForgotPassword.onRendered(function () {
});

Template.ForgotPassword.onDestroyed(function () {
});
