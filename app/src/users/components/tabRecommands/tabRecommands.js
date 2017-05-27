// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
    name: 'tabRecommands',
    config: {
        bindings: {
            navRecommands: '<',
            navMine: '<',
            navMusiclist: '<'
        },
        templateUrl: 'src/users/components/tabRecommands/tabRecommands.html',
        controller: function() {
            console.log(this)
        }
    }
};