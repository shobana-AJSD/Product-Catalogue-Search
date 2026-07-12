import { LightningElement,track,api} from 'lwc';
import Hector from "@salesforce/resourceUrl/Newcar";
import Kia from "@salesforce/resourceUrl/Kia";
import Exter from "@salesforce/resourceUrl/Exter";
import MG1 from "@salesforce/resourceUrl/MG1";
export default class CheckCarDetails extends LightningElement {
    @track sliderValue = 0;
    @track direction = 'fill';
    @api carPicture;
    showChild=false;
    progressRingStyle;
    isCarDispImageOnScreen=false;
    status;
    progressRingValue;
    variant;
    HECTOR=Hector;
    KIA=Kia;
    EXTER=Exter;
    MG=MG1;
    nextCarIndex=0; 
    moveNextElem=false;
    withinRange=false;
    nextCarUrl;
    //Array of car details with the static resource picture link
    carArr=[{no:1,carUrl:this.HECTOR},
            {no:2,carUrl:this.KIA},
            {no:3,carUrl:this.EXTER},
            {no:4,carUrl:this.MG}
    ]
    
   
    moveNext()//>>
    {
        //Check whether the range 
        this.withinRange=(this.nextCarIndex>-1) && (this.nextCarIndex<this.carArr.length);
        this.nextCarUrl=this.carArr[this.nextCarIndex].carUrl;
        this.nextCarIndex=this.withinRange?++this.nextCarIndex:0;
        this.isCarDispImageOnScreen=true;
        
        this.moveNextElem=true;
       
  
        if(this.nextCarIndex===this.carArr.length)
        {
            this.nextCarIndex=0;
            this.isCarDispImageOnScreen=false;
        }
    }
    get nextMoreThanZero(){
        return this.nextCarIndex>0;
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