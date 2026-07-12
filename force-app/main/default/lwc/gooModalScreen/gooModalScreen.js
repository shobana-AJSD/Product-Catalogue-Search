import { LightningElement ,api} from 'lwc';
import LightningModal from "lightning/modal";
export default class GooModalScreen extends LightningModal {
        @api carPic;
        handleOkay()
        {
            console.log(this.carPic);
            this.close("Okay");
        }
    
}