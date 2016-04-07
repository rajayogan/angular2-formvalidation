import {Control} from 'angular2/common';

export class CustomValidator {
    
    static underscorecheck(control: Control){
        if(control.value.indexOf('_')>=0)
        return null;
        
        return {underscorenotfound: true};
    }
    
    static useruniquecheck(control: Control){
        return new Promise((resolve) => {
            setTimeout (()=>{
                if(control.value == "steve_")
                resolve({usernotunique: true});
                else
                resolve(null);
            }, 2000);
        })
        
        
    }
}