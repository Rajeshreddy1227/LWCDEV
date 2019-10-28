public with sharing class AccountObj {
    @AuraEnabled(cacheable= True)
    public static List<Account> AccQuery(string accountId){
        return[SELECT Id,Name,Industry FROM Account where id= :accountId ];
    }
}