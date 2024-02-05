/*
  Warnings:

  - Changed the type of `Price` on the `Option` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `Time` on the `Option` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- AlterTable
ALTER TABLE "Option" ALTER COLUMN "Subcategory" SET NOT NULL,
ALTER COLUMN "Subcategory" SET DATA TYPE TEXT,
DROP COLUMN "Price",
ADD COLUMN     "Price" INTEGER NOT NULL,
DROP COLUMN "Time",
ADD COLUMN     "Time" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "Account_userId_idx" ON "Account"("userId");

-- CreateIndex
CREATE INDEX "OptionImage_optionId_idx" ON "OptionImage"("optionId");

-- CreateIndex
CREATE INDEX "OptionImage_imageId_idx" ON "OptionImage"("imageId");

-- CreateIndex
CREATE INDEX "OptionTreatment_optionId_idx" ON "OptionTreatment"("optionId");

-- CreateIndex
CREATE INDEX "OptionTreatment_treatmentId_idx" ON "OptionTreatment"("treatmentId");

-- CreateIndex
CREATE INDEX "ServiceImage_serviceId_idx" ON "ServiceImage"("serviceId");

-- CreateIndex
CREATE INDEX "ServiceImage_imageId_idx" ON "ServiceImage"("imageId");

-- CreateIndex
CREATE INDEX "ServiceOption_serviceId_idx" ON "ServiceOption"("serviceId");

-- CreateIndex
CREATE INDEX "ServiceOption_optionId_idx" ON "ServiceOption"("optionId");

-- CreateIndex
CREATE INDEX "ServiceTreatment_serviceId_idx" ON "ServiceTreatment"("serviceId");

-- CreateIndex
CREATE INDEX "ServiceTreatment_treatmentId_idx" ON "ServiceTreatment"("treatmentId");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
