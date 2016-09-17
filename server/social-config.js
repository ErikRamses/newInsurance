var getFbPicture;

ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

/* 
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '786521788124677',
    secret: 'c0c8b37d325e2b2768f944f38056edc7'
});
*/

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '1746937965559748',
    secret: 'f6fa6465d04217fcbe64916f20ad8438'
});

Accounts.onCreateUser(function (options, user) {
  if (options.profile) {
    user.profile = options.profile;
  } else {
    user.profile = {};
  }
  //user.profile.nivel = 'Distribuidor';

  //envía correo de confirmación
  //if (options.email) {
  //  Meteor.setTimeout(function () {
  //    Accounts.sendVerificationEmail(user._id);
  //  }, 2 * 1000);
  //}

  if (user.services.facebook) {
  	user.profile.profilePicture = getFbPicture(user.services.facebook.accessToken);
    user.profile.first_name = user.services.facebook.first_name;
    user.profile.last_name = user.services.facebook.last_name;
    user.profile.gender = user.services.facebook.gender;
  }

  user.roles = ['Regular client']
  return user;
});

getFbPicture = function(accessToken) {
    var result;
    result = Meteor.http.get("https://graph.facebook.com/me", {
        params: {
            access_token: accessToken,
            fields: 'picture.type(large)'
        }
    });
    if (result.error) {
        throw result.error;
    }
    return result.data.picture.data.url;
};