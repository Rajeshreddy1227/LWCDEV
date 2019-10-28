import { LightningElement, track } from "lwc";

export default class SimpleCalculator extends LightningElement {
  @track currResult = "Click any Button Above";
  firstNumber;
  secondNumber;
  @track showResults = false;
  @track previousResultArray =[];

  getdataHandler(event) {
    const inputEvent = event.target.name;
    if (inputEvent === "num1") {
      this.firstNumber = event.target.value;
    } else if (inputEvent === "num2") {
      this.secondNumber = event.target.value;
    }
  }
  addHandler() {
    const firstN = parseInt(this.firstNumber);
    const secondN = parseInt(this.secondNumber);
    this.currResult = `Result of  Addition of ${firstN} and ${secondN} is: ${firstN +secondN}`;
    this.previousResultArray.push(this.currResult);
  }
  subHandler() {
    const firstN = parseInt(this.firstNumber);
    const secondN = parseInt(this.secondNumber);
    this.currResult = `Result of  Sub of ${firstN} and ${secondN} is: ${firstN -secondN}`;
    this.previousResultArray.push(this.currResult);
  }
  mulHandler() {
    const firstN = parseInt(this.firstNumber);
    const secondN = parseInt(this.secondNumber);
    this.currResult = `Result of  Multiplication of ${firstN} and ${secondN} is: ${firstN *secondN}`;
    this.previousResultArray.push(this.currResult);
  }
  divHandler() {
    const firstN = parseInt(this.firstNumber);
    const secondN = parseInt(this.secondNumber);
    this.currResult = `Result of  Division of ${firstN} and ${secondN} is: ${firstN /secondN}`;
    this.previousResultArray.push(this.currResult);
  }
  showPrevResToggle(event){
      this.showResults =  event.target.checked;
  }
}