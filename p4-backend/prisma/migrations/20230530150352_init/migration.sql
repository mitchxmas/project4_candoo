/*
  Warnings:

  - You are about to drop the column `user_id` on the `user_addresses` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_address_id]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_address_id` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user_addresses` DROP FOREIGN KEY `User_addresses_user_id_fkey`;

-- AlterTable
ALTER TABLE `user_addresses` DROP COLUMN `user_id`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `user_address_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Users_user_address_id_key` ON `Users`(`user_address_id`);

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_user_address_id_fkey` FOREIGN KEY (`user_address_id`) REFERENCES `User_addresses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
