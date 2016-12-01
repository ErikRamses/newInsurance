import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {
  smtp = {
    username: 'postmaster@sandboxde52bd3db4944f5f9d2fe0c4adb4e795.mailgun.org',   // eg: server@gentlenode.com
    password: '77485243b8152372d9e894d5aa9423c3',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.mailgun.org',  // eg: mail.gandi.net
    port: 587
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});

Accounts.emailTemplates.siteName = "Eichelmann Insurance";
Accounts.emailTemplates.from = "Agency Admin <accounts@eichelmann.com>";
Accounts.emailTemplates.enrollAccount.subject = function (user) {
    return "Welcome to Eichelmann Insurance " + user.profile.name;
};
Accounts.emailTemplates.enrollAccount.text = function (user, url) {
   return "You have been selected to participate in building a better future!"
     + " To activate your account, simply click the link below:\n\n"
     + url;
};
Accounts.emailTemplates.resetPassword.from = function () {
   // Overrides value set in Accounts.emailTemplates.from when resetting passwords
   return "Eichelmann Insurance Password Reset <accounts@eichelmann.com>";
};
