import { LightningElement, track, wire } from "lwc";
import getopty from "@salesforce/apex/GetOpportunities.getAllOpps";

export default class ComboboxDemo extends LightningElement {
  @track value = "none";
  @track optyName;
  @track optyName1;
  @track identifier;
  @wire(getopty)
  optylist({ data, error }) {
    if (data) {
      this.optyName = data;
      const mapItems = data.map(item => {
        // return { label: item.Name, value: item.Name };
        return { label: item.Name, value: item.Id };
      });
      this.optyName1 = mapItems;
    } else if (error) {
      this.optyName = error;
    }
  }

  get options() {
    return [
      { label: "New", value: "new" },
      { label: "In Progress", value: "inProgress" },
      { label: "Finished", value: "finished" }
    ];
  }
  handleChange(event) {
     this.value = event.target.value;
     this.identifier =event.target.placeholder;
   // this.value = event.detail.value;
  }
  onSubmit() {
      alert('I am inside of the Button =>'+this.value);
    this.identifier = this.optyName.filter(item => {
      return item.Name === this.value;
    }).Name;
  }
}