/*
  Warnings:

  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `Users_role_fkey`;

-- AlterTable
ALTER TABLE `users` MODIFY `role` VARCHAR(255) NOT NULL DEFAULT 'user';

-- DropTable
DROP TABLE `roles`;
