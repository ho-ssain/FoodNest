import { AbstractControl } from '@angular/forms';

export const PasswordsMatchValidator = (
  passControlName: string,
  confirmPassControlName: string
) => {
  const validator = (form: AbstractControl) => {
    const passControl = form.get(passControlName);
    const confirmPassControl = form.get(confirmPassControlName);

    if (!passControl || !confirmPassControl) return;

    if (passControl.value !== confirmPassControl.value)
      confirmPassControl.setErrors({ notMatch: true });
    else {
      const errors = confirmPassControl.errors;
      if (!errors) return;
      delete errors.notMatch;
      confirmPassControl.setErrors(errors);
    }
  };
  return validator;
};
