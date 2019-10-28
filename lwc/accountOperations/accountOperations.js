import { LightningElement, track, wire } from "lwc";
import { createRecord, getRecord } from "lightning/uiRecordApi"

const fieldsArray = ['Account.Name','Account.Phone','Account.Website'];
export default class AccountOperations extends LightningElement {
  @track accountName;
  @track accountPhone;
  @track accountWeb;

  @track recordId;
  
    @wire(getRecord,{recordId:'$recordId', fields:fieldsArray})
    accountData;


  accountNameChangehandler(event) {
    this.accountName = event.target.value;
  }
  accountPhoneChangehandler(event) {
    this.accountPhone= event.target.value;
  }
  accountUrlChangehandler(event) {
    this.accountWeb = event.target.value;
  }

  submitAccount(){
      const fields = {'Name' : this.accountName, 'Phone' : this.accountPhone, 'Website': this.accountWeb};
      const recordInput ={apiName:'Account',fields};
      createRecord(recordInput).then(Response=>{
          console.log('Record Created: ', Response.id);
          this.recordId = Response.id;
      }).catch(error=>{
        console.log('Error in Account Creation :', error.body.message);
      });
    }
    get accountName(){
        if(this.accountData.data){
            return this.accountData.data.fields.Name.value;
        }
        return undefined;
    }
    get accountPhone(){
        if(this.accountData.data){
            return this.accountData.data.fields.Phone.value;
        }
        return undefined;
    }
    get accountWebsite(){
        if(this.accountData.data){
            return this.accountData.data.fields.Website.value;
        }
        return undefined;
    }
    
  }