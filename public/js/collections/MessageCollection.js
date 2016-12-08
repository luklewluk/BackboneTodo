define([
    'underscore',
    'backbone',
    'models/Message'
], function(
    _,
    Backbone,
    Message
){
    var MessageCollection = Backbone.Collection.extend({
        model: Message,
        url: 'list.json'
    });

    return MessageCollection;
});
