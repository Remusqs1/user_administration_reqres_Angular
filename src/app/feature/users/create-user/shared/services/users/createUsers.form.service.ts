import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateUsersFormsService {
    constructor(private formBuilder: FormBuilder) { }

    createUsersForm(): FormGroup {
        const form = this.formBuilder.group({
            name: [{ value: undefined, disabled: false }, [Validators.required, Validators.nullValidator, this.AlphaWithOutWhiteSpaceName]],
            job: [{ value: undefined, disabled: false }, [Validators.required, Validators.nullValidator]]
        });
        return form;
    }

    AlphaWithOutWhiteSpaceName(control: AbstractControl) {
        if ((/[^a-zA-ZñÑ]/.test(control.value))) {
            control.setValue(control.value.replace(/[^a-zA-ZñÑ]*/g, ''));
            return null;
        }
    }

}