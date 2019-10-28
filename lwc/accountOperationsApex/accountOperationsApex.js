import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountOperationsApex.getAccounts'

export default class AccountOperationsApex extends LightningElement {

@wire (getAccounts)
accounts;

get responseReceived(){
    if(this.accounts){
        return true;
    }
    return false;
}
}