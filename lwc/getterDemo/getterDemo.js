import { LightningElement } from 'lwc';

export default class GetterDemo extends LightningElement {

    firstName = "Rajesh";
    lastName = "Kanduri";

    get upperFullName(){
        //Accessing from DOM 
        const fullName = `${this.firstName} ${this.lastName}`;
        return fullName.trim().toUpperCase();
    }
    get upperFullName2(){
        
        return (this.firstName.toUpperCase()+'  '+this.lastName.toUpperCase());
    }
}