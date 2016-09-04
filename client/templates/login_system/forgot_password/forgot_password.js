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
            alert('Usuario no encontrado.');
          } else {
            alert('Lo sentimos, algo salió mal.');
          }
        } else {
          alert('Correo enviado, checa tu bandeja de entrada.');
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
