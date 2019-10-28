({
    helperhandleClickNew : function(component, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
        if(createRecordEvent){
            createRecordEvent.setParams({
                "entityApiName": "Account",
                "defaultFieldValues": {
                    'Phone' : '415-240-6590',
                    'Industry' : 'Agriculture'
                }
            });
            createRecordEvent.fire(); 
        }
    }
})