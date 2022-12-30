import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Contact_Object from '@salesforce/schema/Contact';
import Name_Field from '@salesforce/schema/Contact.Name';
import Description_Field from '@salesforce/schema/Contact.Description';
import AccountId_Field from '@salesforce/schema/Contact.AccountId';

export default class ToCreateCon extends LightningElement {

    objectApiName = Contact_Object;
    fields = [Name_Field, Description_Field, AccountId_Field];

    handleSuccess(event) {
        const conEvent = new ShowToastEvent({
            title: "You ve just created a new contact",
            message: "Record Id" + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(conEvent);
    }

}