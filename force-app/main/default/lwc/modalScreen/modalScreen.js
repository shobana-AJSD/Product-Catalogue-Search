import {api} from 'lwc';
import LightningModal from "lightning/modal";
export default class ModalScreen extends LightningModal  {
    @api carPic;
    handleOkay()
    {
        console.log(this.carPic);
        this.close("Okay");
    }

}