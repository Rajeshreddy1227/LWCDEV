import { LightningElement ,track} from 'lwc';

export default class IfElseDecDemo extends LightningElement {
    @track checkboxReturn = false;
    getVal(event){
        this.checkboxReturn = event.target.checked;
    }

}