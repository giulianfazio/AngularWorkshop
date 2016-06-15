/**
 * Created by Pspmaniaco on 14/06/2016.
 */

function Capitalize()
{
    return function(input){
        if(typeof input !== 'string'){
            return input
        }
        else
            return input.charAt(0).toUpperCase() + input.substring(1);
    }

}

export default[
    Capitalize
];