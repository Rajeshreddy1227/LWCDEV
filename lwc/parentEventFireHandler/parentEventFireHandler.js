import { LightningElement, track } from 'lwc';

export default class ParentEventFireHandler extends LightningElement {
    @track val=0;

    progressbarchangeHandler(event){
        this.val = event.detail;
    }
}