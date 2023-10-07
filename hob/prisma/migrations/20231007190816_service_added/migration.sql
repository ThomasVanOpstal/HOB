-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Beauty', 'Skin', 'Body');

-- CreateEnum
CREATE TYPE "Length" AS ENUM ('Short', 'Medium', 'Long', 'X_long');

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "Category" "Category" NOT NULL DEFAULT 'Beauty',
    "Subcategory" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "Image" TEXT NOT NULL,
    "Time" INTEGER NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" TEXT NOT NULL,
    "Category" "Category" NOT NULL DEFAULT 'Beauty',
    "Subcategory" TEXT[],
    "type" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "Image" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Time" INTEGER NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceOption" (
    "serviceId" TEXT NOT NULL,
    "optionId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "ServiceOption_pkey" PRIMARY KEY ("serviceId","optionId")
);

-- CreateTable
CREATE TABLE "Treatment" (
    "id" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "name" "Length" NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Treatment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceTreatment" (
    "serviceId" TEXT NOT NULL,
    "treatmentId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "ServiceTreatment_pkey" PRIMARY KEY ("serviceId","treatmentId")
);

-- CreateTable
CREATE TABLE "OptionTreatment" (
    "optionId" TEXT NOT NULL,
    "treatmentId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "OptionTreatment_pkey" PRIMARY KEY ("optionId","treatmentId")
);

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
