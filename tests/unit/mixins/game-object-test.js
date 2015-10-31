import Ember from 'ember';
import GameObjectMixin from '../../../mixins/game-object';
import { module, test } from 'qunit';

module('Unit | Mixin | game object');

// Replace this with your real tests.
test('it works', function(assert) {
  var GameObjectObject = Ember.Object.extend(GameObjectMixin);
  var subject = GameObjectObject.create();
  assert.ok(subject);
});
