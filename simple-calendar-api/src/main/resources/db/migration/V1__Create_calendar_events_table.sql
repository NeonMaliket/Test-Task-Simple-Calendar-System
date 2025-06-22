CREATE TABLE calendar_events
(
    id              VARCHAR(36) PRIMARY KEY,
    title           VARCHAR(255) NOT NULL,
    description     TEXT         NOT NULL,
    start_date_time TIMESTAMP    NOT NULL,
    end_date_time   TIMESTAMP    NOT NULL,
    location        VARCHAR(255) NOT NULL
);
