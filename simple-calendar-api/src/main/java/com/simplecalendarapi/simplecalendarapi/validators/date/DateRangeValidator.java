package com.simplecalendarapi.simplecalendarapi.validators.date;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class DateRangeValidator implements ConstraintValidator<ValidDateRange, DateRange> {
    @Override
    public boolean isValid(DateRange value, ConstraintValidatorContext context) {
        if (value == null) return true;

        boolean valid = value.startDateTime().isBefore(value.endDateTime());
        if (!valid) {
            context.disableDefaultConstraintViolation();
            context
                    .buildConstraintViolationWithTemplate(context.getDefaultConstraintMessageTemplate())
                    .addPropertyNode("startDateTime")
                    .addPropertyNode("endDateTime")
                    .addConstraintViolation();
        }

        return valid;
    }
}
