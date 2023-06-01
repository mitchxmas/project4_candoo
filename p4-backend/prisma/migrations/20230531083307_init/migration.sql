-- CreateIndex
CREATE INDEX `Seller_services_service_id_name_idx` ON `Seller_services`(`service_id`, `name`);

-- CreateIndex
CREATE INDEX `Services_category_id_name_idx` ON `Services`(`category_id`, `name`);
