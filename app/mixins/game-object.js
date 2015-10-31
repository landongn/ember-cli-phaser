import Ember from 'ember';


export default Ember.Mixin.create({
    world: Ember.inject.service(),
    _: window.Phaser
});
