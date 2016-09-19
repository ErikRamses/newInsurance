/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
    'click img.chat': function (e) {
        e.preventDefault()
        var roomId = Meteor.user()._id
        var username = Meteor.user().profile.name
        if (!username) {
            if ($('.form-group').hasClass('has-error'))
                return
            $('.form-group').addClass('has-error').append('<span class="help-block">Is required</span>')
            $('input').keyup(function () {
                if ($(this).val() != '') {
                    $('.form-group').removeClass('has-error')
                    $('span').remove()
                }
            })
            return
        }
        console.log(username, roomId)
        Router.go('room', {roomId: roomId}, {query: 'username=' + username})
    }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
//Template.Home.helpers({
//    'random': function () {
//        return 
//    }
//});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
