define(function(require) {

	var Backbone = require('backbone');
	var Adapt = require('coreJS/adapt');

	var singlesubmitview = Backbone.View.extend({
                options : null,
		className: "block singlesubmit",

		events: {
			'click .buttons-action': 'onSubmitClick'
		},

		onSubmitClick: function() {                    
			this.options.parent.onSubmit();
		},

		initialize: function(options) {                   
                        this.options = options;
			this.listenTo(Adapt, 'remove', this.remove);
			this.render();
		},

		render: function() {
	         var template = Handlebars.templates["submit"];
	         this.$el.html(template());
	         return this;
		}
		
	});

	return singlesubmitview;
})
	