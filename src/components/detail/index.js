import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactDetailsState from './contact-details-state';
import ContactDetailsController from './contactDetailsController'


const dependencies = [
    uiRouter
];

export default angular
    .module('contact-detail-state-component', dependencies)
    .config(contactDetailsState)
    .controller('ContactDetailsController', ContactDetailsController);
