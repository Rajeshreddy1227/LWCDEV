import { LightningElement, api } from 'lwc';

export default class ChildEventFireMethodOne extends LightningElement {

    @api progressBarValue;
    numberChangeHandler(event){
        this.progressBarValue = event.target.value;
        const eventProgressBar =new CustomEvent("progressbarchange",{detail:this.progressBarValue})
        this.dispatchEvent(eventProgressBar);
    }
}