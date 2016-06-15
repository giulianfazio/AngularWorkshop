import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactListState from './contact-list-state';
import ContactListController from './contactListController'
import capFilter from './capFilter'

const dependencies = [
    uiRouter
];

export default angular
    .module('contact-list-state-component', dependencies)
    .config(contactListState)
    .filter('capFilter', capFilter)
    .controller('ContactListController', ContactListController);
