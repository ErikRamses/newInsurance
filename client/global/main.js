Meteor.startup(function () {
    sChat.init('AwXTF4uoB4uTaKM3t', {
        ssl: true,
        welcomeMessage: 'Thank you so much for using our EICHELMANN Insurance App! How may we assist you?',
        hostName: 'www.simplechat.support',
        labels: {
            sendPlaceholder: 'Let us help you',
            headerTitle: 'Eichelmann Insurance Support'
        }
    });
});