/*
  Warnings:

  - You are about to drop the column `user_id` on the `roles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[role]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `role` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `roles` DROP FOREIGN KEY `Roles_user_id_fkey`;

-- AlterTable
ALTER TABLE `roles` DROP COLUMN `user_id`,
    MODIFY `type` VARCHAR(255) NOT NULL DEFAULT 'user';

-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Users_role_key` ON `Users`(`role`);

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_role_fkey` FOREIGN KEY (`role`) REFERENCES `Roles`(`type`) ON DELETE RESTRICT ON UPDATE CASCADE;
