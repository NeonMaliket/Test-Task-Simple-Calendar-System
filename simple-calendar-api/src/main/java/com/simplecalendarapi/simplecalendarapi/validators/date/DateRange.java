package com.simplecalendarapi.simplecalendarapi.validators.date;

import org.springframework.lang.NonNull;

import java.time.LocalDateTime;

public interface DateRange {
    @NonNull
    LocalDateTime startDateTime();
    @NonNull
    LocalDateTime endDateTime();
}
