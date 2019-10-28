import { LightningElement, track } from 'lwc';

export default class EventContainer extends LightningElement {
@track value;

handleSelct(event){
        const val = event.detail;
        this.value = val;

    }
}