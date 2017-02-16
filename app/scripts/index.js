var $ = require('jquery');
var models = require('./models/contact.js');
var views = require('./views/contact.js');
// var loginModels = require('./models/login.js');
// var loginViews = require('./views/login.js');

// $('.FOUO').hide();
// DOM Ready
$(function(){
  // var authUsers = new loginModels.LoginCollection();
  //
  // var loginForm = new loginViews.LoginView({collection: authUsers});
  // $('.login').html(loginForm.render().$el);
  //
  // authUsers.fetch();
  // console.log(authUsers)

  var myContacts = new models.ContactCollection();

  var contactForm = new views.ContactFormView({collection: myContacts});
  $('.form-container').html(contactForm.render().$el);

  var contactList = new views.ContactListView({collection: myContacts});
  $('.app').prepend(contactList.render().el);

  myContacts.fetch();

});
