package com.simplecalendarapi.simplecalendarapi.service;

import com.simplecalendarapi.simplecalendarapi.dto.CalendarEventDto;
import org.springframework.lang.NonNull;

import java.util.List;

/**
 * @author Ma1iket
 **/

public interface CalendarEventService {

    CalendarEventDto createEvent(@NonNull CalendarEventDto calendarEventDto);

    List<CalendarEventDto> getAllEvents();

    CalendarEventDto getEventById(@NonNull String id);

    CalendarEventDto updateEvent(@NonNull String id, @NonNull CalendarEventDto calendarEventDto);

    void deleteEvent(@NonNull String id);
}
