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
