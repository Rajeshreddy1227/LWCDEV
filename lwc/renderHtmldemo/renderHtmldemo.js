import { LightningElement } from 'lwc';
import smallScreen from './smallScreen.html';
import largeScreen from './largeScreen.html';
export default class RenderHtmldemo extends LightningElement {

    render(){
        return window.screen.width<760?smallScreen:largeScreen;
    }
}