import { LightningElement,track } from 'lwc';

export default class OnloadDemo extends LightningElement {
    @track val;
    connectedCallback(){
        this.val = 200;
    }
}