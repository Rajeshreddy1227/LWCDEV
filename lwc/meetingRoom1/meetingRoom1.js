import { LightningElement, api,track } from 'lwc';

export default class MeetingRoom1 extends LightningElement {
    @api meetingRoom //= {'Name':'A2', 'Capacity':"20"};
    @track clickedMeetingRoom;

    tileclickHandler(event){
        const tileclicked = new CustomEvent('tileclick',{detail:this.meetingRoom.Name});
        this.dispatchEvent(tileclicked);
    }
}