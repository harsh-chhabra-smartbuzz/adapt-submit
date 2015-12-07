define(function(require) {

    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');

    var Submit = ComponentView.extend({


        preRender: function() {
            //this.$el.addClass("no-state");
            // Checks to see if the blank should be reset on revisit
            //this.checkIfResetOnRevisit();
        },

        postRender: function() {
            this.setReadyStatus();
            //this.$('.block-inner').on('inview', _.bind(this.inview, this));
             this.setCompletionStatus();
        }       

    });

    Adapt.register('Submit', Submit);

});
