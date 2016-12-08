define([
    'jquery',
    'underscore',
    'backbone',
    'collections/MessageCollection',
    'text!templates/message/list.html'
], function(
    $,
    _,
    Backbone,
    MessageCollection,
    messageListTemplate
){
    var MessageListView = Backbone.View.extend({
        el: $('#page'),
        render: function(){
            var messageCollection = new MessageCollection();
            var that = this;

            messageCollection.fetch({
                success: function(messages) {
                    var compiledTemplate = _.template(messageListTemplate);

                    $(that.el).html(compiledTemplate({
                        messages: messages.models
                    }));
                }
            });
        }
    });

    return MessageListView;
});
