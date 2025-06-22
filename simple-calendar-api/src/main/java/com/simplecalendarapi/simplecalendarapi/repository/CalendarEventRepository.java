package com.simplecalendarapi.simplecalendarapi.repository;

import com.simplecalendarapi.simplecalendarapi.entity.CalendarEvent;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ma1iket
 **/

public interface CalendarEventRepository extends JpaRepository<CalendarEvent, String> {
}
