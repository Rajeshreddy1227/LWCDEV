import { LightningElement, track, api } from 'lwc';

export default class ChildMethodInvocation extends LightningElement {

    @track parValue;

    @ api
    childMethodInvocation(){
        this.parValue = 200;
    }
}