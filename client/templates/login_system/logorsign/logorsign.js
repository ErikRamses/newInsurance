Template.ResetPassword.events({
  'submit #resetPasswordForm': function(e, t) {
    e.preventDefault();
    var passToken = Accounts._resetPasswordToken;
    var resetPasswordForm = $(e.currentTarget),
        password = resetPasswordForm.find('#resetPasswordPassword').val(),
        passwordConfirm = resetPasswordForm.find('#resetPasswordPasswordConfirm').val();

    if (isNotEmpty(password) && areValidPasswords(password, passwordConfirm)) {
      Accounts.resetPassword(passToken, password, function(err) {
        if (err) {
          alert('We are sorry but something went wrong.');
        } else {
          alert('Your password has been changed. Welcome back!');
        }
      });
    }
    return false;
  }
});

Template.logorsign.helpers({
  resetPassword: function(){
    if (Accounts._resetPasswordToken) {
      return true;
    }
    else
    {
      return false;
    }
  }
});