import { LightningElement, wire, track } from 'lwc';
import {
    CurrentPageReference
} from 'lightning/navigation';
import {
    registerListener,
    unregisterAllListeners,
    fireEvent
} from 'c/pubsub';
export default class PublishReceiver extends LightningElement {

    @track value;
    @wire(CurrentPageReference) pageRef;
    connectedCallback() {
        registerListener('inputChangeEvent',this.handleChange, this)
    }
    disconnectedCallback() {
        // unsubscribe from inputChangeEvent event
        unregisterAllListeners(this);
    }

    handleChange(inpVal) {
        this.value = inpVal;
    }

}