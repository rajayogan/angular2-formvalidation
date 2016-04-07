import {Component} from 'angular2/core';
import {Control, ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {CustomValidator} from './customvalidator';


@Component({
    selector: 'my-app',
    templateUrl: 'app/form.html'
})
export class AppComponent { 
        form: ControlGroup;
        constructor(formbuilder: FormBuilder) {
            this.form = formbuilder.group({
                username: ['', Validators.compose([Validators.required, CustomValidator.underscorecheck]), 
                CustomValidator.useruniquecheck],
                password: []
            })
        }
}
