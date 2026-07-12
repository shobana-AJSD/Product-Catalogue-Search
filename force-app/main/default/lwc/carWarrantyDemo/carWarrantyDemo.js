import { LightningElement,track} from 'lwc';
import MyModal from "c/modalScreen";
export default class CarWarrantyDemo extends LightningElement {

    async showCarDetails()
    {
        const result = await MyModal.open({
             size: "large",
             description: "Car details",
             
        });
     
    }
    
}