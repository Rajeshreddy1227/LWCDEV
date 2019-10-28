public with sharing class AccountOperationsApex {
    @AuraEnabled(Cacheable=true)
    public static List<Account>  getAccounts(){
        return [SELECT Id,Name,Phone FROM Account LIMIT 10];
    }
    public AccountOperationsApex() {

    }
}