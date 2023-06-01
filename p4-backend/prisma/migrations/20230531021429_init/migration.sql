/*
  Warnings:

  - You are about to drop the column `user_address_id` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Users_user_address_id_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `user_address_id`;
