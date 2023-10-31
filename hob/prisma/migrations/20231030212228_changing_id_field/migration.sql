/*
  Warnings:

  - The primary key for the `Option` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Option` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `OptionTreatment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Service` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Service` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ServiceOption` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ServiceTreatment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Treatment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Treatment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `optionId` on the `OptionTreatment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `treatmentId` on the `OptionTreatment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `serviceId` on the `ServiceOption` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `optionId` on the `ServiceOption` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `serviceId` on the `ServiceTreatment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `treatmentId` on the `ServiceTreatment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "OptionTreatment" DROP CONSTRAINT "OptionTreatment_optionId_fkey";

-- DropForeignKey
ALTER TABLE "OptionTreatment" DROP CONSTRAINT "OptionTreatment_treatmentId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceOption" DROP CONSTRAINT "ServiceOption_optionId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceOption" DROP CONSTRAINT "ServiceOption_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceTreatment" DROP CONSTRAINT "ServiceTreatment_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceTreatment" DROP CONSTRAINT "ServiceTreatment_treatmentId_fkey";

-- AlterTable
ALTER TABLE "Option" DROP CONSTRAINT "Option_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Option_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "OptionTreatment" DROP CONSTRAINT "OptionTreatment_pkey",
DROP COLUMN "optionId",
ADD COLUMN     "optionId" INTEGER NOT NULL,
DROP COLUMN "treatmentId",
ADD COLUMN     "treatmentId" INTEGER NOT NULL,
ADD CONSTRAINT "OptionTreatment_pkey" PRIMARY KEY ("optionId", "treatmentId");

-- AlterTable
ALTER TABLE "Service" DROP CONSTRAINT "Service_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Service_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ServiceOption" DROP CONSTRAINT "ServiceOption_pkey",
DROP COLUMN "serviceId",
ADD COLUMN     "serviceId" INTEGER NOT NULL,
DROP COLUMN "optionId",
ADD COLUMN     "optionId" INTEGER NOT NULL,
ADD CONSTRAINT "ServiceOption_pkey" PRIMARY KEY ("serviceId", "optionId");

-- AlterTable
ALTER TABLE "ServiceTreatment" DROP CONSTRAINT "ServiceTreatment_pkey",
DROP COLUMN "serviceId",
ADD COLUMN     "serviceId" INTEGER NOT NULL,
DROP COLUMN "treatmentId",
ADD COLUMN     "treatmentId" INTEGER NOT NULL,
ADD CONSTRAINT "ServiceTreatment_pkey" PRIMARY KEY ("serviceId", "treatmentId");

-- AlterTable
ALTER TABLE "Treatment" DROP CONSTRAINT "Treatment_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Treatment_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "ServiceOption" ADD CONSTRAINT "ServiceOption_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceOption" ADD CONSTRAINT "ServiceOption_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceTreatment" ADD CONSTRAINT "ServiceTreatment_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceTreatment" ADD CONSTRAINT "ServiceTreatment_treatmentId_fkey" FOREIGN KEY ("treatmentId") REFERENCES "Treatment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionTreatment" ADD CONSTRAINT "OptionTreatment_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionTreatment" ADD CONSTRAINT "OptionTreatment_treatmentId_fkey" FOREIGN KEY ("treatmentId") REFERENCES "Treatment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
