import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {

    weight;
    height;

    @track bmiResult;
    weightHandler(event){
        this.weight = parseFloat(event.target.value);
    }
    heightHandler(event){
        this.height = parseFloat(event.target.value);
    }
    bmiHandler(){
        this.bmiResult = this.weight/(this.height*this.height);
    }
}