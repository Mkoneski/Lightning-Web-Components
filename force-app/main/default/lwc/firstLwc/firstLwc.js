import { LightningElement, wire } from 'lwc';
import toGetContacts from '@salesforce/apex/ApexClassForFirstLwc.toGetContacts';
import toGetAccounts from '@salesforce/apex/ApexClassForFirstLwc.toGetAccounts';

export default class FirstLwc extends LightningElement {
    greting = 'again with this, nooo';
    inputText = '';

    result;
    error;
    resultacc;
    erroracc;

    @wire(toGetContacts)
    wiredName({ error, data }) {
        if (data) {
            this.result = data;
            this.error = undefined;
            
        } else if (error) {
            this.error = error;
            this.data = undefined;
            console.error(error);
        }
    }

    

    changeOnInput(event) {
        this.inputText = event.target.value;
    }

    handleClick () {
        alert('ready to see some Accounts?')

        toGetAccounts()
       .then(result => {
        this.resultacc = result;
        this.erroracc = undefined;
       })
       .catch(error => {
        this.erroracc = error;
        this.resultacc = undefined;
        console.error(error)
       });
       
    }

    handleClickForCon() {
        alert ('Click to see contacts')

        toGetContacts()
        .then(result => {
            this.result = result;
            this.error = undefined;
        })
        .catch(error => {
            this.error = error;
            this.result = undefined;
            console.error(error)
        });

    }
}