package com.simplecalendarapi.simplecalendarapi.dto;


import com.simplecalendarapi.simplecalendarapi.validators.date.DateRange;
import com.simplecalendarapi.simplecalendarapi.validators.date.ValidDateRange;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.OffsetDateTime;

/**
 * @author Ma1iket
 **/

@ValidDateRange
public record CalendarEventDto(
        String id,
        @Size(max = 20, message = "Title cannot be more than 10 characters")
        @NotBlank(message = "Title cannot be empty")
        String title,
        @Size(max = 50, message = "Description cannot be more than 50 characters")
        String description,
        @NotNull(message = "Start date time cannot be empty")
        OffsetDateTime startDateTime,
        @NotNull(message = "End date time cannot be empty")
        OffsetDateTime endDateTime,
        String location,
        @NotBlank(message = "Time zone cannot be empty")
        String timeZone
) implements DateRange {


}
