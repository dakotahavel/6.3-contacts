var Backbone = require('backbone');


var ContactModel = Backbone.Model.extend({

  idAttribute: '_id'

});

var ContactCollection = Backbone.Collection.extend({

  model: ContactModel
  , url: 'https://tiny-lasagna-server.herokuapp.com/collections/agents'

  , parse: function(response){
    console.log('agents',response);
  }

});

module.exports = {
  ContactModel : ContactModel
  , ContactCollection : ContactCollection
}
