import { LightningElement ,track} from 'lwc';

export default class IfElseDirDemo extends LightningElement {
    @track checkboxReturn = false;
    getVal(event){
        this.checkboxReturn = event.target.checked;
    }

}