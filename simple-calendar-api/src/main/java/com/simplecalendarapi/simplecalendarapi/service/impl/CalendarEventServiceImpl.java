package com.simplecalendarapi.simplecalendarapi.service.impl;

import com.simplecalendarapi.simplecalendarapi.dto.CalendarEventDto;
import com.simplecalendarapi.simplecalendarapi.entity.CalendarEvent;
import com.simplecalendarapi.simplecalendarapi.exception.EventNotFoundException;
import com.simplecalendarapi.simplecalendarapi.repository.CalendarEventRepository;
import com.simplecalendarapi.simplecalendarapi.service.CalendarEventService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.core.convert.converter.Converter;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Ma1iket
 **/
@Log4j2
@Service
@RequiredArgsConstructor
public class CalendarEventServiceImpl implements CalendarEventService {

    private final Converter<CalendarEventDto, CalendarEvent> calendarEventMapper;
    private final Converter<CalendarEvent, CalendarEventDto> calendarEventDtoMapper;
    private final CalendarEventRepository calendarEventRepository;

    @Override
    public CalendarEventDto createEvent(@NonNull CalendarEventDto calendarEventDto) {
        log.info("Creating event");
        var event = calendarEventMapper.convert(calendarEventDto);
        var saved = calendarEventRepository.save(event);
        log.info("Saved: {}", saved);
        return calendarEventDtoMapper.convert(saved);
    }

    @Override
    public List<CalendarEventDto> getAllEvents() {
        log.info("Get all events");
        return calendarEventRepository.findAll().stream().map(calendarEventDtoMapper::convert).toList();
    }

    @Override
    public CalendarEventDto getEventById(@NonNull String id) {
        log.info("Searching event with id: {}", id);
        return calendarEventRepository.findById(id)
                .map(calendarEventDtoMapper::convert)
                .orElseThrow(() -> new EventNotFoundException(id));
    }

    @Override
    public CalendarEventDto updateEvent(@NonNull String id, @NonNull CalendarEventDto calendarEventDto) {
        log.info("Update event with id: {}, event: {}", id, calendarEventDto);
        var event = calendarEventRepository.findById(id).orElseThrow(() -> new EventNotFoundException(id));

        var updatedEvent = CalendarEvent.builder()
                .id(event.getId())
                .title(calendarEventDto.title())
                .description(calendarEventDto.description())
                .startDateTime(calendarEventDto.startDateTime())
                .endDateTime(calendarEventDto.endDateTime())
                .location(calendarEventDto.location())
                .timeZone(calendarEventDto.timeZone())
                .build();

        var saved = calendarEventRepository.save(updatedEvent);
        return calendarEventDtoMapper.convert(saved);
    }

    @Override
    public void deleteEvent(@NonNull String id) {
        log.info("Deleting event with id: {}", id);
        if (calendarEventRepository.existsById(id)) {
            calendarEventRepository.deleteById(id);
            return;
        }
        throw new EventNotFoundException(id);
    }
}
