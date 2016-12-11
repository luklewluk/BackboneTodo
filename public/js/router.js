define([
    'jquery',
    'underscore',
    'backbone',
    'views/MessageListView'
], function(
    $,
    _,
    Backbone,
    MessageListView
){
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'messageList',

            '*actions': 'defaultAction'
        }
    });

    var initialize = function(){
        var app_router = new AppRouter;

        app_router.on('route:messageList', function(){
            var messageListView = new MessageListView();
        });

        app_router.on('route:defaultAction', function(actions){
            console.log('No route:', actions);
        });

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
