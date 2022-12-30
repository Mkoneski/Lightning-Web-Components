import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Opportunity_Object from '@salesforce/schema/Opportunity';
import Name_Field from '@salesforce/schema/Opportunity.Name';
import CloseDate_Field from '@salesforce/schema/Opportunity.CloseDate';
import StageName_Field from '@salesforce/schema/Opportunity.StageName';
import Amount_Field from '@salesforce/schema/Opportunity.Amount';

export default class ToCreateOpp extends LightningElement {

    objectApiName = Opportunity_Object;
    fields = [Name_Field, CloseDate_Field, StageName_Field, Amount_Field];

    handleSuccess(event) {
        const oppToast = new ShowToastEvent ({
            title: "Opportunity created",
            message: "Record Id" + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(oppToast);
    }
}