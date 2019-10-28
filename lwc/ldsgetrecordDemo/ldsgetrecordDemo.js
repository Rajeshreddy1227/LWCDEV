import { LightningElement, wire, api, track } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Contact.AccountId';
import ACCOUNT_NAME1_FIELD from '@salesforce/schema/Contact.Account.Name';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
const FIELDS = [
    'Contact.Name',
    'Contact.Title',
    'Contact.Phone',
    'Contact.Email',
    'Contact.FirstName',
    'Contact.LastName',
    'Contact.AccountId',
    'Contact.Account.Name'
];
export default class LdsgetrecordDemo extends LightningElement {
 @api recordId;
 //@track accountnameref;
@wire(getRecord, { recordId: '$recordId', fields: FIELDS } )
contact;

 //this.accountnameref=Contact.Account.Name;

get FirstName(){
    return this.contact.data.fields.FirstName.value;
}
get LastName(){
    return this.contact.data.fields.LastName.value;
}
get phone() {
    return this.contact.data.fields.Phone.value;
}

get email() {
    return this.contact.data.fields.Email.value;
}
get accountnameref() {
    return this.contact.data.fields.AccountId.value;
}
get accountnameref1() {
    return this.contact.data.fields.Account.value.fields.Name.value;
}


//  ({error, data}) {
//     if (error) {
//         // TODO: Error handling
//     } else if (data) {
//         // TODO: Data handling
//     }
// }
}