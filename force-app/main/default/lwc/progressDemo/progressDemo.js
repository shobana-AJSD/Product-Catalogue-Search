import { LightningElement } from 'lwc';

export default class ProgressDemo extends LightningElement {
    currentStep = 1;

    steps = ['Account', 'Payment', 'Review', 'Confirm'];

    get stepLabel() {
        return this.steps[this.currentStep - 1];
    }

    handleNext() {
        console.log(this.currentStep);
        if (this.currentStep < 4) {
            this.currentStep++;
        }
    }

    handlePrevious() {
        if (this.currentStep > 1) {
            this.currentStep--;
        }
    }
}