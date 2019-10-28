import { LightningElement, wire, api, track } from 'lwc';
import findAccount from '@salesforce/apex/AccountObj.AccQuery';

export default class ShowAccountApex extends LightningElement {

    @api recordId;
    @track accData;
    @track error;
    @wire(findAccount,({ accountId:'$recordId'}))
    getData({ error, data }){
        if(data){
            if(data[0].name !==null && data[0].name !==''){
                this.accData = data[0];
                this.accData = false;
            }           
            else{
              //  this.accData = null;
            }
            // data.forEach((item)=>{
                
            //     console.log(item.Name);
            // });
            // this.accData = data;
    } 
    }
}