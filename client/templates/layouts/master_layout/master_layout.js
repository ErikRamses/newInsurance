Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
	'click #logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    }
    //'click #invite': function() {
  	//	var recipient = this.facebook_id;
  	//	var config = Accounts.loginServiceConfiguration.findOne({service: 'facebook'});
  		//var url = "http://www.facebook.com/dialog/feed?app_id=" + config.appId + "&display=popup&to=" + recipient + "&redirect_uri=" + Meteor.absoluteUrl('_fb?close');
  		//window.open(url, "Create Post", "height=240,width=450,left=100,top=100");
  		//FB.ui({
    	//	method: 'share',
    	//	display: 'popup',
    	//	href: 'https://developers.facebook.com/docs/',
  		//	}, function(response){

  		//	});
	//}
});


if (Meteor.isClient) {
	//inicializar app y todo framework 7
	myApp = new Framework7({
    	// Default title for modals
    	modalTitle: 'Eichelmann App',
		router: false,
		ajaxLinks: 'ajax',
		sortable: false,
		swipeout: true,
		swipePanel: true,
		swipeoutNoFollow: true,
		swipePanelActiveArea: 300
	}); 
	$$ = Dom7;
}

Template.MasterLayout.onRendered(function () {
	//$(".profile").backstretch("http://goo.gl/BDP5bO");
});