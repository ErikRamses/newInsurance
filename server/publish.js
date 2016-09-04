Meteor.publish('messages', function () {
  return Messages.find();
});
Meteor.publish("users", function () {
  return Users.find();
});

Meteor.publish("userData", function () {
  return Meteor.users.find({_id: this.userId},
    {fields: {'services': 1 }
  });
});