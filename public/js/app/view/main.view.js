define([
    'backbone'
],
    function(Backbone) {
        'use strict';

        var MainView = Backbone.View.extend({

            /*events: {
                'click button#1': 'navigate'
            },

            navigate: function(evt) {
                this.$el.find('.panel').addClass('hidden');
                this.$el.find('#' + evt.currentTarget.value).removeClass('hidden');
            },*/

            render: function() {
                this.$el.html('<h1>Hello, World!</h1>');
                return this;
            }
        });

        return MainView;
    }
);