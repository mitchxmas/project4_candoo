/*
  Warnings:

  - You are about to drop the `user_addresses` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address_line1` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address_line2` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `Users_user_address_id_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `address_line1` VARCHAR(255) NOT NULL,
    ADD COLUMN `address_line2` VARCHAR(255) NOT NULL,
    ADD COLUMN `city` VARCHAR(255) NOT NULL,
    ADD COLUMN `country` VARCHAR(255) NOT NULL;

-- DropTable
DROP TABLE `user_addresses`;
