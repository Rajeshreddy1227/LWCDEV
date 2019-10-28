import { LightningElement, track, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import PHONE_FIELD from '@salesforce/schema/Account.Phone'
import WEB_FIELD from '@salesforce/schema/Account.Website'

export default class LdsRecordform extends LightningElement {

    @api recordId;
    @api objectApiName;

    // @track recordId

 //   fieldArray = ['Name','Phone','Website'];
 fieldArray = [NAME_FIELD,PHONE_FIELD,WEB_FIELD];
    handleSuccess(event){
        this.recordId = event.detail.Id;
    }
}