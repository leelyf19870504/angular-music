// Load the custom app ES6 modules

import UsersDataService from 'src/users/services/UsersDataService';
import MusicDataService from 'src/users/services/MusicDataService';

import UsersList from 'src/users/components/list/UsersList';
import UserDetails from 'src/users/components/details/UserDetails';

// Define the Angular 'users' module

export default angular
    .module("users", ['ngMaterial'])
    .component(UsersList.name, UsersList.config)
    .component(UserDetails.name, UserDetails.config)
    .service("UsersDataService", UsersDataService)
    .service("MusicDataService", MusicDataService);