/*
  Warnings:

  - The `Price` column on the `Option` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `Time` column on the `Option` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Option" DROP COLUMN "Price",
ADD COLUMN     "Price" DOUBLE PRECISION[],
DROP COLUMN "Time",
ADD COLUMN     "Time" INTEGER[];
