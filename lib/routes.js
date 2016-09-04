Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});

Router.route('login', {
  name: 'login',
  controller: 'LoginController'
});

Router.route('create_account', {
  name: 'createAccount',
  controller: 'CreateAccountController'
});

Router.route('forgot_password', {
  name: 'forgotPassword',
  controller: 'ForgotPasswordController'
});

Router.route('chat', {
  name: 'chat',
  controller: 'ChatController',
  where: 'client'
});

Router.route('account_info', {
  name: 'accountInfo',
  controller: 'AccountInfoController',
  where: 'client'
});