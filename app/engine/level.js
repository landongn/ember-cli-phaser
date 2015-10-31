/**
 * Level should encapsulate all entity references within a given game state.
 * e.g; if a user is playing the 'intro' level, this class should have an outlay
 * of which actors are in the scenes, and what states they are in.
 *
 */

import Ember from 'ember';

export default Ember.Object.extend({

    preload() {},
    loadUpdate() {},
    loadRender() {},
    create() {},
    update() {},
    preRender() {},
    render() {},
    resize() {},
    pause() {},
    resumed() {},
    pauseUpdate() {},
    shutdown() {}

});