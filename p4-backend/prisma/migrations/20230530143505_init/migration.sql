/*
  Warnings:

  - You are about to drop the `auths` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `auths`;

-- CreateTable
CREATE TABLE `Auth_users` (
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Auth_users_email_key`(`email`),
    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
