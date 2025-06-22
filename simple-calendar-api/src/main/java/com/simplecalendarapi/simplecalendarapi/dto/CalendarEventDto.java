package com.simplecalendarapi.simplecalendarapi.dto;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.simplecalendarapi.simplecalendarapi.validators.date.DateRange;
import com.simplecalendarapi.simplecalendarapi.validators.date.ValidDateRange;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

/**
 * @author Ma1iket
 **/

@ValidDateRange
public record CalendarEventDto(
        String id,
        @NotBlank(message = "Title cannot be empty")
        String title,
        @NotBlank(message = "Description cannot be empty")
        String description,
        @NotNull(message = "Start date time cannot be empty")
        @JsonFormat(shape = JsonFormat.Shape.STRING,
                pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                timezone = "UTC")
        LocalDateTime startDateTime,

        @NotNull(message = "End date time cannot be empty")
        @JsonFormat(shape = JsonFormat.Shape.STRING,
                pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
                timezone = "UTC")
        LocalDateTime endDateTime,

        @NotBlank(message = "Location cannot be empty")
        String location
) implements DateRange {


}
