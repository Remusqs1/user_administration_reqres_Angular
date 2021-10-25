import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ListUsersFormsService {
    constructor(private formBuilder: FormBuilder) { }

    itemPerPageForm(): FormGroup {
        const form = this.formBuilder.group({
            perPage: [{ value: undefined, disabled: false }, this.numeric],
        });
        return form;
    }

    numeric(control: AbstractControl) {
        if (control.value === null || control.value === undefined || control.value === '') {
            return null;
        }
        if ((/[^0-9]/.test(control.value))) {
            control.setValue(control.value.toString().replace(/[^0-9]*/g, ''));
            return null;
        }
    }

}