define(
    [
        'backbone',
        './view/main.view',
        './view/users.view',
        './view/resources.view',
        './view/movements.view'
    ],
    function(Backbone, MainView, UsersView, ResourcesView, MovementsView) {

        var Router = Backbone.Router.extend({

            routes: {
                'mainView': 'showMainView',
                'usersView': 'showUsersView',
                'resourcesView':'showResourcesView',
                'movementsView' : 'showMovementsView'
            },

            currentView: null,

            initialize: function() {
                Backbone.history.start();
            },

            changeView: function(view) {
                if (this.currentView) {
                    this.currentView.remove();
                    this.currentView.off();
                    if (this.currentView.onClose) {
                        this.currentView.onClose();
                    }
                }

                this.currentView = view;
                $('#content').empty();
                $('#content').append(this.currentView.render().el);
            },

            /*handleDefaultRoute: function(path) {
                var galleryView = new GalleryView();
                this.changeView(galleryView);
            },*/

            showMainView: function() {
                var mainView = new MainView();
                this.changeView(mainView);
            },

            showUsersView: function() {;
                var usersView = new UsersView();
                this.changeView(usersView);
            },

            showResourcesView: function() {
                var resourcesView = new ResourcesView();
                this.changeView(resourcesView);
            },

             showMovementsView: function() {
                var movementsView = new MovementsView();
                this.changeView(movementsView);
            }
        });

        return Router;
    }
);
