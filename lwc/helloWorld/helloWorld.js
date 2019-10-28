import { LightningElement, api, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    //f2
    @api propBinding = 'Property Binding!'
    @track greetres='none';
    @track greettext = 'How are you?';

    Greetme(event){
        this.greetres = event.target.value;
    }
}