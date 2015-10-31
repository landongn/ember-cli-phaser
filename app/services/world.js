import Ember from 'ember';

var _ = window.Phaser;

export default Ember.Service.extend({

    init() {
        this.world = new _.Game(
            '100%',
            '100%',
            _.AUTO, 'game-world',
            {
                preload: this.preload.bind(this),
                create: this.create,
                update: this.update,
                render: this.render
            }
        );

        Ember.$(window).resize(() => {
            Ember.run.throttle(this, this.resize, 300);
        });
        this._super();
    },


    update() {},
    resize() {
        this.world.scale.setGameSize(window.innerWidth, window.innerHeight);
    },

    create() {
        this.game.physics.startSystem(_.Physics.ARCADE);
        Ember.Logger.info('__WORLD STARTED');
    },
    preload() {
        Ember.Logger.info('_preload');
    },
    render() {}

});