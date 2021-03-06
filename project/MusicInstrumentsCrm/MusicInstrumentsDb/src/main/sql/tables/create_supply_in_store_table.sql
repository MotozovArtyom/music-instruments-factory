﻿CREATE TABLE "SupplyInStore"
(
    id    INTEGER GENERATED BY DEFAULT AS IDENTITY
        CONSTRAINT "PK_SupplyInStore"
            PRIMARY KEY,
    good  INTEGER
        CONSTRAINT "FK_SupplyInStore_Good_good"
            REFERENCES "Good"
            ON DELETE RESTRICT,
    store INTEGER
        CONSTRAINT "FK_SupplyInStore_Store_store"
            REFERENCES "Store"
            ON DELETE RESTRICT,
    date  TIMESTAMP NOT NULL
);

CREATE INDEX "IX_SupplyInStore_good"
    ON "SupplyInStore" (good);

CREATE INDEX "IX_SupplyInStore_store"
    ON "SupplyInStore" (store);