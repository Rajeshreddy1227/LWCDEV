import { LightningElement,track } from 'lwc';
import getopties from '@salesforce/apex/GetOpportunities.getAllOpps'

export default class DatatableLwc extends LightningElement {
    @track columns = [{
        label: 'Opportunity name',
        fieldName: 'Name',
        type: 'text',
        sortable: true
    },
    {
        label: 'Stage Name',
        fieldName: 'StageName',
        type: 'text',
        sortable: true
    },
    {
        label: 'MyCustomField',
        fieldName: 'MyCustomField__c',
        type: 'text',
        sortable: false
    },
    {
        label: 'Close date',
        fieldName: 'CloseDate',
        type: 'date',
        sortable: true
    }

];
@track error;
@track data ;
    connectedCallback(){
        getopties().then(response=>{
            // const filteredItems = response.filter((item)=>{
            //     return (item.Type='New Customer');
            // });
            // console.log('==',filteredItems);
            // this.data = filteredItems;
            this.data = response =response.filter((item)=>{
                     return (item.Type==='New Customer');
                 });
        }).catch(error=>{
            console.log('i am in error block');
        })

    }
}