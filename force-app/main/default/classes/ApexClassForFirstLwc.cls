public with sharing class ApexClassForFirstLwc {
    public ApexClassForFirstLwc() {

    }

    @AuraEnabled(cacheable = true)
    public static List<Contact> toGetContacts(){
        return [SELECT Id, Name, Email FROM Contact LIMIT 20];
    }

    @AuraEnabled(cacheable = true)
    public static List<Account> toGetAccounts(){
        return [SELECT Id, Name FROM Account LIMIT 20];
    }
}
