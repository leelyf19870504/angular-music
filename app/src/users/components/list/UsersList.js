// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
    name: 'usersList',
    config: {
        bindings: { navRecommands: '=' },
        templateUrl: 'src/users/components/list/UsersList.html',
        controller: function() {
            console.log(this)
        }
    }
};