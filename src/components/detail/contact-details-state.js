/**
 * Created by Pspmaniaco on 14/06/2016.
 */

import template from './contact-details.html';

function detailsRoute($stateProvider) {
    return $stateProvider
        .state('app.contactDetails', {
            url: 'contact-details:name?:lastname?',
            views: {
                main: {
                    template: template,
                    controller: "ContactDetailsController as detailsCtrl"
                }
            }
        });
}

export default [
    '$stateProvider',
    detailsRoute
];