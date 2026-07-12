import { LightningElement,track,api} from 'lwc';
import Car1 from "@salesforce/resourceUrl/Newcar";
import Kia from "@salesforce/resourceUrl/Kia";
import Exter from "@salesforce/resourceUrl/Exter";
import MG1 from "@salesforce/resourceUrl/MG1";
export default class GooCarDetails extends LightningElement {
     @track sliderValue = 0;
        @track direction = 'fill';
        @api carPicture;
        showChild=false;
        progressRingStyle;
        isCarDispImageOnScreen=false;
        status;
        progressRingValue;
        variant;
        CAR1=Car1;
        KIA=Kia;
        EXTER=Exter;
        MG=MG1;
        next=0; 
        moveNextElem=false;
        withinRange=false;
        nextCarDetail;
        //Array of car details with the static resource picture link
        carArr=[{no:1, carName:this.CAR1},
                {no:2,carName:this.KIA},
                {no:3,carName:this.EXTER},
                {no:4,carName:this.MG1}
        ]
        
       
        moveNext()
        {
            //Check whether the range          
            this.withinRange=(this.next>-1) && (this.next<this.carArr.length);
            this.nextCarDetail=this.carArr[this.next].carName;
            this.next=this.withinRange?++this.next:0;
            this.isCarDispImageOnScreen=true;
      
            this.moveNextElem=true;
            console.log(this.next)
      
            if(this.next===this.carArr.length)
            {
                this.next=0;
                this.isCarDispImageOnScreen=false;
            }
        }
        get nextMoreThanZero(){
            return this.next>0;
        }
        get checkCarArr()
        {
            return this.carArr.length>0;
        }
    
    
        sliderChange(event) {
            this.sliderValue = event.target.value;
            if(this.sliderValue > 0 && this.sliderValue < 30)
            {
                this.progressRingStyle='expired';
                this.status="Critical ❌";
            }
            else if (this.sliderValue>30 && this.sliderValue <70)
            {
                this.progressRingStyle='warning';
                this.status="Warning ⚠️";
            }
            else if(this.sliderValue>70  && this.sliderValue <100)
            {
                this.progressRingStyle='base-autocomplete';
                this.status="Excellent ✅";
            }
        }
    
        directionChange(event) {
            if (event.detail.checked) {
                this.direction = 'fill';
            } else {
                this.direction = 'drain';
            }
        }
        get isProgressRingStyle()
        {
            return this.sliderValue>0;
        }      
}