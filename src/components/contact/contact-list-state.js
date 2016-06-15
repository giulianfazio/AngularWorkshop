/**
 * Created by Pspmaniaco on 14/06/2016.
 */

import template from './contact-list.html';

function contactRoute($stateProvider) {
    return $stateProvider
        .state('app.contactList', {
            url: 'contact-list',
            views: {
                main: {
                    template: template,
                    controller: "ContactListController as contactListController"
                }
            }
        });
}

export default [
    '$stateProvider',
    contactRoute
];