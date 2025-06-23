package com.simplecalendarapi.simplecalendarapi.mapper;

import com.simplecalendarapi.simplecalendarapi.dto.CalendarEventDto;
import com.simplecalendarapi.simplecalendarapi.entity.CalendarEvent;
import org.springframework.core.convert.converter.Converter;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;

/**
 * @author Ma1iket
 **/

@Component("calendarEntityToDtoMapper")
public class CalendarEventDtoMapper implements Converter<CalendarEvent, CalendarEventDto> {
    @Override
    public CalendarEventDto convert(@NonNull CalendarEvent source) {
        return new CalendarEventDto(
                source.getId(),
                source.getTitle(),
                source.getDescription(),
                source.getStartDateTime(),
                source.getEndDateTime(),
                source.getLocation()
        );
    }
}

