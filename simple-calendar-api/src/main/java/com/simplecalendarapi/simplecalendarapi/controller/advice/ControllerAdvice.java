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
                .timestamp(LocalDateTime.now().toString())
                .build();
        return ResponseEntity.status(404).body(response);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ExceptionDto> handleException(Exception e) {
        var response = ExceptionDto.builder().message(e.getMessage())
                .error("Bad Request")
                .status(400)
                .timestamp(LocalDateTime.now().toString())
                .build();
        return ResponseEntity.status(400).body(response);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionDto> handleValidationExceptions(MethodArgumentNotValidException ex) {
        String allErrors = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .reduce((msg1, msg2) -> msg1 + "; " + msg2)
                .orElse("Validation failed");

        var response = ExceptionDto.builder()
                .message(allErrors)
                .error("Validation Error")
                .status(400)
                .timestamp(LocalDateTime.now().toString())
                .build();

        return ResponseEntity.badRequest().body(response);
    }
}
