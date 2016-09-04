
/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  sendEmail: function (correo, mensaje) {
    check([correo,mensaje], [String]);

    this.unblock();

    Email.send({
      to: 'hola@nubestra.com',
      from: correo,
      subject: 'This is a message from the App',
      text: mensaje+'. email de usuario: '+correo
    });
  },
  'insertMessage': function (name, message) {
    Messages.insert({
      name: name,
      message: message,
      time: Date.now(),
    });
  } 
});

//Meteor.methods({ //crea cuenta
//  creaCuenta: function (email, password, empresa, ciudad, telefono) {
//    Accounts.createUser({
//        email: email,
//        password: password,
//        profile: {
//          empresa: empresa,
//          ciudad: ciudad,
//          telefono: telefono,
//          email: email,
//        }
//    });
//    if(email) {
//      var dataText = "Nuevo distribuidor registrado en página web: " + "\nEmail: " + email + 
//      "\nPassword: " + password + 
//      "\nEmpresa: " + empresa +
//      "\nCiudad: " + ciudad +
//      "\nTeléfono: " + telefono;
//      Meteor.call('sendEmail', dataText);
//    }
//    console.log(email);
//    console.log(password);
//  }
//});