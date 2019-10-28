import { LightningElement, track } from "lwc";
import { createRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import NAME_FIELD from "@salesforce/schema/Account.Name";

export default class LdscreaterecordDemo extends LightningElement {
  name = "";
  @track accountId;

  handleNameChange(event) {
    this.name = event.target.value;
    this.accountId = undefined;
  }
  createAccount() {
    const fields = {};
    fields[NAME_FIELD.fieldApiName] = this.name;
    const inputreq = { apiName: ACCOUNT_OBJECT.objectApiName, fields };

    createRecord(inputreq)
      .then(response => {
        this.accountId = response.Id;
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Success",
            message: "Account created",
            variant: "success"
          })
        );
      })
      .catch(error => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Error creating record",
            message: error.body.message,
            variant: "error"
          })
        );
      });
  }
}