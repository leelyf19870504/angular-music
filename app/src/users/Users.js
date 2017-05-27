// Load the custom app ES6 modules

import UsersDataService from 'src/users/services/UsersDataService';
import MusicDataService from 'src/users/services/MusicDataService';

import UsersList from 'src/users/components/list/UsersList';
import UserDetails from 'src/users/components/details/UserDetails';
import navBar from 'src/users/components/navBar/navBar';
import headerBar from 'src/users/components/headerBar/headerBar';
import tabLastest from 'src/users/components/tabLastest/tabLastest';
import tabMusicList from 'src/users/components/tabMusicList/tabMusicList';
import tabRadio from 'src/users/components/tabRadio/tabRadio';
import tabRank from 'src/users/components/tabRank/tabRank';
import tabRecommands from 'src/users/components/tabRecommands/tabRecommands';
import tabSinger from 'src/users/components/tabSinger/tabSinger';

// Define the Angular 'users' module

export default angular
    .module("users", ['ngMaterial'])
    .component(UsersList.name, UsersList.config)
    .component(UserDetails.name, UserDetails.config)
    .component(navBar.name, navBar.config)
    .component(headerBar.name, headerBar.config)
    .component(tabLastest.name, tabLastest.config)
    .component(tabMusicList.name, tabMusicList.config)
    .component(tabRadio.name, tabRadio.config)
    .component(tabRecommands.name, tabRecommands.config)
    .component(tabRank.name, tabRank.config)
    .component(tabSinger.name, tabSinger.config)
    .service("UsersDataService", UsersDataService)
    .service("MusicDataService", MusicDataService);