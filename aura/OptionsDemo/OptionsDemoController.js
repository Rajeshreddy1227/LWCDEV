({
    loadOptions: function (component, event, helper) {
        var opts = [
            { value: "Red", label: "Red" },
            { value: "Green", label: "Green" },
            { value: "Blue", label: "Blue" }
        ];
        component.set("v.options", opts);
    },
    handleClick: function (component, event, helper) {
        if(component.get("v.search") == "SEARCH")
            component.set("v.search","search");
        else
            component.set("v.search","SEARCH");
        alert("you are from controller!");
    },
    handleClickNew: function (component, event, helper) {
        helper.helperhandleClickNew(component, event, helper);
    },
    handleSelect: function (component, event, helper) {
        var currVal = component.find("buttonSelect").get("v.value");
        alert("Option Selected is:"+currVal);
        
    },
    doInit:function (component, event, helper) {
   	 component.set("v.optionsList",['SUV','Compact','Luxury','Van','FullSize']);
    }
    
})