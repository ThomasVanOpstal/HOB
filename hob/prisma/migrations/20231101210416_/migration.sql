/*
  Warnings:

  - You are about to drop the column `assignedAt` on the `OptionImage` table. All the data in the column will be lost.
  - You are about to drop the column `assignedAt` on the `OptionTreatment` table. All the data in the column will be lost.
  - You are about to drop the column `assignedAt` on the `ServiceImage` table. All the data in the column will be lost.
  - You are about to drop the column `assignedAt` on the `ServiceOption` table. All the data in the column will be lost.
  - You are about to drop the column `assignedAt` on the `ServiceTreatment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OptionImage" DROP COLUMN "assignedAt";

-- AlterTable
ALTER TABLE "OptionTreatment" DROP COLUMN "assignedAt";

-- AlterTable
ALTER TABLE "ServiceImage" DROP COLUMN "assignedAt";

-- AlterTable
ALTER TABLE "ServiceOption" DROP COLUMN "assignedAt";

-- AlterTable
ALTER TABLE "ServiceTreatment" DROP COLUMN "assignedAt";
