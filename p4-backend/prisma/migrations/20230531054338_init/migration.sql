/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `buyer_payment_means` DROP FOREIGN KEY `Buyer_payment_means_buyer_id_fkey`;

-- DropForeignKey
ALTER TABLE `cart_items` DROP FOREIGN KEY `Cart_items_buyer_id_fkey`;

-- DropForeignKey
ALTER TABLE `orders` DROP FOREIGN KEY `Orders_buyer_id_fkey`;

-- DropForeignKey
ALTER TABLE `seller_services` DROP FOREIGN KEY `Seller_services_seller_id_fkey`;

-- DropIndex
DROP INDEX `Users_role_key` ON `users`;

-- AlterTable
ALTER TABLE `buyer_payment_means` MODIFY `buyer_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `cart_items` MODIFY `buyer_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `orders` MODIFY `buyer_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `seller_services` MODIFY `seller_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Buyer_payment_means` ADD CONSTRAINT `Buyer_payment_means_buyer_id_fkey` FOREIGN KEY (`buyer_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Seller_services` ADD CONSTRAINT `Seller_services_seller_id_fkey` FOREIGN KEY (`seller_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart_items` ADD CONSTRAINT `Cart_items_buyer_id_fkey` FOREIGN KEY (`buyer_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_buyer_id_fkey` FOREIGN KEY (`buyer_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
