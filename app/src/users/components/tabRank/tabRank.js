// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
    name: 'tabRank',
    config: {
        bindings: {
            navRecommands: '<',
            navMine: '<',
            navMusiclist: '<'
        },
        templateUrl: 'src/users/components/tabRank/tabRank.html',
        controller: function() {
            console.log(this)
        }
    }
};