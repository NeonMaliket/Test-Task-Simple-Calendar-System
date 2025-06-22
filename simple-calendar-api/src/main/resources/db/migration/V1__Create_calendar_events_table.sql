CREATE TABLE calendar_events
(
    id              VARCHAR(36) PRIMARY KEY,
    title           VARCHAR(20) NOT NULL,
    description     VARCHAR(50),
    start_date_time TIMESTAMP   NOT NULL,
    end_date_time   TIMESTAMP   NOT NULL,
    location        TEXT,
    time_zone       VARCHAR(50) NOT NULL
);
