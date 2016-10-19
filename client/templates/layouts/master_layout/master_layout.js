Template.MasterLayout.created = function() {
  Uploader.init(this);
};

/*****************************************************************************/
/* Profile: Helpers */
/*****************************************************************************/
Template.MasterLayout.helpers({
  'infoLabel': function() {
    var instance = Template.instance();
    // we may have not yet selected a file
    var info = instance.info.get()
    if (!info) {
      return;
    }
    var progress = instance.globalInfo.get();
    // we display different result when running or not
    return progress.running ?
      info.name + ' - ' + progress.progress + '% - [' + progress.bitrate + ']' :
      info.name + ' - ' + info.size + 'B';
  },
  'progress': function() {
    return Template.instance().globalInfo.get().progress + '%';
  }
});

Template.MasterLayout.events({
	'click #logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
        myApp.closePanel();
    },
    'click a.takePhoto': function(event, template) {
        var cameraOptions = {
            width: 360,
            height: 234
        };
        MeteorCamera.getPicture(cameraOptions, function (error, data) {
           if (!error) {
               template.$('.license').attr('src', data); 
               var imagen = $('img.license').attr('src');
               Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.license":imagen}});
               //console.log(imagen);
           }
        });
        event.preventDefault();
    },
    'click a#cambiar-perfil': function(event, template) {
        var cameraOptions = {
            width: 260,
            height: 290
        };
        MeteorCamera.getPicture(cameraOptions, function (error, data) {
           if (!error) {
               //template.$('.license').attr('src', data);
               template.$('profile-card:after').css('background-image', 'url(' + data + ')');
               var imagen = data;
               Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.profilePicture":imagen}});
               //console.log(imagen);
           }
        });
        event.preventDefault();
    }
});
// cierra el popover para mostrar el picker con ayuda
Template.GearPopOver.events({
  'click .help-popover': function(event){
        event.preventDefault();
        myApp.closeModal();
    }
});
Template.MasterLayout.onRendered(function () {
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
	//$(".profile").backstretch("http://goo.gl/BDP5bO");
});