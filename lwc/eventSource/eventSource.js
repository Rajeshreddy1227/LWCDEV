import { LightningElement } from 'lwc';

export default class EventSource extends LightningElement {

    handleInputChange(event){
        const input = event.target.value;
        const ceInput = new CustomEvent('handleinputfromsource',
        {detail:input}
        );
        this.dispatchEvent(ceInput);
    }
}