import { LightningElement } from 'lwc';

export default class MapdisplayDemo extends LightningElement {
    mapMarkers = [
        {
            location: {
                Street: '1600 Pennsylvania Ave NW',
                City: 'Washington',
                State: 'DC',
            },

            title: 'The White House',
            description:
                'Landmark, historic home & office of the United States president, with tours for visitors.',
        },
        {
            location: {
                Street: '4503 Crowne Lake Cir',
                City: 'Jamestown',
                State: 'NC',
            },

            title: 'My Home',
            description:
                'Landmark, HOME.',
        },
    ];
}