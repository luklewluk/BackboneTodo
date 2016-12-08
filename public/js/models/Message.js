define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var Message = Backbone.Model.extend({
        defaults: {
            id: 0,
            message: ''
        }
    });

    return Message;
});
