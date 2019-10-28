import { LightningElement, track } from 'lwc';

export default class MeetingRooms1 extends LightningElement {
    @track roomInfo = [
        {'Name':'A2', 'Capacity':"10"},
        {'Name':'A3', 'Capacity':"20"},
        {'Name':'A5', 'Capacity':"12"},
        {'Name':'B2', 'Capacity':"2"},
        {'Name':'B3', 'Capacity':"8"}
    ];
    @track clickedMeetingRoom;
    tileclickHandler(event){
        this.clickedMeetingRoom = event.detail;
    }
}