-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    INDEX `Account_userId_idx`(`userId`),
    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    INDEX `Session_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Category` ENUM('Beauty', 'Skin', 'Body') NOT NULL DEFAULT 'Beauty',
    `Subcategory` VARCHAR(191) NOT NULL,
    `Type` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `Price` DOUBLE NULL,
    `Time` INTEGER NULL,
    `isAvailable` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Url` VARCHAR(191) NOT NULL,
    `Alt` VARCHAR(191) NOT NULL,
    `Bg` VARCHAR(191) NULL,
    `W` INTEGER NOT NULL,
    `H` INTEGER NOT NULL,
    `BlurDataUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Option` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Category` ENUM('Beauty', 'Skin', 'Body') NOT NULL DEFAULT 'Beauty',
    `Subcategory` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NULL,
    `Description` VARCHAR(191) NOT NULL,
    `Price` INTEGER NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `Time` INTEGER NOT NULL,
    `isAvailable` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceOption` (
    `serviceId` INTEGER NOT NULL,
    `optionId` INTEGER NOT NULL,
    `assignedBy` VARCHAR(191) NOT NULL,

    INDEX `ServiceOption_serviceId_idx`(`serviceId`),
    INDEX `ServiceOption_optionId_idx`(`optionId`),
    PRIMARY KEY (`serviceId`, `optionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Treatment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `price` DOUBLE NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `Time` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceTreatment` (
    `serviceId` INTEGER NOT NULL,
    `treatmentId` INTEGER NOT NULL,
    `assignedBy` VARCHAR(191) NOT NULL,

    INDEX `ServiceTreatment_serviceId_idx`(`serviceId`),
    INDEX `ServiceTreatment_treatmentId_idx`(`treatmentId`),
    PRIMARY KEY (`serviceId`, `treatmentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OptionTreatment` (
    `optionId` INTEGER NOT NULL,
    `treatmentId` INTEGER NOT NULL,
    `assignedBy` VARCHAR(191) NOT NULL,

    INDEX `OptionTreatment_optionId_idx`(`optionId`),
    INDEX `OptionTreatment_treatmentId_idx`(`treatmentId`),
    PRIMARY KEY (`optionId`, `treatmentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceImage` (
    `serviceId` INTEGER NOT NULL,
    `imageId` INTEGER NOT NULL,
    `assignedBy` VARCHAR(191) NOT NULL,

    INDEX `ServiceImage_serviceId_idx`(`serviceId`),
    INDEX `ServiceImage_imageId_idx`(`imageId`),
    PRIMARY KEY (`serviceId`, `imageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OptionImage` (
    `optionId` INTEGER NOT NULL,
    `imageId` INTEGER NOT NULL,
    `assignedBy` VARCHAR(191) NOT NULL,

    INDEX `OptionImage_optionId_idx`(`optionId`),
    INDEX `OptionImage_imageId_idx`(`imageId`),
    PRIMARY KEY (`optionId`, `imageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
