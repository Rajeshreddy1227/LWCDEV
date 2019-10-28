import { LightningElement, api } from 'lwc';

export default class ChildMethodCallParent extends LightningElement {

    @api
    changeHandler(event){
        this.template.querySelector('c-child-method-call-child').changeToUpperCase(event.target.value);
    }
}