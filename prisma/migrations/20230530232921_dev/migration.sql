/*
  Warnings:

  - You are about to alter the column `latitude` on the `Airport` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.
  - You are about to alter the column `longitude` on the `Airport` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Airport" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "airport" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL
);
INSERT INTO "new_Airport" ("_id", "airport", "city", "code", "country", "latitude", "longitude", "state") SELECT "_id", "airport", "city", "code", "country", "latitude", "longitude", "state" FROM "Airport";
DROP TABLE "Airport";
ALTER TABLE "new_Airport" RENAME TO "Airport";
CREATE UNIQUE INDEX "Airport_code_key" ON "Airport"("code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
