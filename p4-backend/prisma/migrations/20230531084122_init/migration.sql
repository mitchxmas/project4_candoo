/*
  Warnings:

  - A unique constraint covering the columns `[service_id,name]` on the table `Seller_services` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[category_id,name]` on the table `Services` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Seller_services_service_id_name_idx` ON `seller_services`;

-- DropIndex
DROP INDEX `Services_category_id_name_idx` ON `services`;

-- CreateIndex
CREATE UNIQUE INDEX `Seller_services_service_id_name_key` ON `Seller_services`(`service_id`, `name`);

-- CreateIndex
CREATE UNIQUE INDEX `Services_category_id_name_key` ON `Services`(`category_id`, `name`);
