import { LightningElement, api } from 'lwc';

export default class ParentLWCComp extends LightningElement {

    @api recordId;
    @api objectApiName;
}