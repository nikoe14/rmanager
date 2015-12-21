define([
    'backbone'
],
    function(Backbone) {
        'use strict';

        var UsersView = Backbone.View.extend({

            /*events: {
                'click button#1': 'navigate'
            },

            navigate: function(evt) {
                this.$el.find('.panel').addClass('hidden');
                this.$el.find('#' + evt.currentTarget.value).removeClass('hidden');
            },*/

            render: function() {
                this.$el.html('<h1>USERS VIEW!</h1>');
                return this;
            }
        });

        return UsersView;
    }
);