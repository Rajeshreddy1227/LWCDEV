import { LightningElement, track, api } from 'lwc';

export default class ChildMethodCallChild extends LightningElement {
    @track upperCase = 'Defalt Value';

    @api
    changeToUpperCase(param){
        this.upperCase = param.toUpperCase();
    }
}