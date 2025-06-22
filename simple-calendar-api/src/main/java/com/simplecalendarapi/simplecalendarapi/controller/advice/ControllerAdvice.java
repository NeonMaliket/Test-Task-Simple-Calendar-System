package com.simplecalendarapi.simplecalendarapi.controller.advice;

import com.simplecalendarapi.simplecalendarapi.dto.ExceptionDto;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

/**
 * @author Ma1iket
 **/

@RestControllerAdvice
public class ControllerAdvice {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ExceptionDto> handleEntityNotFoundException(EntityNotFoundException e) {
        var response = ExceptionDto.builder().message(e.getMessage())
                .error("Not Found")
                .status(404)
                .path(e.getStackTrace()[0].getMethodName())
                .timestamp(LocalDateTime.now().toString())
                .build();
        return ResponseEntity.status(404).body(response);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ExceptionDto> handleException(Exception e) {
        var response = ExceptionDto.builder().message(e.getMessage())
                .error("Not Found")
                .status(400)
                .path(e.getStackTrace()[0].getMethodName())
                .timestamp(LocalDateTime.now().toString())
                .build();
        return ResponseEntity.status(400).body(response);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Object> handleValidationExceptions(MethodArgumentNotValidException ex) {
        var errors = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .toList();
        return ResponseEntity.badRequest().body(errors);
    }
}
