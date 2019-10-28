public with sharing class AccountOperationsApexImperative {
    public AccountOperationsApexImperative() {

    }
     @AuraEnabled(cacheable=true)
    public static List<Account>  getAccounts(Integer numberOfrecords){
        return [SELECT Id,Name,Phone FROM Account LIMIT :numberOfrecords];
    }
}