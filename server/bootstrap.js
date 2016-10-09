Meteor.startup(function () {
	UploadServer.init({
    	tmpDir: process.env.PWD + '/public/tmp',
    	uploadDir: process.env.PWD + '/public/'
  	});
  	if (Meteor.isCordova) 
  	{
    	Uploader.uploadUrl = Meteor.absoluteUrl("/public/"); // Cordova needs absolute URL
  	}
});
