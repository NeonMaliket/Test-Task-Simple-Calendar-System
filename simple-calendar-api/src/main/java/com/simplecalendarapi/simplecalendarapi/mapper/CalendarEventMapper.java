package com.simplecalendarapi.simplecalendarapi.mapper;

import com.simplecalendarapi.simplecalendarapi.dto.CalendarEventDto;
import com.simplecalendarapi.simplecalendarapi.entity.CalendarEvent;
import org.springframework.core.convert.converter.Converter;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;

/**
 * @author Ma1iket
 **/

@Component("calendarDtoToEntityMapper")
public class CalendarEventMapper implements Converter<CalendarEventDto, CalendarEvent> {
    @Override
    public CalendarEvent convert(@NonNull CalendarEventDto source) {
        return CalendarEvent.builder()
                .id(source.id())
                .title(source.title())
                .description(source.description())
                .startDateTime(source.startDateTime())
                .endDateTime(source.endDateTime())
                .location(source.location())
                .build();
    }
}
