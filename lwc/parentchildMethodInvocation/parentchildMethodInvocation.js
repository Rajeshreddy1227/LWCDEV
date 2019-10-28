import { LightningElement } from 'lwc';

export default class ParentchildMethodInvocation extends LightningElement {
    onclickHandler(event){
        this.template.querySelector("c-child-method-invocation").childMethodInvocation();
    }

}