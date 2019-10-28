import { LightningElement, track } from "lwc";
import getAccounts from "@salesforce/apex/AccountOperationsApexImperative.getAccounts";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class AccountOperationsApexImperative extends LightningElement {
  @track accounts;
  @track numberofRec;

  get responseReceived() {
    if (this.accounts) {
      return true;
    }
    return false;
  }

  changeHandler(event) {
    this.numberofRec = event.target.value;
  }
  buttonHandler() {
    getAccounts({ numberOfrecords: this.numberofRec })
      .then(response => {
        this.accounts = response;
        const toastEvent = new ShowToastEvent({
          title: "Accounts Loaded",
          message: "Total Records Loaded are: "+this.numberofRec,
          variant: "Success"
        });
        this.dispatchEvent(toastEvent);
      })
      .catch(error => {
        console.log("Error is:", error.body.message);
      });
  }
}