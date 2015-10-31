import Ember from 'ember';

export default Ember.Route.extend({
    world: Ember.inject.service('world'),

    afterModel() {
        this.get('world');
    }
});
