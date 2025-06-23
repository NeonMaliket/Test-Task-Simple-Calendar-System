package com.simplecalendarapi.simplecalendarapi.validators.date;

import org.springframework.lang.NonNull;

import java.time.OffsetDateTime;

public interface DateRange {
    @NonNull
    OffsetDateTime startDateTime();
    @NonNull
    OffsetDateTime endDateTime();
}
