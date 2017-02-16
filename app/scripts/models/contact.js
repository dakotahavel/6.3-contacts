var Backbone = require('backbone');


var ContactModel = Backbone.Model.extend({

  idAttribute: '_id'

});

var ContactCollection = Backbone.Collection.extend({

  model: ContactModel
  , url: 'https://tiny-lasagna-server.herokuapp.com/collections/agents'

});

module.exports = {
  ContactModel : ContactModel
  , ContactCollection : ContactCollection
}
