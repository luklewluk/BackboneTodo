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
		
		events: {
			'click #mainButton' : 'showMessage'
		},
		
		initialize: function() {
			this.messageCollection = new MessageCollection();
			
			//this will trigger when collection is fetched
			this.listenTo(this.messageCollection, 'reset', this.render);
			
			//this will trigger if new data is added to collection with collection.add() function
			this.listenTo(this.messageCollection, 'add', this.addRow);
			
			//will trigger after 'remove' event
			this.listenTo(this.messageCollection, 'remove', this.removeRow);

			this.messageCollection.fetch({
				//pass this parameter to trigger 'reset' event
				reset: true
			});
		},
		
        render: function(){
            var that = this;
			var compiledTemplate = _.template(messageListTemplate);

			this.$el.find('#mainContent').html(compiledTemplate({
				messages: that.messageCollection.models
			}));
			
			return this;
        },
		
		//called after element is added
		addRow: function(model) {
			console.log(model);
		},
		
		//called after element is removed
		removeRow: function(model) {
			console.log(model); //prints element that is removed
			
			//calling render coz I'm lazy. 
			//Could be used to only delete one table line rather than rerendering whole view
			this.render();
		},
		
		showMessage: function() {
			this.$el.find('#beniz').show();
			this.messageCollection.remove('2');
		}
    });

    return MessageListView;
});
