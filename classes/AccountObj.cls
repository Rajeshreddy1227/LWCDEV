public with sharing class AccountObj {
    //This is just a initial test
    //I am adding feature/b1
    @AuraEnabled(cacheable= True)
    public static List<Account> AccQuery(string accountId){
        return[SELECT Id,Name,Industry FROM Account where id= :accountId ];
    }
}