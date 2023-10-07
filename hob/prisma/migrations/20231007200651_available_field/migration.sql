-- AlterTable
ALTER TABLE "Option" ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true;
