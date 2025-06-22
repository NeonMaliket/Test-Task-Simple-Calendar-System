package com.simplecalendarapi.simplecalendarapi.controller;

import com.simplecalendarapi.simplecalendarapi.dto.CalendarEventDto;
import com.simplecalendarapi.simplecalendarapi.service.CalendarEventService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

/**
 * @author Ma1iket
 **/

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/calendar/events")
public class CalendarEventController {

    private final CalendarEventService calendarEventService;

    @PostMapping
    public ResponseEntity<CalendarEventDto> createEvent(@Valid @RequestBody CalendarEventDto eventDto) {
        log.info("Creating new calendar event");
        return ResponseEntity.ok(calendarEventService.createEvent(eventDto));
    }

    @GetMapping
    public ResponseEntity<List<CalendarEventDto>> getAllEvents() {
        log.info("Getting all calendar events");
        return ResponseEntity.ok(calendarEventService.getAllEvents());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CalendarEventDto> getEventById(@PathVariable String id) {
        log.info("Getting calendar event by id: {}", id);
        return ResponseEntity.ok(calendarEventService.getEventById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CalendarEventDto> updateEvent(
            @PathVariable String id,
            @Valid @RequestBody CalendarEventDto eventDto) {
        log.info("Updating calendar event with id: {}", id);
        return ResponseEntity.ok(calendarEventService.updateEvent(id, eventDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable String id) {
        log.info("Deleting calendar event with id: {}", id);
        calendarEventService.deleteEvent(id);
        return ResponseEntity.noContent().build();
    }

}
