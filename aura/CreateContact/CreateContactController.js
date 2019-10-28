({
    handleRecordUpdated : function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "LOADED") {
         //   console.log('parentid: '+component.get("v.simpleRecord").ParentId);
            var createRecordEvent = $A.get("e.force:createRecord");
            createRecordEvent.setParams({
                "entityApiName": "Contact",
                "defaultFieldValues": {
                    'AccountId' : component.get("v.recordId")
                }
            });
            createRecordEvent.fire();
        }
    }
})