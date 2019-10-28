import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import{fireEvent} from 'c/pubsub';

export default class PublishSource extends LightningElement {

    @wire (CurrentPageReference) pageref;
    handleChange(event){
        fireEvent(this.pageref,'inputChangeEvent',event.target.value);

    }
}