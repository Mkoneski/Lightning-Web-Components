import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class ToCreateAcc extends LightningElement {

    objectApiName = ACCOUNT_OBJECT;
    fields = [NAME_FIELD, PHONE_FIELD, TYPE_FIELD, INDUSTRY_FIELD];

    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "You ve just created Account",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }

}