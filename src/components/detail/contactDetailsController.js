/**
 * Created by Pspmaniaco on 14/06/2016.
 */

class ContactDetailsController
{
    constructor($stateParams)
    {
        this.contact = {
            name: $stateParams.name,
            lastname: $stateParams.lastname
        };
    }
}

export default
[
    '$stateParams',
    ContactDetailsController
];