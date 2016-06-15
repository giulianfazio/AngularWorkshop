import angular from 'angular';
import uiRouter from 'angular-ui-router';
import insertionState from './insertion-state';

const dependencies = [
    uiRouter
];

export default angular
    .module('insertion-state-component', dependencies)
    .config(insertionState);
