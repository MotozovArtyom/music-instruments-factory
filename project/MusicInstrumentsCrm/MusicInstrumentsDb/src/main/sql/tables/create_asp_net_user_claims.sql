﻿CREATE TABLE "AspNetUserClaims"
(
    "Id"         INTEGER GENERATED BY DEFAULT AS IDENTITY
        CONSTRAINT "PK_AspNetUserClaims"
            PRIMARY KEY,
    "UserId"     TEXT NOT NULL
        CONSTRAINT "FK_AspNetUserClaims_AspNetUsers_UserId"
            REFERENCES "AspNetUsers"
            ON DELETE CASCADE,
    "ClaimType"  TEXT,
    "ClaimValue" TEXT
);

CREATE INDEX "IX_AspNetUserClaims_UserId"
    ON "AspNetUserClaims" ("UserId");