/**
 * Created by Pspmaniaco on 14/06/2016.
 */

import template from './insForm.html';

function insertionRoute($stateProvider) {
    return $stateProvider
        .state('app.insertion', {
            url: 'insertion',
            views: {
                main: {
                    template: template
                }
            }
        });
}

export default [
    '$stateProvider',
    insertionRoute
];
