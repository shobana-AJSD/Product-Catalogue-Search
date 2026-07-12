import { LightningElement } from 'lwc';
import MyModal from "c/gooModalScreen";
export default class GooCarWarrantyDemo extends LightningElement {
        async showCarDetails()
        {
            const result = await MyModal.open({
                 size: "large",
                 description: "Car details",
        
            });
          //  console.log("result.content");
        }
}