Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController'
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

Router.route("homes", {
    name: "homes",
    action: function () {
        this.render('homes')
    }
})
Router.route("/:roomId", {
    name: "room",
    action: function () {
        this.render('room')
    }
})