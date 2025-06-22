package com.simplecalendarapi.simplecalendarapi.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * @author Ma1iket
 **/

@Data
@Builder
@Entity
@Table(name = "calendar_events")
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class CalendarEvent implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id")
    private String id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "start_date_time", nullable = false)
    private LocalDateTime startDateTime;

    @Column(name = "end_date_time", nullable = false)
    private LocalDateTime endDateTime;

    @Column(name = "location", nullable = false)
    private String location;
}
