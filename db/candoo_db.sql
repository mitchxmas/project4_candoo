CREATE DATABASE  IF NOT EXISTS `candoo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `candoo`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: candoo
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('2b903523-826a-4916-8198-dfd522f31155','d2cf58b5cd2e4ca8d6f43b9abf465631f4bfd857928c4e6fbc48c5e23638ecde','2023-05-31 08:42:58.476','20230531084122_init',NULL,NULL,'2023-05-31 08:42:58.444',1),('366e96b2-7552-4965-9af2-b296a0983bc4','23d7c1679ce6566c7dae32621640cf430b6df725b620fc6ab7b473ae4cedcca4','2023-05-31 08:42:58.038','20230530145710_init',NULL,NULL,'2023-05-31 08:42:57.973',1),('457f92cf-f608-4d99-945d-060c9c17b850','521cd37e465a684f5168a6da92db7f90d1871024afdd0fc4608d90c8d7b87031','2023-05-31 08:42:57.933','20230530092950_init',NULL,NULL,'2023-05-31 08:42:57.662',1),('51fdd2c0-8276-4ef7-b7e6-4a9025aa0787','d7b8a0b86eb0448dd3cc9c18c180be420129ab0502b13114f2f3a999f42a8f2c','2023-05-31 08:42:58.186','20230531022318_init',NULL,NULL,'2023-05-31 08:42:58.159',1),('545eb402-2824-44ee-b159-85beaf854b81','c3c2d4a18b27a3947f7973780cda7909d7fbef32b9c1349eca930d523e0e7c9d','2023-05-31 08:42:58.159','20230531021429_init',NULL,NULL,'2023-05-31 08:42:58.132',1),('70759c13-5191-4613-8a58-e45d23c4f51b','1d11b066a4d49b90cd5b2adf13b5df003a7acf026789854990e2d1ae21592a75','2023-05-31 08:42:58.104','20230530150352_init',NULL,NULL,'2023-05-31 08:42:58.039',1),('91e89a08-cb8f-4f12-ac29-564976afefc4','a9043ae8616285d645fbea9dbe16ee2d357825c7c028737bf14ec355a091f5c1','2023-05-31 08:42:57.961','20230530143239_init',NULL,NULL,'2023-05-31 08:42:57.950',1),('9a81c9a5-1713-4b39-b7f3-4c6ecd3f634a','78c7ffeb8d2118fa28816803656be03b9c4e98cc7fb2aeafe434ef114bb2d970','2023-05-31 08:42:57.972','20230530143505_init',NULL,NULL,'2023-05-31 08:42:57.961',1),('a29ed77f-dab2-487c-9db8-7213a823c3e4','403498bfdbe3074c6f48c5869edfd5a4874ab3545af83f4fc00e6a7e5417fcbe','2023-05-31 08:42:57.941','20230530131614_init',NULL,NULL,'2023-05-31 08:42:57.934',1),('a8767a43-46b5-4a96-98a3-4802799d2a7a','705f837f01fa96fec0693ce6565d60068fd0dd62950ee95664171fdc60593050','2023-05-31 08:42:58.443','20230531083307_init',NULL,NULL,'2023-05-31 08:42:58.425',1),('b1085aa8-3ff9-4be3-946e-a1dd99350884','4d834cc2dd83a2f0a6d437ad23e93f27228b41bd63a12e294060fff526cc2636','2023-05-31 08:42:57.949','20230530141035_init',NULL,NULL,'2023-05-31 08:42:57.941',1),('bedd5a8f-556c-4448-b39e-96d251bea9bb','1d1923f0e1f82b7a61d282a679d66529ad30e6e1e21ccb94e50a7b782ab7fa48','2023-05-31 08:42:58.419','20230531054338_init',NULL,NULL,'2023-05-31 08:42:58.186',1),('d892cc37-b5fb-48e5-9509-ab7cdad62a52','7cf0ea81283422d833b0ebcd3ee5685cdaa09e93ffaf5991e08b536631471e18','2023-05-31 08:42:58.132','20230530151327_init',NULL,NULL,'2023-05-31 08:42:58.105',1),('f85f7f37-a24e-4968-a05e-a4704eaf4f21','0032f4278be5010fd1111ebf5d47a943ba2dad7d7300edfd5f62c25552e77a0b','2023-05-31 08:42:58.425','20230531063124_init',NULL,NULL,'2023-05-31 08:42:58.420',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_roles`
--

DROP TABLE IF EXISTS `auth_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_roles` (
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_roles`
--

LOCK TABLES `auth_roles` WRITE;
/*!40000 ALTER TABLE `auth_roles` DISABLE KEYS */;
INSERT INTO `auth_roles` VALUES ('admin'),('user');
/*!40000 ALTER TABLE `auth_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_users`
--

DROP TABLE IF EXISTS `auth_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_users` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`,`email`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_users`
--

LOCK TABLES `auth_users` WRITE;
/*!40000 ALTER TABLE `auth_users` DISABLE KEYS */;
INSERT INTO `auth_users` VALUES ('admin@admin.com','$2b$12$0LPUNF6q9qetYYmvVhs49ONgPtClB4OtzrxpszfZGyad9BneU6sPy',1,'admin'),('andy@man.com','$2b$12$lh3gRk0AehacdeAJoqcYM.6QT49Z3pHxtXV707Raj9HEUyY4SgOq2',2,'user'),('buyer@buyer.com','$2b$12$DlWtC1FgBS/kS10haqueku4qRlRS/0M5v0QgG1NHmjrizkwr.k9Zi',3,'user'),('seller@seller.com','$2b$12$oE9V2skr30POwA65V6lckuZZTO3IHZNCYKF2REDp2QZ5X5Wb0vtQG',4,'user'),('jane@gmail.com','$2b$12$oE9V2skr30POwA65V6lckuZZTO3IHZNCYKF2REDp2QZ5X5Wb0vtQG',42,'user'),('bob@gmail.com','$2b$12$JgMKHlGVUbvJxaQoWn5DzODmtsti33i5yVFs1bEZas6rBBfymy3Su',43,'user'),('newuser1@gmail.com','$2b$12$KEdMNMaSCEyTuHguJg4/1uAvYzZAsXwx69VawNX.a1ZcWx6d4cc0y',44,'user'),('newuser2@gmail.com','$2b$12$/G.7QDJ85Mc/E7tv92PZRO2yzgQbLpiMXzpALnIolPM1.Z1/HFX1.',45,'user'),('newuser5@gmail.com','$2b$12$6UubQHZTxxAuK4E1OXUnkueQuP99I09bU73PjuGqbXv6Ypdzvbvvm',49,'user');
/*!40000 ALTER TABLE `auth_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `buyer_payment_means`
--

DROP TABLE IF EXISTS `buyer_payment_means`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `buyer_payment_means` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `buyer_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `card_number` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `card_expiry` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `buyer_id` (`buyer_id`),
  CONSTRAINT `buyer_payment_means_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buyer_payment_means`
--

LOCK TABLES `buyer_payment_means` WRITE;
/*!40000 ALTER TABLE `buyer_payment_means` DISABLE KEYS */;
INSERT INTO `buyer_payment_means` VALUES (1,'Credit Card','MasterCard','f251b35d-0f6b-4edb-a1a5-f2c1911c266b','567899756574','07/25'),(2,'Credit Card','VISA','f251b35d-0f6b-4edb-a1a5-f2c1911c266b','9876757657612','02/28'),(3,'PayPal','PayPal','f251b35d-0f6b-4edb-a1a5-f2c1911c266b',NULL,NULL),(4,'Credit Card','Visa','7fd26227-1c33-4eb4-9783-48773260e5f5','768768768','05/23'),(5,'Paypal','','7fd26227-1c33-4eb4-9783-48773260e5f5','',''),(6,'Paypal','','7fd26227-1c33-4eb4-9783-48773260e5f5','',''),(7,'Credit Card','Mastercard','93e90fc8-6d1f-4b3b-9f2e-28b7bd5fd28a','87687686876','02/25'),(8,'Paypal','','93e90fc8-6d1f-4b3b-9f2e-28b7bd5fd28a','',''),(10,'Credit Card','Visa','93e90fc8-6d1f-4b3b-9f2e-28b7bd5fd28a','98798687823','05/27'),(14,'Credit Card','Mastercard','93e90fc8-6d1f-4b3b-9f2e-28b7bd5fd28a','76586876834','01/28'),(17,'NETS','','93e90fc8-6d1f-4b3b-9f2e-28b7bd5fd28a','',''),(20,'Paypal','','9289ce78-cbe4-4d0e-8f60-703fb06d093c','',''),(21,'Credit Card','Visa','9289ce78-cbe4-4d0e-8f60-703fb06d093c','56456465465','02/23'),(22,'Bitcoin','','93e90fc8-6d1f-4b3b-9f2e-28b7bd5fd28a','',''),(23,'','','93e90fc8-6d1f-4b3b-9f2e-28b7bd5fd28a','','');
/*!40000 ALTER TABLE `buyer_payment_means` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `seller_service_id` int NOT NULL,
  `price` decimal(20,5) NOT NULL,
  `order_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `seller_service_id` (`seller_service_id`),
  CONSTRAINT `cart_items_ibfk_1` FOREIGN KEY (`seller_service_id`) REFERENCES `seller_services` (`id`) ON DELETE RESTRICT,
  CONSTRAINT `cart_items_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
INSERT INTO `cart_items` VALUES (14,1,'2023-06-08 08:12:52.881',37,150.00000,11),(15,1,'2023-06-08 08:14:21.483',36,150.00000,11),(16,1,'2023-06-08 08:14:24.870',27,100.00000,11),(17,1,'2023-06-08 09:07:17.864',39,50.00000,11),(19,1,'2023-06-08 14:32:07.547',27,100.00000,11),(20,1,'2023-06-08 14:33:20.687',36,150.00000,11),(27,1,'2023-06-09 01:26:47.577',39,50.00000,19),(28,1,'2023-06-09 01:26:59.660',37,150.00000,19),(29,1,'2023-06-09 03:07:31.968',28,250.00000,11),(30,1,'2023-06-09 03:10:01.433',28,250.00000,19),(31,1,'2023-06-09 03:10:04.203',37,150.00000,19),(32,1,'2023-06-09 03:10:06.536',36,150.00000,19);
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Movers & Delivery','./images/moving-truck.png'),(2,'Renovations','./images/paint-roller.png'),(3,'Home repairs','./images/homerepairs.png'),(4,'Aircon Services','./images/air-conditioner.png'),(5,'Cleaning','./images/basket.png'),(7,'Electronic repairs','./images/washing-machine.png'),(8,'Beauty & Health','./images/beauty.png'),(10,'Events & party','./images/party-hat-icon.png'),(13,'Bicycles','./images/bikelogo2.png');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `seller_service_id` int NOT NULL,
  `order_id` int NOT NULL,
  `price` decimal(20,5) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `seller_service_id` (`seller_service_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE RESTRICT,
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`seller_service_id`) REFERENCES `seller_services` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `gst` decimal(20,5) NOT NULL,
  `total` decimal(20,5) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `buyer_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_paid` tinyint NOT NULL,
  `payment_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `buyer_id` (`buyer_id`),
  KEY `payment_id` (`payment_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT,
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (11,0.00000,0.00000,'2023-06-08 01:49:32.933','93e90fc8-6d1f-4b3b-9f2e-28b7bd5fd28a',0,NULL),(15,0.00000,0.00000,'2023-06-08 02:36:31.884','e79bb959-6a95-4e95-91db-4cbb7ca4607d',0,NULL),(16,0.00000,0.00000,'2023-06-08 10:50:33.660','9289ce78-cbe4-4d0e-8f60-703fb06d093c',0,NULL),(17,0.00000,0.00000,'2023-06-08 10:52:52.392','f251b35d-0f6b-4edb-a1a5-f2c1911c266b',0,NULL),(19,0.00000,0.00000,'2023-06-09 01:53:30.939','7fd26227-1c33-4eb4-9783-48773260e5f5',0,NULL),(20,0.00000,0.00000,'2023-06-09 03:09:04.159','0abe7047-9176-4254-be74-7edf34362642',0,NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `total` decimal(20,5) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `order_id` int NOT NULL,
  `buyer_payment_means_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `buyer_payment_means_id` (`buyer_payment_means_id`),
  CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE RESTRICT,
  CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`buyer_payment_means_id`) REFERENCES `buyer_payment_means` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seller_services`
--

DROP TABLE IF EXISTS `seller_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seller_services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `service_id` int NOT NULL,
  `seller_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(20,5) NOT NULL,
  `price_type` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Seller_services_service_id_name_key` (`service_id`,`name`),
  KEY `seller_services_seller_id_fkey` (`seller_id`),
  CONSTRAINT `seller_services_seller_id_fkey` FOREIGN KEY (`seller_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT,
  CONSTRAINT `Seller_services_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seller_services`
--

LOCK TABLES `seller_services` WRITE;
/*!40000 ALTER TABLE `seller_services` DISABLE KEYS */;
INSERT INTO `seller_services` VALUES (27,'DJ test','great DJ service',68,'7fd26227-1c33-4eb4-9783-48773260e5f5',100.00000,'per hour','./images/djpicture2.jpg'),(28,'Magic Arm Band','Great Rock & Indie band',71,'7fd26227-1c33-4eb4-9783-48773260e5f5',250.00000,'per hour','./images/liveband.jpg'),(36,'Corporate EMCEE','Wendy CHENG is the best emcee in town',72,'7fd26227-1c33-4eb4-9783-48773260e5f5',150.00000,'per hour','./images/emcee.jpg'),(37,'Face painting activity ','Jane is a great face painting artist, all kit included',69,'7fd26227-1c33-4eb4-9783-48773260e5f5',150.00000,'per hour','./images/facepainting.jpg'),(38,'Interior decoration','I provide interior decoration and painting services',45,'7fd26227-1c33-4eb4-9783-48773260e5f5',150.00000,'per hour','./images/interiordeco.jpg'),(39,'Speedy Courier','Best & fastest courier service in town, CBD area',41,'9d233e81-62ca-476c-82d6-783501046d9f',50.00000,'per day','./images/speedycourrier.jpg'),(40,'Singapore House moving ','Fast and reliable moving service in Singapore',39,'9289ce78-cbe4-4d0e-8f60-703fb06d093c',2000.00000,'',NULL),(41,'Office movers','Contact us for a special quote for office relocation',40,'9289ce78-cbe4-4d0e-8f60-703fb06d093c',3000.00000,'',NULL),(42,'Furniture moving door-to-door','We can move, pick-up, deliver furniture anywhere in Singapore. Flat pricing',38,'9289ce78-cbe4-4d0e-8f60-703fb06d093c',150.00000,'',NULL);
/*!40000 ALTER TABLE `seller_services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` int NOT NULL,
  `img` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Services_category_id_name_key` (`category_id`,`name`),
  CONSTRAINT `Services_category_id_key` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (38,'Furnitures Movers','Furnitures Movers',1,NULL),(39,'House Movers','House Movers',1,NULL),(40,'Office Movers','Office Movers',1,NULL),(41,'Courier','Courier',1,NULL),(42,'Removal & Disposal Services','Removal & Disposal Services',1,NULL),(43,'Home renovation','Home renovation',2,NULL),(44,'Bathroom renovation','Bathroom renovation',2,NULL),(45,'Painting','Painting',2,NULL),(46,'Lighting & Electrical','Lighting & Electrical',2,NULL),(47,'Flooring','Flooring',2,NULL),(48,'Curtains & blinds','Curtains & blinds',2,NULL),(49,'Plumbing services','Plumbing services',3,NULL),(50,'Electrician services','Electrician services',3,NULL),(51,'Locksmith services','Locksmith services',3,NULL),(52,'Handyman & drilling services','Handyman & drilling services',3,NULL),(53,'General servicing','General servicing',4,NULL),(54,'Chemical cleaning','Chemical cleaning',4,NULL),(55,'Aircon repair','Aircon repair',4,NULL),(56,'Aircon Installation','Aircon Installation',4,NULL),(57,'Home cleaning','Home cleaning',5,NULL),(58,'Office/Commercial cleaning','Office/Commercial cleaning',5,NULL),(59,'Extreme Cleaning','Extreme Cleaning',5,NULL),(60,'Carpet cleaning','Carpet cleaning',5,NULL),(61,'Mattress cleaning','Mattress cleaning',5,NULL),(62,'Pest Control Services','Pest Control Services',5,NULL),(63,'Small electronics repair','Small electronics repairs',7,NULL),(64,'Domestic appliances repair','Domestic appliances repair',7,NULL),(66,'Party planning','Party planning',10,NULL),(67,'Wedding planning','Wedding planning',10,NULL),(68,'DJ','DJ',10,NULL),(69,'Kids face painting','Kids face painting',10,NULL),(70,'Kids Birthday Clown','Kids Birthday Clown',10,NULL),(71,'Singer/Band','Singer/Band',10,NULL),(72,'Emcee','Master of ceremony',10,NULL);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  `mobile` int NOT NULL,
  `postcode` int NOT NULL,
  `is_seller` tinyint(1) NOT NULL,
  `address_line1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_line2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `auth_user_id` int NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_id_UNIQUE` (`auth_user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`auth_user_id`) REFERENCES `auth_users` (`id`) ON DELETE RESTRICT,
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`email`) REFERENCES `auth_users` (`email`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('0abe7047-9176-4254-be74-7edf34362642','iyiuyiuyi','yiuyiuyi','uiyiuyi','2023-06-09 03:09:04.159','2023-06-09 03:09:04.159',45675643,145789,0,'kyiyiuy','lkjhyiyiy','Singapore','Singapore',49,'newuser5@gmail.com','user'),('60efa079-ec11-4682-909d-f1c9a56866a3','seller','seller','seller','2023-05-31 12:38:47.039','2023-05-31 12:42:48.906',22222222,222222,1,'seller seller seller','seller seller seller','singapore','singapore',4,'seller@seller.com','user'),('7fd26227-1c33-4eb4-9783-48773260e5f5','adminUserName','Ad','MINH','2023-05-31 12:43:25.417','2023-06-08 10:56:51.078',85107758,123458,1,'admin admin admin12345','admin admin','Singapore','Singapore',1,'admin@admin.com','admin'),('9289ce78-cbe4-4d0e-8f60-703fb06d093c','BobDoe','Bob','DOE','2023-06-07 05:15:46.047','2023-06-10 16:26:16.332',34567832,978599,1,'1, funky street','12/E Happy Estate Block D','Singapore','Singapore',43,'bob@gmail.com','user'),('93e90fc8-6d1f-4b3b-9f2e-28b7bd5fd28a','JaneDoe2','Jane','DOE','2023-06-07 02:36:42.710','2023-06-09 11:07:10.308',23345688,123956,0,'10, broad street','Condo of the rising sun','Singapore','Singapore',42,'jane@gmail.com','user'),('9d233e81-62ca-476c-82d6-783501046d9f','andyman','andy','MAN','2023-05-31 14:33:28.232','2023-06-08 10:56:51.078',85107758,257749,1,'Andy Mansion','Hand\'s Down Road','singapore','singapore',2,'andy@man.com','user'),('e79bb959-6a95-4e95-91db-4cbb7ca4607d','new user 2','new user 2','USER NEW 2','2023-06-08 02:36:31.884','2023-06-08 02:36:31.884',12346576,987567,0,'2, new user','2, new user street','singapore','singapore',45,'newuser2@gmail.com','user'),('f251b35d-0f6b-4edb-a1a5-f2c1911c266b','buyer','buyer','buyer','2023-05-31 12:39:23.756','2023-05-31 12:39:23.756',22222222,222222,0,'address1','address2','singapore','singapore',3,'buyer@buyer.com','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-10 17:58:46
