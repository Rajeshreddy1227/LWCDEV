import { LightningElement, track, api } from 'lwc';
import { RecordFieldDataType } from 'lightning/uiRecordApi';

export default class LdsrecordviewformDemo extends LightningElement {
    @api recordId;
    @api objectApiName;
    @track rendertemp=false;

    connectedCallback(){
        if(this.objectApiName =="Account"){
            this.rendertemp = true;
        }
    }
}