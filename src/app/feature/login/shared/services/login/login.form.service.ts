import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginFormsService {
    constructor(private formBuilder: FormBuilder) { }

    getLoginForm(): FormGroup {
        const form = this.formBuilder.group({
            email: [{ value: undefined, disabled: false }, [Validators.required, Validators.nullValidator, this.emailFormat]],
            password: [{ value: undefined, disabled: false }, [Validators.required, Validators.nullValidator, Validators.minLength(8)]]
        });
        return form;
    }

    emailFormat(control: AbstractControl) {
        if (control.value === null || control.value === undefined || control.value === '') {
            return null;
        }

        if ((/[^a-zA-Z0-9@._-]/.test(control.value))) {
            control.setValue(control.value.toString().replace(/[^a-zA-Z0-9@._-]*/g, ''));
        }

        if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(control.value))) {
            return { requiredEmailFormat: true };
        }
    }
}
