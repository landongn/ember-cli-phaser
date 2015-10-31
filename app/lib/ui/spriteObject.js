import Ember from 'ember';
import gameObject from 'game/mixins/game-object';

export default Ember.Object.extend(gameObject, {
    load(tag, url) {
        this.get('world.world').load.image(tag, url);
    }
});