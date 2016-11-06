Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});

Router.route('account_info', {
  name: 'accountInfo',
  controller: 'AccountInfoController',
  where: 'client'
});

Router.route('/profile/:_id', {
  name: 'profile',
  controller: 'ProfileController',
});


//Login routes
Router.route('logorsign', {
  name: 'logorsign',
  controller: 'LogorsignController',
});

Router.route('login', {
  name: 'login',
  controller: 'LoginController',
});

Router.route('create_account', {
  name: 'createAccount',
  controller: 'CreateAccountController'
});

Router.route('forgot_password', {
  name: 'forgotPassword',
  controller: 'ForgotPasswordController'
});