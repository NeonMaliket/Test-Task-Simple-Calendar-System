package com.simplecalendarapi.simplecalendarapi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.text.MessageFormat;

/**
 * @author Ma1iket
 **/

@ResponseStatus(HttpStatus.NOT_FOUND)
public class EventNotFoundException extends RuntimeException {
    private static final String MESSAGE = "Event with id {0} not found";
    public EventNotFoundException(String id) {
        super(MessageFormat.format(MESSAGE, id));
    }
}
