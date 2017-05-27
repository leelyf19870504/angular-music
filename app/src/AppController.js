/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(UsersDataService, MusicDataService, $mdSidenav, $log) {
    var self = this;

    self.selected = null;
    self.users = [];
    self.selectUser = selectUser;
    self.toggleList = toggleUsersList;

    //console.log(MusicDataService)
    // Load all registered users

    UsersDataService
        .loadAllUsers()
        .then(function(users) {
            self.users = [].concat(users);
            self.selected = users[0];
        });
    self.navRecommands = [{
            name: "发现音乐",
            icon: "assets/svg/recommands_music.svg"
        },
        {
            name: "私人FM",
            icon: "assets/svg/recommands_fm.svg"
        },
        {
            name: "MV",
            icon: "assets/svg/recommands_mv.svg"
        },
        {
            name: "朋友",
            icon: "assets/svg/recommands_friends.svg"
        }
    ];
    self.navMine = [{
            name: "本地音乐",
            icon: "assets/svg/mine_music.svg"
        },
        {
            name: "下载管理",
            icon: "assets/svg/mine_download.svg"
        }
    ];
    self.navMusicList = [{
        name: "我喜欢的音乐",
        icon: "assets/svg/musiclist_like.svg"
    }];
    console.log(self.navRecommands);
    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
        $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectUser(user) {
        self.selected = angular.isNumber(user) ? $scope.users[user] : user;
    }
    var self = this;

    self.simulateQuery = false;
    self.isDisabled = false;

    self.querySearch = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange = searchTextChange;

    self.newState = newState;

    function newState(state) {
        alert("Sorry! You'll need to create a Constitution for " + state + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch(query) {
        var results = query ? self.states.filter(createFilterFor(query)) : self.states,
            deferred;
        if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function() { deferred.resolve(results); }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }

    function searchTextChange(text) {
        $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };

    }
}

export default ['UsersDataService', 'MusicDataService', '$mdSidenav', AppController];