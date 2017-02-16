var $ = require('jquery');
var models = require('./models/contact.js');
var views = require('./views/contact.js');
var loginModels = require('./models/login.js');
var loginViews = require('./views/login.js');

$('.login-screen').show()
$('.FOUO').hide();
// DOM Ready
$(function(){
$('.FOUO').hide();

  // instanciate users collection
  var authUsers = new loginModels.LoginCollection();
  // render login form
  var loginForm = new loginViews.LoginView({collection: authUsers});
  $('.login').html(loginForm.render().$el);

  authUsers.fetch();

// -----------------------
  // instanciate contacts collection
  var myContacts = new models.ContactCollection();
  // render new contact form
  var contactForm = new views.ContactFormView({collection: myContacts});
  $('.form-container').append(contactForm.render().$el);
  // render saved contacts from server
  var contactList = new views.ContactListView({collection: myContacts});
  $('.app').append(contactList.render().el);

  myContacts.fetch();

});
