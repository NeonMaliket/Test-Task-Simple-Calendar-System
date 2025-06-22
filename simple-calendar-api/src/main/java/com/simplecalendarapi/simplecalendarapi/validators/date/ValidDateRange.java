package com.simplecalendarapi.simplecalendarapi.validators.date;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = DateRangeValidator.class)
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidDateRange {
    String message() default """
            Invalid date range provided. End date must be after start date.
            """;

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

}
