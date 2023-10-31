/*
  Warnings:

  - You are about to drop the column `Image` on the `Option` table. All the data in the column will be lost.
  - You are about to drop the column `Image` on the `Service` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Option" DROP COLUMN "Image";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "Image";

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "Url" TEXT NOT NULL,
    "Alt" TEXT NOT NULL,
    "Bg" TEXT,
    "W" INTEGER NOT NULL,
    "H" INTEGER NOT NULL,
    "BlurDataUrl" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceImage" (
    "serviceId" INTEGER NOT NULL,
    "imageId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "ServiceImage_pkey" PRIMARY KEY ("serviceId","imageId")
);

-- CreateTable
CREATE TABLE "OptionImage" (
    "optionId" INTEGER NOT NULL,
    "imageId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "OptionImage_pkey" PRIMARY KEY ("optionId","imageId")
);

-- AddForeignKey
ALTER TABLE "ServiceImage" ADD CONSTRAINT "ServiceImage_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceImage" ADD CONSTRAINT "ServiceImage_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionImage" ADD CONSTRAINT "OptionImage_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionImage" ADD CONSTRAINT "OptionImage_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
