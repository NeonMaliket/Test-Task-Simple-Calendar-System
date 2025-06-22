package com.simplecalendarapi.simplecalendarapi.dto;

import lombok.Builder;

/**
 * @author Ma1iket
 **/

@Builder
public record ExceptionDto(
        String timestamp,
        int status,
        String error,
        String message
) {
}
