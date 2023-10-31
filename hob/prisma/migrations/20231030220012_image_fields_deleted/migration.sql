/*
  Warnings:

  - You are about to drop the column `assignedAt` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `Image` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "assignedAt",
DROP COLUMN "assignedBy";
