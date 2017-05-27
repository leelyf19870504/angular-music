// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
    name: 'tabSinger',
    config: {
        bindings: {
            navRecommands: '<',
            navMine: '<',
            navMusiclist: '<'
        },
        templateUrl: 'src/users/components/tabSinger/tabSinger.html',
        controller: function() {
            console.log(this)
        }
    }
};