-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: localhost    Database: tecdb
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `StudentApi_studentloginmodel`
--

DROP TABLE IF EXISTS `StudentApi_studentloginmodel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `StudentApi_studentloginmodel` (
  `studentsmodel_ptr_id` bigint NOT NULL,
  `userid` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`studentsmodel_ptr_id`),
  UNIQUE KEY `userid` (`userid`),
  CONSTRAINT `StudentApi_studentlo_studentsmodel_ptr_id_07c5b40f_fk_StudentAp` FOREIGN KEY (`studentsmodel_ptr_id`) REFERENCES `StudentApi_studentsmodel` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudentApi_studentloginmodel`
--

LOCK TABLES `StudentApi_studentloginmodel` WRITE;
/*!40000 ALTER TABLE `StudentApi_studentloginmodel` DISABLE KEYS */;
INSERT INTO `StudentApi_studentloginmodel` VALUES (12,'Arun@@2019','Arunsmiley@@2022');
/*!40000 ALTER TABLE `StudentApi_studentloginmodel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudentApi_studentsmodel`
--

DROP TABLE IF EXISTS `StudentApi_studentsmodel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `StudentApi_studentsmodel` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `profile` varchar(100) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `dob` varchar(20) NOT NULL,
  `gender` smallint unsigned NOT NULL,
  `bloodgroup` smallint unsigned NOT NULL,
  `nationality` varchar(10) DEFAULT NULL,
  `religion` smallint unsigned NOT NULL,
  `community` smallint unsigned NOT NULL,
  `caste` int unsigned NOT NULL,
  `aadhar` varchar(12) NOT NULL,
  `firstgraduate` varchar(10) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `emailid` varchar(254) NOT NULL,
  `country` smallint unsigned NOT NULL,
  `state` smallint unsigned NOT NULL,
  `district` smallint unsigned NOT NULL,
  `location_type` varchar(5) NOT NULL,
  `taluk` smallint unsigned NOT NULL,
  `place` varchar(50) NOT NULL,
  `address` longtext NOT NULL,
  `fathersname` varchar(100) NOT NULL,
  `fathersoccupation` varchar(100) NOT NULL,
  `mothersname` varchar(100) NOT NULL,
  `mothersoccupation` varchar(100) NOT NULL,
  `annual_income` varchar(50) NOT NULL,
  `parents_mobile_number` varchar(15) NOT NULL,
  `account_number` varchar(50) DEFAULT NULL,
  `ifsc` varchar(50) DEFAULT NULL,
  `pincode` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `aadhar` (`aadhar`),
  UNIQUE KEY `mobile` (`mobile`),
  UNIQUE KEY `StudentApi_studentsmodel_emailid_3867dff0_uniq` (`emailid`),
  CONSTRAINT `StudentApi_studentsmodel_bloodgroup_d4908e4c_check` CHECK ((`bloodgroup` >= 0)),
  CONSTRAINT `StudentApi_studentsmodel_caste_a9300c2b_check` CHECK ((`caste` >= 0)),
  CONSTRAINT `StudentApi_studentsmodel_community_e3860f74_check` CHECK ((`community` >= 0)),
  CONSTRAINT `StudentApi_studentsmodel_country_4a9d6d2e_check` CHECK ((`country` >= 0)),
  CONSTRAINT `StudentApi_studentsmodel_district_616cd689_check` CHECK ((`district` >= 0)),
  CONSTRAINT `StudentApi_studentsmodel_gender_c20bfacc_check` CHECK ((`gender` >= 0)),
  CONSTRAINT `StudentApi_studentsmodel_religion_add0b1c7_check` CHECK ((`religion` >= 0)),
  CONSTRAINT `StudentApi_studentsmodel_state_80454943_check` CHECK ((`state` >= 0)),
  CONSTRAINT `StudentApi_studentsmodel_taluk_24b32e40_check` CHECK ((`taluk` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudentApi_studentsmodel`
--

LOCK TABLES `StudentApi_studentsmodel` WRITE;
/*!40000 ALTER TABLE `StudentApi_studentsmodel` DISABLE KEYS */;
INSERT INTO `StudentApi_studentsmodel` VALUES (12,'students/TEC-LOGO.jpeg','programmer','28/09/2005',1,17,NULL,3,2,6,'657658876567','yes','8667706334','officialarun2019@gmail.com',1,31,23,'2',170,'nemili','fuck the adress','selvam','farmer','sasikala','housewife','64000','9943824999','576565675','tmbl0000295','6876876');
/*!40000 ALTER TABLE `StudentApi_studentsmodel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add students model',7,'add_studentsmodel'),(26,'Can change students model',7,'change_studentsmodel'),(27,'Can delete students model',7,'delete_studentsmodel'),(28,'Can view students model',7,'view_studentsmodel'),(29,'Can add student login model',8,'add_studentloginmodel'),(30,'Can change student login model',8,'change_studentloginmodel'),(31,'Can delete student login model',8,'delete_studentloginmodel'),(32,'Can view student login model',8,'view_studentloginmodel'),(33,'Can add gender lookup',10,'add_genderlookup'),(34,'Can change gender lookup',10,'change_genderlookup'),(35,'Can delete gender lookup',10,'delete_genderlookup'),(36,'Can view gender lookup',10,'view_genderlookup'),(37,'Can add gender',11,'add_gender'),(38,'Can change gender',11,'change_gender'),(39,'Can delete gender',11,'delete_gender'),(40,'Can view gender',11,'view_gender'),(41,'Can add bloodgroup',9,'add_bloodgroup'),(42,'Can change bloodgroup',9,'change_bloodgroup'),(43,'Can delete bloodgroup',9,'delete_bloodgroup'),(44,'Can view bloodgroup',9,'view_bloodgroup'),(45,'Can add community',12,'add_community'),(46,'Can change community',12,'change_community'),(47,'Can delete community',12,'delete_community'),(48,'Can view community',12,'view_community'),(49,'Can add religion',13,'add_religion'),(50,'Can change religion',13,'change_religion'),(51,'Can delete religion',13,'delete_religion'),(52,'Can view religion',13,'view_religion'),(53,'Can add caste',14,'add_caste'),(54,'Can change caste',14,'change_caste'),(55,'Can delete caste',14,'delete_caste'),(56,'Can view caste',14,'view_caste'),(57,'Can add country',15,'add_country'),(58,'Can change country',15,'change_country'),(59,'Can delete country',15,'delete_country'),(60,'Can view country',15,'view_country'),(61,'Can add state',16,'add_state'),(62,'Can change state',16,'change_state'),(63,'Can delete state',16,'delete_state'),(64,'Can view state',16,'view_state'),(65,'Can add district',17,'add_district'),(66,'Can change district',17,'change_district'),(67,'Can delete district',17,'delete_district'),(68,'Can view district',17,'view_district'),(69,'Can add taluk',18,'add_taluk'),(70,'Can change taluk',18,'change_taluk'),(71,'Can delete taluk',18,'delete_taluk'),(72,'Can view taluk',18,'view_taluk'),(73,'Can add location_type',19,'add_location_type'),(74,'Can change location_type',19,'change_location_type'),(75,'Can delete location_type',19,'delete_location_type'),(76,'Can view location_type',19,'view_location_type');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$600000$EuQFdnxCNjkuSHmEhlLvkO$PEBnTlK2KUbs4/n7qLpb24BwD8BNrMzmk6tMYg1Fmoc=','2023-10-08 02:58:34.420188',1,'arun','','','pattusputtus@gmail.com',1,1,'2023-10-08 02:57:44.967905');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2023-10-08 03:04:33.448418','1','arun',1,'[{\"added\": {}}]',7,1),(2,'2023-10-12 08:16:36.502015','1','bloodgruop',1,'[{\"added\": {}}]',9,1),(3,'2023-10-12 08:16:44.049278','2','bloodgruop',1,'[{\"added\": {}}]',9,1),(4,'2023-10-12 08:16:49.949834','3','bloodgruop',1,'[{\"added\": {}}]',9,1),(5,'2023-10-12 08:16:56.086646','4','bloodgruop',1,'[{\"added\": {}}]',9,1),(6,'2023-10-12 08:24:45.045549','4','A1+',3,'',9,1),(7,'2023-10-12 08:24:45.226899','3','A1-',3,'',9,1),(8,'2023-10-12 08:24:45.503658','2','A+',3,'',9,1),(9,'2023-10-12 08:24:45.794915','1','A-',3,'',9,1),(10,'2023-10-12 08:25:13.618969','5','A-',1,'[{\"added\": {}}]',9,1),(11,'2023-10-19 16:16:29.833920','4','arun',3,'',7,1),(12,'2023-10-19 16:16:30.520931','3','a',3,'',7,1),(13,'2023-10-19 16:16:30.976871','2','praveen',3,'',7,1),(14,'2023-10-19 16:16:31.316945','1','arun',3,'',7,1),(15,'2023-10-20 09:37:27.212724','5','arun',2,'[{\"changed\": {\"fields\": [\"Profile\", \"Nationality\"]}}]',7,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(9,'lookupApi','bloodgroup'),(14,'lookupapi','caste'),(12,'lookupapi','community'),(15,'lookupapi','country'),(17,'lookupapi','district'),(11,'lookupapi','gender'),(10,'lookupApi','genderlookup'),(19,'lookupapi','location_type'),(13,'lookupapi','religion'),(16,'lookupapi','state'),(18,'lookupapi','taluk'),(6,'sessions','session'),(8,'StudentApi','studentloginmodel'),(7,'StudentApi','studentsmodel');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'StudentApi','0001_initial','2023-10-08 02:51:13.423373'),(2,'contenttypes','0001_initial','2023-10-08 02:51:18.074899'),(3,'auth','0001_initial','2023-10-08 02:52:06.108955'),(4,'admin','0001_initial','2023-10-08 02:52:22.799741'),(5,'admin','0002_logentry_remove_auto_add','2023-10-08 02:52:23.109907'),(6,'admin','0003_logentry_add_action_flag_choices','2023-10-08 02:52:23.476168'),(7,'contenttypes','0002_remove_content_type_name','2023-10-08 02:52:29.779477'),(8,'auth','0002_alter_permission_name_max_length','2023-10-08 02:52:34.142599'),(9,'auth','0003_alter_user_email_max_length','2023-10-08 02:52:34.983591'),(10,'auth','0004_alter_user_username_opts','2023-10-08 02:52:35.193147'),(11,'auth','0005_alter_user_last_login_null','2023-10-08 02:52:39.085629'),(12,'auth','0006_require_contenttypes_0002','2023-10-08 02:52:39.410616'),(13,'auth','0007_alter_validators_add_error_messages','2023-10-08 02:52:39.671390'),(14,'auth','0008_alter_user_username_max_length','2023-10-08 02:52:43.991039'),(15,'auth','0009_alter_user_last_name_max_length','2023-10-08 02:52:48.665651'),(16,'auth','0010_alter_group_name_max_length','2023-10-08 02:52:50.188862'),(17,'auth','0011_update_proxy_permissions','2023-10-08 02:52:50.703619'),(18,'auth','0012_alter_user_first_name_max_length','2023-10-08 02:52:57.958996'),(19,'sessions','0001_initial','2023-10-08 02:53:00.143926'),(20,'lookupApi','0001_initial','2023-10-12 08:14:25.880498'),(21,'lookupapi','0001_initial','2023-10-13 11:58:09.512767'),(22,'lookupapi','0002_bloodgroup_community_religion','2023-10-13 12:11:48.656365'),(23,'lookupapi','0003_alter_religion_value','2023-10-13 12:41:11.614595'),(24,'lookupapi','0004_alter_community_value','2023-10-13 12:49:04.063308'),(25,'lookupapi','0005_caste','2023-10-13 14:03:44.789426'),(26,'lookupapi','0006_country_state','2023-10-13 15:26:14.874718'),(27,'lookupapi','0007_alter_country_value_alter_state_value','2023-10-13 15:34:29.903926'),(28,'lookupapi','0008_district','2023-10-13 15:42:33.373189'),(29,'lookupapi','0009_taluk','2023-10-13 15:46:00.607525'),(30,'StudentApi','0002_alter_studentsmodel_profile','2023-10-16 19:18:17.059677'),(31,'StudentApi','0003_alter_studentsmodel_bloodgroup_and_more','2023-10-19 16:18:49.456457'),(32,'StudentApi','0004_alter_studentsmodel_dob','2023-11-01 14:16:03.414229'),(33,'lookupapi','0010_location_type','2023-11-01 15:45:25.927960'),(34,'StudentApi','0005_studentsmodel_pincode','2023-11-01 16:05:06.276857'),(35,'StudentApi','0006_alter_studentsmodel_dob','2023-11-01 16:26:54.020507');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('nan54xkfbpcu1540lg9f397zqseyxwb1','.eJxVjDEOgzAMRe-SuYpiEkPSsTtnQCa2C20VJAJT1btXSAzt-t97_20G2rdp2Kusw8zmasBcfreR8lPKAfhB5b7YvJRtnUd7KPak1fYLy-t2un8HE9XpqH2U4EWQonptuZOMyALSOXUJY0RJzoeAAMAKnrEhaXzSVpXSGM3nC_CIOBs:1qpK02:EDsfkZT1JuA-iyHGj0DbTWncP5kZXlsdbRMCRqoDZTQ','2023-10-22 02:58:34.694408');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lookupapi_bloodgroup`
--

DROP TABLE IF EXISTS `lookupapi_bloodgroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lookupapi_bloodgroup` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `value` varchar(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lookupapi_bloodgroup`
--

LOCK TABLES `lookupapi_bloodgroup` WRITE;
/*!40000 ALTER TABLE `lookupapi_bloodgroup` DISABLE KEYS */;
INSERT INTO `lookupapi_bloodgroup` VALUES (1,'A-'),(2,'A+'),(3,'A1-'),(4,'A1+'),(5,'A1B-'),(6,'A1B+'),(7,'A2-'),(8,'A2+'),(9,'A2B-'),(10,'A2B+'),(11,'AB-'),(12,'AB+'),(13,'B-'),(14,'B+'),(15,'B1+'),(16,'O-'),(17,'O+');
/*!40000 ALTER TABLE `lookupapi_bloodgroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lookupapi_caste`
--

DROP TABLE IF EXISTS `lookupapi_caste`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lookupapi_caste` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `value` varchar(1000) NOT NULL,
  `communityId` smallint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1064 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lookupapi_caste`
--

LOCK TABLES `lookupapi_caste` WRITE;
/*!40000 ALTER TABLE `lookupapi_caste` DISABLE KEYS */;
INSERT INTO `lookupapi_caste` VALUES (1,'NOT APPLICABLE',1),(2,'Pattanavar converts to christianity',2),(3,'Sembadavar converts to christianity',2),(4,'Kulala',2),(5,'Kuyavar',2),(6,'Vanniyar',2),(7,'Vanniya',2),(8,'Vannia Gounder',2),(9,'Padayachi',2),(10,'Palli',2),(11,'Agnikula Kshatriya',2),(12,'Gounder',2),(13,'Kander',2),(14,'Sathani',2),(15,'Chattadi',2),(16,'Chattada Srivaishnava',2),(17,'Rajakambalam',2),(18,'Gollavar',2),(19,'Sillavar',2),(20,'Thockalavar',2),(21,'ThozhuvaNaicker',2),(22,'Erragollar',2),(23,'Valaiyar',2),(24,'Agasa',2),(25,'Madivala',2),(26,'Ekali',2),(27,'Veluthadar',2),(28,'Rajaka',2),(29,'Paravar converts to christianity',2),(30,'Mukayar converts to christianity',2),(31,'Boyar',2),(32,'Oddar',2),(33,'Dasari',2),(34,'Dommara',2),(35,'Ambalakarar',2),(36,'Andipandaram',2),(37,'Arayar',2),(38,'Siviar',2),(39,'Bhatraju',2),(40,'Isaivellalar',2),(41,'Jambuvanodai',2),(42,'Jangam',2),(43,'Jogi',2),(44,'Kongu Chettiar',2),(45,'Parvatharajakulam converts to christianity',2),(46,'Rajakula',2),(47,'Mukkuvar converts to christianity',2),(48,'Koracha',2),(49,'Kunnuvar Mannadi',2),(50,'Kurumba',2),(51,'Kurumba Gounder',2),(52,'Kuruhini Chetty',2),(53,'Latin Catholic Christian Vannar',2),(54,'Mangala',2),(55,'Maruthuvar',2),(56,'Navithar',2),(57,'Pronopakari',2),(58,'Velakatalanair',2),(59,'Velakattalavar',2),(60,'Mond Golla',2),(61,'Moundadan Chetty',2),(62,'Mahendra',2),(63,'Medara',2),(64,'Mutlakampatti',2),(65,'Narikoravar (Kurivikars)',2),(66,'Nokkar',2),(67,'Panisaivan',2),(68,'Panisivan',2),(69,'Meenavar converts to christianity',2),(70,'Mukayar',2),(71,'Mukkuvar',2),(72,'Punnan Vettuva Gounder',2),(73,'Pannayar',2),(74,'Sozhia Chetty',2),(75,'Telugupatti Chetty',2),(76,'Thondaman',2),(77,'Thoraiyar (Nilgris)',2),(78,'Thoraiyar (Plains)',2),(79,'Vettaikarar',2),(80,'Vettuva Gounder',2),(81,'Yogeeswarar',2),(82,'Eravallar',2),(83,'Paravar',2),(84,'Bestha',2),(85,'Transgender or Eunuch (Thirunangai or Aravani)',2),(86,'Vanniakula Kshatriya',2),(87,'Meenavar',2),(88,'Pattanavar',2),(89,'Parvatharajakulam',2),(90,'Sembadavar',2),(91,'Sathatha Srivaishnava',2),(92,'Thottia Naicker',2),(93,'Vannar (Salavai Thozhilalar)',2),(94,'Kulala',2),(95,'Valaiyar',2),(96,'NOT APPLICABLE',2),(97,'Maravar',2),(98,'Adi Andhra',6),(99,'Arunthathiyar',6),(100,'Chakkiliyan',6),(101,'Madiga',6),(102,'Pagadai',6),(103,'Thoti',6),(104,'Madari',6),(105,'NOT APPLICABLE',6),(106,'Paraiyan',7),(107,'Madari',7),(108,'Sidhannar',7),(109,'Valluvan',7),(110,'Pulayan',7),(111,'Adi Dravida',7),(112,'Adi Karnataka',7),(113,'Ajila',7),(114,'Ayyanavar',7),(115,'Baira',7),(116,'Bakuda',7),(117,'Bellara',7),(118,'Bharatar',7),(119,'Chalavadi',7),(120,'Chamar',7),(121,'Muchi',7),(122,'Chandala',7),(123,'Cheruman',7),(124,'Dom',7),(125,'Dombara',7),(126,'Paidi',7),(127,'Pano',7),(128,'Domban',7),(129,'Godda',7),(130,'Gosangi',7),(131,'Holeya',7),(132,'Jaggali',7),(133,'Jambuvulu',7),(134,'Kadaiyan',7),(135,'Kakkalan',7),(136,'Kalladi',7),(137,'Kanakkan',7),(138,'Padanna',7),(139,'Karimpalan',7),(140,'Kavara',7),(141,'Koliyan',7),(142,'Koosa',7),(143,'Koodan',7),(144,'Kootan',7),(145,'Kudumban',7),(146,'Kuravan',7),(147,'Maila',7),(148,'Mala',7),(149,'Mannan',7),(150,'Mavilan',7),(151,'Moger',7),(152,'Mundala',7),(153,'Nalakeyava',7),(154,'Nayadi',7),(155,'Padannan',7),(156,'Pallan',7),(157,'Pulluvan',7),(158,'Pambada',7),(159,'Panan',7),(160,'Panchama',7),(161,'Pannadi',7),(162,'Panniandi',7),(163,'Sambavar',7),(164,'Samagara',7),(165,'Parayan',7),(166,'Puthirai Vannan',7),(167,'Raneyar',7),(168,'Samban',7),(169,'Sapari',7),(170,'Semman',7),(171,'Thandan',7),(172,'Tiruvalluvar',7),(173,'Vallon',7),(174,'Vannan',7),(175,'Vathiriyan',7),(176,'Velan',7),(177,'Vetan',7),(178,'Vettiyan',7),(179,'Vettuvan',7),(180,'Bandi',7),(181,'Godagali',7),(182,'Paravan',7),(183,'Pathiyan',7),(184,'Cheramar',7),(185,'NOT APPLICABLE',7),(186,'Devendrakula Velalar',7),(187,'Adiyan',3),(188,'Aranadan',3),(189,'Eravallan',3),(190,'Irular',3),(191,'Kadar',3),(192,'Kammara',3),(193,'Kanikaran',3),(194,'Kanikkar',3),(195,'Kaniyan',3),(196,'Kanyan',3),(197,'Kattunayakan',3),(198,'Kochu Velan',3),(199,'Konda Kapus',3),(200,'Kondareddis',3),(201,'Koraga',3),(202,'Kota',3),(203,'Kudiya',3),(204,'Melakudi',3),(205,'Malai Vedan',3),(206,'Palliyar',3),(207,'Malakkuravan',3),(208,'Malasar',3),(209,'Paniyan',3),(210,'Kurichchan',3),(211,'Kurumbas',3),(212,'Kurumans',3),(213,'Maha Malasar',3),(214,'Malai Arayan',3),(215,'Malai Pandaram',3),(216,'Malayali',3),(217,'Malayekandi',3),(218,'Mannan',3),(219,'Mudugar',3),(220,'Muduvan',3),(221,'Muthuvan',3),(222,'Palleyan',3),(223,'Palliyan',3),(224,'Sholaga',3),(225,'Toda',3),(226,'Uraly',3),(227,'NOT APPLICABLE',3),(228,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Arayar)',4),(229,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Bestha)',4),(230,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Bhatraju)',4),(231,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Boyar)',4),(232,'Gavara',4),(233,'Christian Shanar',4),(234,'Converts to Christianity from Scheduled Castes (Sidhannar)',4),(235,'Kunchidigar',4),(236,'Converts to Christianity from Scheduled Castes (Chalavadi)',4),(237,'Muthiriyar',4),(238,'Servai',4),(239,'Nulayar',4),(240,'Aryavathi',4),(241,'Badagar',4),(242,'Billava',4),(243,'Bondil',4),(244,'Oddars',4),(245,'Kaloddars',4),(246,'Chakkala',4),(247,'Chavalakarar',4),(248,'Agamudayar',4),(249,'Thozhu',4),(250,'Thuluva Vellala',4),(251,'Muthuraja',4),(252,'Agaram Vellan Chettiar',4),(253,'Alavar',4),(254,'Alwar',4),(255,'Azhavar',4),(256,'Archakarai Vellala',4),(257,'Ayira Vaisyar',4),(258,'Pedda Boyar',4),(259,'Nellorepet Oddars',4),(260,'Sooramari Oddars',4),(261,'Chowdry',4),(262,'C.S.I formerly S.I.U.C',4),(263,'Donga Dasaris',4),(264,'Devangar',4),(265,'Sedar',4),(266,'Enadi',4),(267,'Ezhavathy',4),(268,'Ezhuthachar',4),(269,'Ezhuva',4),(270,'Gangavar',4),(271,'Gavarai',4),(272,'Vadugar',4),(273,'Vaduvar',4),(274,'Gounder',4),(275,'Hegde',4),(276,'Idiga',4),(277,'Ezhuvar',4),(278,'Illathar',4),(279,'Illathu Pillaimar',4),(280,'Illuvar',4),(281,'Jhetty',4),(282,'Jogis',4),(283,'Kabbera',4),(284,'Kaikolar',4),(285,'Sengunthar',4),(286,'Kaladi',4),(287,'Kalari Panicker',4),(288,'Kalingi',4),(289,'Kallar',4),(290,'Easanattu Kallar',4),(291,'Gandarva Kottai Kallars',4),(292,'Kootappal Kallars',4),(293,'Piramalai Kallars',4),(294,'Periyasooriyur Kallars',4),(295,'Kallar Kula Thondaman',4),(296,'Kambar',4),(297,'Kani',4),(298,'Kanisu',4),(299,'Kaniyar Panicker',4),(300,'Kaniyala Vellalar',4),(301,'Dasapalanjika',4),(302,'Kannada Saineegar',4),(303,'Kannadiyar',4),(304,'Kannadiya Naidu',4),(305,'Karpoora Chettiar',4),(306,'Kasukkara Chettiar',4),(307,'Katesar',4),(308,'Pattamkatti',4),(309,'Kavuthiyar',4),(310,'Kerala Mudali',4),(311,'Kharvi',4),(312,'Khatri',4),(313,'Kongu Vaishnava',4),(314,'Koppala Velama',4),(315,'Koteyar',4),(316,'Krishnavaka',4),(317,'Kudikara Vellalar',4),(318,'Kudumbi',4),(319,'Kuga Vellalar',4),(320,'Latin Catholics',4),(321,'Lambadi',4),(322,'Malayar',4),(323,'Male',4),(324,'Maravars',4),(325,'Appanad Kondayam Kottai Maravar',4),(326,'Karumaravars',4),(327,'Sembanad Maravars',4),(328,'Moondrumandai Enbathunalu (84) Ur. Sozhia Vellalar',4),(329,'Mooppan',4),(330,'Mutharaiyar',4),(331,'Muttiriyar',4),(332,'Christian Gramani',4),(333,'Christian Nadar',4),(334,'Nagaram',4),(335,'Naikkar',4),(336,'Nanjil Mudali',4),(337,'Odar',4),(338,'Odiya',4),(339,'Oottruvalanattu Vellalar',4),(340,'O.P.S. Vellalar',4),(341,'Ovachar',4),(342,'Paiyur Kotta Vellalar',4),(343,'Pamulu',4),(344,'Pandiya Vellalar',4),(345,'Kathikarar',4),(346,'Pannirandam Chettiar',4),(347,'Uthama Chettiar',4),(348,'Perumkollar',4),(349,'Podikara Vellalar',4),(350,'Pooluva Gounder',4),(351,'Poraya',4),(352,'Pulavar',4),(353,'Pooluvar',4),(354,'Pulluvar',4),(355,'Pusala',4),(356,'Salivagana',4),(357,'Adhaviyar',4),(358,'Padmasaliyar',4),(359,'Pattariyar',4),(360,'Pattusaliyar',4),(361,'Saliyar',4),(362,'Savalakkarar',4),(363,'Illaivaniar',4),(364,'Senaikudiyar',4),(365,'Senaithalaivar',4),(366,'Serakula Vellalar',4),(367,'Srisayar',4),(368,'Sundaram Chetty',4),(369,'Thogatta Veerakshatriya',4),(370,'Tholkollar',4),(371,'Tholuva Naicker',4),(372,'Vetalakara Naicker',4),(373,'Thoraiyar',4),(374,'Thoriyar',4),(375,'Ukkirakula Kshatriya Naicker',4),(376,'Sagara',4),(377,'Uppara',4),(378,'Uppillia',4),(379,'Urali Gounder',4),(380,'Oorudaya Gounder',4),(381,'Orudaya Gounder',4),(382,'Urikkara Nayakkar',4),(383,'Virakodi Vellala',4),(384,'Vallambar',4),(385,'Vallanattu Chettiar',4),(386,'Valmiki',4),(387,'Veerasaiva',4),(388,'Velar',4),(389,'Vellan Chettiar',4),(390,'Veluthodathu Nair',4),(391,'Wynad Chetty',4),(392,'Yavana',4),(393,'Yerukula',4),(394,'Panar',4),(395,'Vedar',4),(396,'Veduvar',4),(397,'Kavathi',4),(398,'Sakkaravar',4),(399,'Orphans and destitute children who have lost their parents before reaching the age of ten and are destitutes, and who have nobody else to take care of them either by law or custom and also who are admitted into any of the schools or orphanages run by the',4),(400,'Converts to Christianity from Scheduled Castes (Muchi)',4),(401,'Converts to Christianity from Scheduled Castes (Kakkalan)',4),(402,'Converts to Christianity from Scheduled Castes (Mundala)',4),(403,'Converts to Christianity from Scheduled Castes (Thandan)',4),(404,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Attur Melnad Koravars)',4),(405,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Appanad Kondayam Kottai Maravar)',4),(406,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Battu Turkas)',4),(407,'Converts to Christianity from Scheduled Castes (Pagadai)',4),(408,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Ambalakkarar)',4),(409,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Chakkala)',4),(410,'Converts to Christianity from Scheduled Castes (Bandi)',4),(411,'Converts to Christianity from Scheduled Castes (Chakkiliyan)',4),(412,'Converts to Christianity from Scheduled Castes (Bharatar)',4),(413,'Converts to Christianity from Scheduled Castes (Bellara)',4),(414,'Converts to Christianity from Scheduled Castes (Bakuda)',4),(415,'Converts to Christianity from Scheduled Castes (Baira)',4),(416,'Converts to Christianity from Scheduled Castes (Ayyanavar)',4),(417,'Converts to Christianity from Scheduled Castes (Arunthathiyar)',4),(418,'Converts to Christianity from Scheduled Castes (Ajila)',4),(419,'Converts to Christianity from Scheduled Castes (Adi Karnataka)',4),(420,'Converts to Christianity from Scheduled Castes (Adi Dravida)',4),(421,'Converts to Christianity from Scheduled Castes (Adi Andhra)',4),(422,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Dommara)',4),(423,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Isaivellalar)',4),(424,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Jambuvanodai)',4),(425,'Tirumudi Vellalar',4),(426,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Jogi)',4),(427,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kongu Chettiar)',4),(428,'Kalveli Gounder',4),(429,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Koracha)',4),(430,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kunnuvar Mannadi)',4),(431,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kuruhini Chetty)',4),(432,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Eravallar)',4),(433,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Jangam)',4),(434,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Changayampudi Koravars)',4),(435,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kurumba)',4),(436,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (C.K.Koravars)',4),(437,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Chettinad Valayars)',4),(438,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Dombs)',4),(439,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Dobba Koravars)',4),(440,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Dommars)',4),(441,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Donga Boya)',4),(442,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Donga Ur.Korachas)',4),(443,'Converts to Christianity from Scheduled Castes (Sambavar)',4),(444,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Devagudi Talayaris)',4),(445,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Dobbai Korachas)',4),(446,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Dabi Koravars)',4),(447,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Donga Dasaris)',4),(448,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Gorrela Dodda Boya)',4),(449,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Gudu Dasaris)',4),(450,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Gandarvakottai Koravars)',4),(451,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Gandarvakottai Kallars)',4),(452,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Inji Koravars)',4),(453,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Jogis)',4),(454,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kaladis)',4),(455,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Jambavanodai)',4),(456,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Koravars)',4),(457,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kalinji Dabikoravars)',4),(458,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kootappal Kallars)',4),(459,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kala Koravars)',4),(460,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kalavathila Boyas)',4),(461,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kepmaris)',4),(462,'Converts to Christianity from Scheduled Castes (Godagali)',4),(463,'Converts to Christianity from Scheduled Castes (Cheramar)',4),(464,'Converts to Christianity from Scheduled Castes (Kuravan)',4),(465,'Converts to Christianity from Scheduled Castes (Kudumban)',4),(466,'Converts to Christianity from Scheduled Castes (Kootan)',4),(467,'Converts to Christianity from Scheduled Castes (Koodan)',4),(468,'Converts to Christianity from Scheduled Castes (Koosa)',4),(469,'Converts to Christianity from Scheduled Castes (Kavara)',4),(470,'Converts to Christianity from Scheduled Castes (Koliyan)',4),(471,'Converts to Christianity from Scheduled Castes (Karimpalan)',4),(472,'Converts to Christianity from Scheduled Castes (Kanakkan)',4),(473,'Converts to Christianity from Scheduled Castes (Kalladi)',4),(474,'Converts to Christianity from Scheduled Castes (Kadaiyan)',4),(475,'Converts to Christianity from Scheduled Castes (Jambuvulu)',4),(476,'Converts to Christianity from Scheduled Castes (Jaggali)',4),(477,'Converts to Christianity from Scheduled Castes (Holeya)',4),(478,'Converts to Christianity from Scheduled Castes (Gosargi)',4),(479,'Converts to Christianity from Scheduled Castes (Godda)',4),(480,'Converts to Christianity from Scheduled Castes (Domban)',4),(481,'Converts to Christianity from Scheduled Castes (Dombara)',4),(482,'Converts to Christianity from Scheduled Castes (Dom)',4),(483,'Converts to Christianity from Scheduled Castes (Devandrakulathan)',4),(484,'Converts to Christianity from Scheduled Castes (Cheruman)',4),(485,'Converts to Christianity from Scheduled Castes (Chandala)',4),(486,'Converts to Christianity from Scheduled Castes (Chamar)',4),(487,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kal Oddars)',4),(488,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Oddar)',4),(489,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Maruthuvar)',4),(490,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Navithar)',4),(491,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Mangala)',4),(492,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pronopakari)',4),(493,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Mond Golla)',4),(494,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Mahendra)',4),(495,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Medara)',4),(496,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Mutlakampatti)',4),(497,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Narikoravar (Kurivikars))',4),(498,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Nokkar)',4),(499,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Panisaivan)',4),(500,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Panisivan)',4),(501,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Punnan Vettuva Gounder)',4),(502,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pannayar)',4),(503,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kurumba Gounder)',4),(504,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Maravars)',4),(505,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Monda Koravars)',4),(506,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Monda Golla)',4),(507,'Thondu Vellalar',4),(508,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Nokkars)',4),(509,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pedda Boyas)',4),(510,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Ponnai Koravars)',4),(511,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Peria Suriyur Kallars)',4),(512,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Salem Melnad Koravars)',4),(513,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Salem Uppu Koravars)',4),(514,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sakkaraithamadai Koravars)',4),(515,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Saranga Palli Koravars)',4),(516,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Nawalpeta Korachas)',4),(517,'Converts to Christianity from Scheduled Castes (Sapari)',4),(518,'Converts to Christianity from Scheduled Castes (Samban)',4),(519,'Converts to Christianity from Scheduled Castes (Samagara)',4),(520,'Converts to Christianity from Scheduled Castes (Raneyar)',4),(521,'Converts to Christianity from Scheduled Castes (Puthirai Vannan)',4),(522,'Converts to Christianity from Scheduled Castes (Pulayan)',4),(523,'Converts to Christianity from Scheduled Castes (Pathiyan)',4),(524,'Converts to Christianity from Scheduled Castes (Paravan)',4),(525,'Converts to Christianity from Scheduled Castes (Parayan)',4),(526,'Converts to Christianity from Scheduled Castes (Paraiyan)',4),(527,'Converts to Christianity from Scheduled Castes (Pannadi)',4),(528,'Converts to Christianity from Scheduled Castes (Panniandi)',4),(529,'Converts to Christianity from Scheduled Castes (Panchama)',4),(530,'Converts to Christianity from Scheduled Castes (Panan)',4),(531,'Converts to Christianity from Scheduled Castes (Pambada)',4),(532,'Converts to Christianity from Scheduled Castes (Pulluvan)',4),(533,'Converts to Christianity from Scheduled Castes (Pallan)',4),(534,'Converts to Christianity from Scheduled Castes (Padannan)',4),(535,'Converts to Christianity from Scheduled Castes (Nayadi)',4),(536,'Converts to Christianity from Scheduled Castes (Nalakeyava)',4),(537,'Converts to Christianity from Scheduled Castes (Moger)',4),(538,'Converts to Christianity from Scheduled Castes (Mavilan)',4),(539,'Converts to Christianity from Scheduled Castes (Mannan)',4),(540,'Converts to Christianity from Scheduled Castes (Mala)',4),(541,'Converts to Christianity from Scheduled Castes (Maila)',4),(542,'Converts to Christianity from Scheduled Castes (Madiga)',4),(543,'Converts to Christianity from Scheduled Castes (Padanna)',4),(544,'Converts to Christianity from Scheduled Castes (Pane)',4),(545,'Converts to Christianity from Scheduled Castes (Paidi)',4),(546,'Boyas',4),(547,'Dombs',4),(548,'Dommars',4),(549,'Okkaliya-Gowda',4),(550,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Ambalakarar)',4),(551,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Andipandaram)',4),(552,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Siviar)',4),(553,'Pala Gounder',4),(554,'Poosari Gounder',4),(555,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Dasari)',4),(556,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Velakattalavar)',4),(557,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Velakatalanair)',4),(558,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Moundadan Chetty)',4),(559,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sozhia Chetty)',4),(560,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Telugupatti Chetty)',4),(561,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Thondaman)',4),(562,'Surithimar',4),(563,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Thoraiyar(Nilgris))',4),(564,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Thoraiyar (Plains))',4),(565,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vettaikarar)',4),(566,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vettuva Gounder)',4),(567,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Yogeeswarar)',4),(568,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Attur Kilnad Koravars)',4),(569,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities  (Nellorepet Oddars)',4),(570,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Boyas)',4),(571,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Oddars)',4),(572,'Sri Karuneegar',4),(573,'Sarattu Karuneegar',4),(574,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Piramalai Kallars)',4),(575,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Servai)',4),(576,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sooramari Oddars)',4),(577,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sembanad Maravars)',4),(578,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Thalli Koravars)',4),(579,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Thelungapatti Chettis)',4),(580,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Thogamalai Koravars)',4),(581,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Settipalli Koravars)',4),(582,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Uppukoravars)',4),(583,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Urali Gounders)',4),(584,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Wayalpad)',4),(585,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vaduvarpatti Koravars)',4),(586,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Valayars)',4),(587,'Idaiyar',4),(588,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vetta Koravars)',4),(589,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Varaganeri Koravars)',4),(590,'Converts to Christianity from Scheduled Castes (Vettuvan)',4),(591,'Converts to Christianity from Scheduled Castes (Vettiyan)',4),(592,'Converts to Christianity from Scheduled Castes (Vetan)',4),(593,'Converts to Christianity from Scheduled Castes (Velan)',4),(594,'Converts to Christianity from Scheduled Castes (Vathiriyan)',4),(595,'Converts to Christianity from Scheduled Castes (Vannan)',4),(596,'Converts to Christianity from Scheduled Castes (Valluvan)',4),(597,'Converts to Christianity from Scheduled Castes (Vallon)',4),(598,'Converts to Christianity from Scheduled Castes (Tiruvalluvar)',4),(599,'Converts to Christianity from Scheduled Castes (Thoti)',4),(600,'Converts to Christianity from Scheduled Castes (Semman)',4),(601,'Converts to Christianity from Scheduled Castes (Madari)',4),(602,'Maniagar',4),(603,'Nangudi Vellalar',4),(604,'Kottar Chetty',4),(605,'Elur Chetty',4),(606,'Pathira Chetty',4),(607,'Valayal Chetty',4),(608,'Pudukadai Chetty',4),(609,'Anuppa Gounder',4),(610,'Gammala',4),(611,'Kalali',4),(612,'Kalari Kurup',4),(613,'Thattar',4),(614,'Porkollar',4),(615,'kannar',4),(616,'Karumar',4),(617,'Kollar',4),(618,'Thacher',4),(619,'Kal Thacher',4),(620,'Kamsala',4),(621,'Viswa brahmin',4),(622,'Seer Karuneegar',4),(623,'Kaikatti Karuneegar',4),(624,'Sozhi Kanakkar',4),(625,'Mathuvazhi Kanakkar',4),(626,'Sunnambu Karuneegar',4),(627,'Lingayat (Jangama)',4),(628,'Namdev Mahratta',4),(629,'Malayamar',4),(630,'Nainar',4),(631,'Nathamar',4),(632,'Moopanar',4),(633,'Perike Balija',4),(634,'Reddy (Ganjam )',4),(635,'Telugu Chetty',4),(636,'24 Manai Telugu Chetty',4),(637,'Sourashtra (Patnulkarar)',4),(638,'Sozha Vellalar',4),(639,'Vetrilaikarar',4),(640,'Kodikalkarar',4),(641,'Keeraikarar',4),(642,'Gandla',4),(643,'Ganika',4),(644,'Telikula',4),(645,'Chekkalar',4),(646,'Vania Chettiar',4),(647,'Vaniyar',4),(648,'Vakkaligar',4),(649,'Okkaligar',4),(650,'Kappiliyar',4),(651,'Kappiliya',4),(652,'Vokkaligar',4),(653,'Okkaliga Gowda',4),(654,'Okkaliya-Gowder',4),(655,'Telugu Speaking Idaiyar known as Vaduga Idaiyar',4),(656,'Telugu Speaking Idaiyar known as Vaduga Ayar',4),(657,'Asthanthra Golla',4),(658,'Vellala Gounder',4),(659,'Nattu Gounder',4),(660,'Narambukkatti Gounder',4),(661,'Anuppa Vellala Gounder',4),(662,'Padaithalai Gounder',4),(663,'Chendalai Gounder',4),(664,'Pavalankatti Vellala Gounder',4),(665,'Palavellala Gounder',4),(666,'Sanku Vellala Gounder',4),(667,'Rathinagiri Gounder',4),(668,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Agasa )',4),(669,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Madivala )',4),(670,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Ekali )',4),(671,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Rajakula )',4),(672,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Veluthadar )',4),(673,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Rajaka )',4),(674,'Vanniyar',4),(675,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Agamudayar)',4),(676,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Thozhu)',4),(677,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Thuluva Vellala)',4),(678,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Billava)',4),(679,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sadhu Chetty)',4),(680,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Telugu Chetty)',4),(681,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Twenty Four Manai Telugu Chetty)',4),(682,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kavathi)',4),(683,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sakkaravar)',4),(684,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Salivagana)',4),(685,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Adhaviyar)',4),(686,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Padmasaliyar)',4),(687,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pattariyar)',4),(688,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pattusaliyar)',4),(689,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Saliyar)',4),(690,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Savalakkarar)',4),(691,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Illaivaniar)',4),(692,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Senaikudiyar)',4),(693,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Senaithalaivar)',4),(694,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Serakula Vellalar)',4),(695,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sourashtra (Patnulkarar))',4),(696,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sozhiavellalar)',4),(697,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sozha Vellalar)',4),(698,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vetrilaikarar)',4),(699,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kodikalkarar)',4),(700,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Keeraikarar)',4),(701,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Srisayar)',4),(702,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sundaram Chetty)',4),(703,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Bondil)',4),(704,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Thogatta Veerakshatriya)',4),(705,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Tholkollar)',4),(706,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Tholuva Naicker)',4),(707,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vetalakara Naicker)',4),(708,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Thoriyar)',4),(709,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Ukkirakula Kshatriya Naicker)',4),(710,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sagara)',4),(711,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Uppara)',4),(712,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Uppillia)',4),(713,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Urali Gounder)',4),(714,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Oorudaya Gounder)',4),(715,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Orudaya Gounder)',4),(716,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Urikkara Nayakkar)',4),(717,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Virakodi Vellala)',4),(718,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vallambar)',4),(719,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vallanattu Chettiar)',4),(720,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kaloddars)',4),(721,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pedda Boyar)',4),(722,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Nellorepet Oddars)',4),(723,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Valmiki)',4),(724,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vania Chettiar)',4),(725,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vaniyar)',4),(726,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Chekkalar)',4),(727,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Gandla)',4),(728,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Ganika)',4),(729,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Telikula)',4),(730,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vedar)',4),(731,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Veduvar)',4),(732,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Veerasaiva)',4),(733,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Velar)',4),(734,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vellan Chettiar)',4),(735,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Veluthodathu Nair)',4),(736,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vokkaligar)',4),(737,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kappiliya)',4),(738,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vakkaligar)',4),(739,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Okkaligar)',4),(740,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kappiliyar)',4),(741,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Okkaliga Gowda)',4),(742,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Okkaliya-Gowder)',4),(743,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Okkaliya-Gowda)',4),(744,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Wynad Chetty)',4),(745,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Yadhava)',4),(746,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Telugu Speaking Idaiyar known as Vaduga Idaiyar)',4),(747,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Telugu Speaking Idaiyar known as Vaduga Ayar)',4),(748,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Idaiyar)',4),(749,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Telugu Speaking Idaiyar known as Golla)',4),(750,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Asthanthra Golla)',4),(751,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Yavana)',4),(752,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Yerukula)',4),(753,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Chavalakarar)',4),(754,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Chettu)',4),(755,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Chetty)',4),(756,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pathira Chetty)',4),(757,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Valayal Chetty)',4),(758,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kottar Chetty)',4),(759,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Elur Chetty)',4),(760,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pudukadai Chetty)',4),(761,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Chowdry)',4),(762,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Devangar)',4),(763,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sedar)',4),(764,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Agaram Vellan Chettiar)',4),(765,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Enadi)',4),(766,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Ezhavathy)',4),(767,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Ezhuthachar)',4),(768,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Ezhuva)',4),(769,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Gangavar)',4),(770,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Gavara)',4),(771,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Gavarai)',4),(772,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vadugar)',4),(773,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vaduvar)',4),(774,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Gounder)',4),(775,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Gowda)',4),(776,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Anuppa Gounder)',4),(777,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Gammala)',4),(778,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kalali)',4),(779,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Hegde)',4),(780,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Idiga)',4),(781,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Alavar)',4),(782,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Alwar)',4),(783,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Azhavar)',4),(784,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Ezhuvar)',4),(785,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Illathar)',4),(786,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Illathu Pillaimar)',4),(787,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Illuvar)',4),(788,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Jhetty)',4),(789,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kabbera)',4),(790,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kaikolar)',4),(791,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sengunthar)',4),(792,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kaladi)',4),(793,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kalari Kurup)',4),(794,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kalari Panicker)',4),(795,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kalingi)',4),(796,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kallar)',4),(797,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Easanattu Kallar)',4),(798,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Gandarva Kottai Kallars)',4),(799,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Periyasooriyur Kallars)',4),(800,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kallar Kula Thondaman)',4),(801,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kalveli Gounder)',4),(802,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kambar)',4),(803,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kammalar)',4),(804,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Viswakarma)',4),(805,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Viswakarmala)',4),(806,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Thattar)',4),(807,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Porkollar)',4),(808,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (kannar)',4),(809,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Karumar)',4),(810,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kollar)',4),(811,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Thacher)',4),(812,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kal Thacher)',4),(813,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kamsala)',4),(814,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Viswa brahmin)',4),(815,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kani)',4),(816,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kanisu)',4),(817,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kaniyar Panicker)',4),(818,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kaniyala Vellalar)',4),(819,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Dasapalanjika)',4),(820,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kannada Saineegar)',4),(821,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kannadiyar)',4),(822,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kannadiya Naidu)',4),(823,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Karpoora Chettiar)',4),(824,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Karuneegar)',4),(825,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Seer Karuneegar)',4),(826,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sri Karuneegar)',4),(827,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sarattu Karuneegar)',4),(828,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kaikatti Karuneegar)',4),(829,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sunnambu Karuneegar)',4),(830,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Mathuvazhi Kanakkar)',4),(831,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sozhi Kanakkar)',4),(832,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kasukkara Chettiar)',4),(833,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Nulayar)',4),(834,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Katesar)',4),(835,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pattamkatti)',4),(836,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kavuthiyar)',4),(837,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kerala Mudali)',4),(838,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kharvi)',4),(839,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Khatri)',4),(840,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kongu Vaishnava)',4),(841,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kongu Vellalars)',4),(842,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Narambukkatti Gounder)',4),(843,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Tirumudi Vellalar)',4),(844,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Padaithalai Gounder)',4),(845,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Chendalai Gounder)',4),(846,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pavalankatti Vellala Gounder)',4),(847,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Palavellala Gounder)',4),(848,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sanku Vellala Gounder)',4),(849,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Rathinagiri Gounder)',4),(850,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vellala Gounder)',4),(851,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Nattu Gounder)',4),(852,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Thondu Vellalar)',4),(853,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pala Gounder)',4),(854,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Poosari Gounder)',4),(855,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Anuppa Vellala Gounder)',4),(856,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Koppala Velama)',4),(857,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Koteyar)',4),(858,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Krishnavaka)',4),(859,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Archakarai Vellala)',4),(860,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kudikara Vellalar)',4),(861,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kudumbi)',4),(862,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kuga Vellalar)',4),(863,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kunchidigar)',4),(864,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Lambadi)',4),(865,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Lingayat (Jangama))',4),(866,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Mahratta (Non-Brahmin))',4),(867,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Namdev Mahratta)',4),(868,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Malayar)',4),(869,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Male)',4),(870,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Maniagar)',4),(871,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Aryavathi)',4),(872,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Karumaravars)',4),(873,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Moondrumandai Enbathunalu (84) Ur. Sozhia Vellalar)',4),(874,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Mooppan)',4),(875,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Mutharaiyar)',4),(876,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Muthiriyar)',4),(877,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Muthuraja)',4),(878,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Muttiriyar)',4),(879,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Nagaram)',4),(880,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Naikkar)',4),(881,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Nangudi Vellalar)',4),(882,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Nanjil Mudali)',4),(883,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Odar)',4),(884,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Ayira Vaisyar)',4),(885,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Odiya)',4),(886,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Oottruvalanattu Vellalar)',4),(887,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (O.P.S. Vellalar)',4),(888,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Ovachar)',4),(889,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Paiyur Kotta Vellalar)',4),(890,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pamulu)',4),(891,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Panar)',4),(892,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pandiya Vellalar)',4),(893,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kathikarar)',4),(894,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pannirandam Chettiar)',4),(895,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Uthama Chettiar)',4),(896,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Badagar)',4),(897,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Parkavakulam)',4),(898,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Surithimar)',4),(899,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Malayamar)',4),(900,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Nainar)',4),(901,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Moopanar)',4),(902,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Nathamar )',4),(903,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Perike)',4),(904,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Perike Balija)',4),(905,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Perumkollar)',4),(906,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Podikara Vellalar)',4),(907,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pooluva Gounder)',4),(908,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Poraya)',4),(909,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pulavar)',4),(910,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pooluvar)',4),(911,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pulluvar)',4),(912,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Pusala)',4),(913,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Reddy (Ganjam))',4),(914,'Lathin Catholics',4),(915,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kuyavar)',4),(916,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kumbarar)',4),(917,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vanniyar)',4),(918,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vanniya)',4),(919,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vannia Gounder)',4),(920,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Padayachi)',4),(921,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Palli)',4),(922,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kander)',4),(923,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Agnikula Kshatriya)',4),(924,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sathani)',4),(925,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Chattadi)',4),(926,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Chattada Srivaishnava)',4),(927,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Rajakambalam)',4),(928,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Gollavar)',4),(929,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sillavar)',4),(930,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Thockalavar)',4),(931,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Thozhuva Naicker)',4),(932,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Erragollar)',4),(933,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities ((Transgender or Eunuch) (Thirunangai or Aravani))',4),(934,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Agasa)',4),(935,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Madivala)',4),(936,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Ekali)',4),(937,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Rajakula)',4),(938,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Veluthadar)',4),(939,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Rajaka)',4),(940,'Sozhiavellalar',4),(941,'Yadhava',4),(942,'Gowda',4),(943,'Kammalar',4),(944,'Viswakarma',4),(945,'Viswakarmala',4),(946,'Karuneegar',4),(947,'Kongu Vellalars',4),(948,'Mahratta (Non-Brahmin)',4),(949,'Gramani',4),(950,'Nadar',4),(951,'Shanar',4),(952,'Perike',4),(953,'Chettu',4),(954,'Chetty',4),(955,'Sadhu Chetty',4),(956,'Converts to Christianity from Scheduled Castes (Chalavadi)',4),(957,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Mutlakampatti)',4),(958,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Padayachi)',4),(959,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Punnan Vettuva Gounder)',4),(960,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Ambalakarar)',4),(961,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kepmaris)',4),(962,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vettaikarar)',4),(963,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Vettuva Gounder)',4),(964,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Boyas)',4),(965,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Oddars)',4),(966,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Chakkala)',4),(967,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Donga Dasaris)',4),(968,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Dombs)',4),(969,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Dommars)',4),(970,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Jogis)',4),(971,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Kootappal Kallars)',4),(972,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Piramalai Kallars)',4),(973,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Servai)',4),(974,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Maravars)',4),(975,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Appanad Kondayam Kottai Maravar)',4),(976,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Sembanad Maravars)',4),(977,'Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (Gounder)',4),(978,'Nainar',4),(979,'NOT APPLICABLE',4),(980,'Ansar',5),(981,'Dekkani Muslims',5),(982,'Dudekula',5),(983,'Labbais',5),(984,'Marakayar',5),(985,'Rowthar',5),(986,'Mapilla',5),(987,'Sheik',5),(988,'Syed',5),(989,'NOT APPLICABLE',5),(990,'C.K.Koravars',8),(991,'Chakkala',8),(992,'Changyampudi Koravars',8),(993,'Chettinad Valayars',8),(994,'Dombs',8),(995,'Dobba Koravars',8),(996,'Dommars',8),(997,'Donga Boya',8),(998,'Donga Ur.Korachas',8),(999,'Devagudi Talayaris',8),(1000,'Dobbai Korachas',8),(1001,'Dabi Koravars',8),(1002,'Donga Dasaris',8),(1003,'Gorrela Dodda Boya',8),(1004,'Gudu Dasaris',8),(1005,'Appanad Kondayam Kottai Maravar',8),(1006,'Ambalakarar',8),(1007,'Ambalakkarar',8),(1008,'Boyas',8),(1009,'Gandarvakottai Koravars',8),(1010,'Gandarvakottai Kallars',8),(1011,'Inji Koravars',8),(1012,'Jogis',8),(1013,'Kaladis',8),(1014,'Jambavanodai',8),(1015,'Koravars',8),(1016,'Kalinji Dabikoravars',8),(1017,'Kootappal Kallars',8),(1018,'Kala Koravars',8),(1019,'Kalavathila Boyas',8),(1020,'Kepmaris',8),(1021,'Maravars',8),(1022,'Monda Koravars',8),(1023,'Monda Golla',8),(1024,'Mutlakampatti',8),(1025,'Nokkars',8),(1026,'Nellorepet Oddars',8),(1027,'Oddars',8),(1028,'Pedda Boyas',8),(1029,'Ponnai Koravars',8),(1030,'Piramalai Kallars',8),(1031,'Servai',8),(1032,'Sooramari Oddars',8),(1033,'Kal Oddars',8),(1034,'Attur Kilnad Koravars',8),(1035,'Peria Suriyur Kallars',8),(1036,'Padayachi',8),(1037,'Punnan Vettuva Gounder',8),(1038,'Salem Melnad Koravars',8),(1039,'Salem Uppu Koravars',8),(1040,'Sakkaraithamadai Koravars',8),(1041,'Saranga Palli Koravars',8),(1042,'Sembanad Maravars',8),(1043,'Thalli Koravars',8),(1044,'Telungapatti Chetis',8),(1045,'Thottia Naickers',8),(1046,'Thogamalai Koravars',8),(1047,'Uppukoravars',8),(1048,'Settipalli Koravars',8),(1049,'Urali Gounders',8),(1050,'Wayalpad',8),(1051,'Nawalpeta Korachas',8),(1052,'Vaduvarpatti Koravars',8),(1053,'Valayars',8),(1054,'Vettaikarar',8),(1055,'Vetta Koravars',8),(1056,'Varaganeri Koravars',8),(1057,'Vettuva Gounder',8),(1058,'Battu Turkas',8),(1059,'Attur Melnad Koravars',8),(1060,'Battu Turkas',8),(1061,'Kepmaris',8),(1062,'NOT APPLICABLE',8),(1063,'NOT APPLICABLE',9);
/*!40000 ALTER TABLE `lookupapi_caste` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lookupapi_community`
--

DROP TABLE IF EXISTS `lookupapi_community`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lookupapi_community` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `value` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lookupapi_community`
--

LOCK TABLES `lookupapi_community` WRITE;
/*!40000 ALTER TABLE `lookupapi_community` DISABLE KEYS */;
INSERT INTO `lookupapi_community` VALUES (1,'OC'),(2,'MBC'),(3,'ST'),(4,'BC-Others'),(5,'BC-Muslim'),(6,'SC-Arunthathiyar'),(7,'SC-Others'),(8,'DNC (Denotified Communities)'),(9,'NOT APPLICABLE');
/*!40000 ALTER TABLE `lookupapi_community` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lookupapi_country`
--

DROP TABLE IF EXISTS `lookupapi_country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lookupapi_country` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `value` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=194 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lookupapi_country`
--

LOCK TABLES `lookupapi_country` WRITE;
/*!40000 ALTER TABLE `lookupapi_country` DISABLE KEYS */;
INSERT INTO `lookupapi_country` VALUES (1,'INDIA'),(2,'AFGHANISTAN'),(3,'ALBANIA'),(4,'ALGERIA'),(5,'ANDORRA'),(6,'ANGOLA'),(7,'ANTIGUA AND BARBUDA'),(8,'ARGENTINA'),(9,'ARMENIA'),(10,'AUSTRIA'),(11,'AZERBAIJAN'),(12,'BAHRAIN'),(13,'BANGLADESH'),(14,'BARBADOS'),(15,'BELARUS'),(16,'BELGIUM'),(17,'BELIZE'),(18,'BENIN'),(19,'BHUTAN'),(20,'BOLIVIA'),(21,'BOSNIA AND HERZEGOVINA'),(22,'BOTSWANA'),(23,'BRAZIL'),(24,'BRUNEI'),(25,'BULGARIA'),(26,'BURKINA FASO'),(27,'BURUNDI'),(28,'CÃ´TE D\'IVOIRE'),(29,'CABO VERDE'),(30,'CAMBODIA'),(31,'CAMEROON'),(32,'CANADA'),(33,'CENTRAL AFRICAN REPUBLIC'),(34,'CHAD'),(35,'CHANNEL ISLANDS'),(36,'CHILE'),(37,'CHINA'),(38,'COLOMBIA'),(39,'COMOROS'),(40,'CONGO'),(41,'COSTA RICA'),(42,'CROATIA'),(43,'CUBA'),(44,'CYPRUS'),(45,'CZECH REPUBLIC'),(46,'DENMARK'),(47,'DJIBOUTI'),(48,'DOMINICA'),(49,'DOMINICAN REPUBLIC'),(50,'DR CONGO'),(51,'ECUADOR'),(52,'EGYPT'),(53,'EL SALVADOR'),(54,'EQUATORIAL GUINEA'),(55,'ERITREA'),(56,'ESTONIA'),(57,'ESWATINI'),(58,'ETHIOPIA'),(59,'FAEROE ISLANDS'),(60,'FINLAND'),(61,'FRANCE'),(62,'FRENCH GUIANA'),(63,'GABON'),(64,'GAMBIA'),(65,'GEORGIA'),(66,'GERMANY'),(67,'GHANA'),(68,'GIBRALTAR'),(69,'GREECE'),(70,'GRENADA'),(71,'GUATEMALA'),(72,'GUINEA'),(73,'GUINEA-BISSAU'),(74,'GUYANA'),(75,'HAITI'),(76,'HOLY SEE'),(77,'HONDURAS'),(78,'HONG KONG'),(79,'HUNGARY'),(80,'ICELAND'),(81,'INDONESIA'),(82,'IRAN'),(83,'IRAQ'),(84,'IRELAND'),(85,'ISLE OF MAN'),(86,'ISRAEL'),(87,'ITALY'),(88,'JAMAICA'),(89,'JAPAN'),(90,'JORDAN'),(91,'KAZAKHSTAN'),(92,'KENYA'),(93,'KUWAIT'),(94,'KYRGYZSTAN'),(95,'LAOS'),(96,'LATVIA'),(97,'LEBANON'),(98,'LESOTHO'),(99,'LIBERIA'),(100,'LIBYA'),(101,'LIECHTENSTEIN'),(102,'LITHUANIA'),(103,'LUXEMBOURG'),(104,'MACAO'),(105,'MADAGASCAR'),(106,'MALAWI'),(107,'MALAYSIA'),(108,'MALDIVES'),(109,'MALI'),(110,'MALTA'),(111,'MAURITANIA'),(112,'MAURITIUS'),(113,'MAYOTTE'),(114,'MEXICO'),(115,'MOLDOVA'),(116,'MONACO'),(117,'MONGOLIA'),(118,'MONTENEGRO'),(119,'MOROCCO'),(120,'MOZAMBIQUE'),(121,'MYANMAR'),(122,'NAMIBIA'),(123,'NEPAL'),(124,'NETHERLANDS'),(125,'NICARAGUA'),(126,'NIGER'),(127,'NIGERIA'),(128,'NORTH KOREA'),(129,'NORTH MACEDONIA'),(130,'NORWAY'),(131,'OMAN'),(132,'PAKISTAN'),(133,'PANAMA'),(134,'PARAGUAY'),(135,'PERU'),(136,'PHILIPPINES'),(137,'POLAND'),(138,'PORTUGAL'),(139,'QATAR'),(140,'RÃ©UNION'),(141,'ROMANIA'),(142,'RUSSIA'),(143,'RWANDA'),(144,'SAINT HELENA'),(145,'SAINT KITTS AND NEVIS'),(146,'SAINT LUCIA'),(147,'SAINT VINCENT AND THE GRENADINES'),(148,'SAN MARINO'),(149,'SAO TOME & PRINCIPE'),(150,'SAUDI ARABIA'),(151,'SENEGAL'),(152,'SERBIA'),(153,'SEYCHELLES'),(154,'SIERRA LEONE'),(155,'SINGAPORE'),(156,'SLOVAKIA'),(157,'SLOVENIA'),(158,'SOMALIA'),(159,'SOUTH AFRICA'),(160,'SOUTH KOREA'),(161,'SOUTH SUDAN'),(162,'SPAIN'),(163,'SRI LANKA'),(164,'STATE OF PALESTINE'),(165,'SUDAN'),(166,'SURINAME'),(167,'SWEDEN'),(168,'SWITZERLAND'),(169,'SYRIA'),(170,'TAIWAN'),(171,'TAJIKISTAN'),(172,'TANZANIA'),(173,'THAILAND'),(174,'THE BAHAMAS'),(175,'TIMOR-LESTE'),(176,'TOGO'),(177,'TRINIDAD AND TOBAGO'),(178,'TUNISIA'),(179,'TURKEY'),(180,'TURKMENISTAN'),(181,'UGANDA'),(182,'UKRAINE'),(183,'UNITED ARAB EMIRATES'),(184,'UNITED KINGDOM'),(185,'UNITED STATES'),(186,'URUGUAY'),(187,'UZBEKISTAN'),(188,'VENEZUELA'),(189,'VIETNAM'),(190,'WESTERN SAHARA'),(191,'YEMEN'),(192,'ZAMBIA'),(193,'ZIMBABWE');
/*!40000 ALTER TABLE `lookupapi_country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lookupapi_district`
--

DROP TABLE IF EXISTS `lookupapi_district`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lookupapi_district` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `value` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lookupapi_district`
--

LOCK TABLES `lookupapi_district` WRITE;
/*!40000 ALTER TABLE `lookupapi_district` DISABLE KEYS */;
INSERT INTO `lookupapi_district` VALUES (1,'ARIYALUR'),(2,'CHENGALPATTU'),(3,'CHENNAI'),(4,'COIMBATORE'),(5,'CUDDALORE'),(6,'DHARMAPURI'),(7,'DINDIGUL'),(8,'ERODE'),(9,'KALLAKURICHI'),(10,'KANCHEEPURAM'),(11,'KANYAKUMARI'),(12,'KARUR'),(13,'KRISHNAGIRI'),(14,'MADURAI'),(15,'MAYILADUTHURAI'),(16,'NAGAPATTINAM'),(17,'NAMAKKAL'),(18,'NILGIRIS'),(19,'OTHERS'),(20,'PERAMBALUR'),(21,'PUDUKKOTTAI'),(22,'RAMANATHAPURAM'),(23,'RANIPET'),(24,'SALEM'),(25,'SIVAGANGAI'),(26,'TENKASI'),(27,'THANJAVUR'),(28,'THENI'),(29,'THIRUCHIRAPPALLI'),(30,'THIRUVARUR'),(31,'THOOTHUKUDI'),(32,'TIRUNELVELI'),(33,'TIRUPATHUR'),(34,'TIRUPPUR'),(35,'TIRUVALLUR'),(36,'TIRUVANNAMALAI'),(37,'VELLORE'),(38,'VILLUPURAM'),(39,'VIRUDHUNAGAR');
/*!40000 ALTER TABLE `lookupapi_district` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lookupapi_gender`
--

DROP TABLE IF EXISTS `lookupapi_gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lookupapi_gender` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `value` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lookupapi_gender`
--

LOCK TABLES `lookupapi_gender` WRITE;
/*!40000 ALTER TABLE `lookupapi_gender` DISABLE KEYS */;
INSERT INTO `lookupapi_gender` VALUES (1,'MALE'),(2,'FEMALE'),(3,'TRANSGENDER');
/*!40000 ALTER TABLE `lookupapi_gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lookupapi_location_type`
--

DROP TABLE IF EXISTS `lookupapi_location_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lookupapi_location_type` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `value` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lookupapi_location_type`
--

LOCK TABLES `lookupapi_location_type` WRITE;
/*!40000 ALTER TABLE `lookupapi_location_type` DISABLE KEYS */;
INSERT INTO `lookupapi_location_type` VALUES (1,'RURAL'),(2,'URBAN');
/*!40000 ALTER TABLE `lookupapi_location_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lookupapi_religion`
--

DROP TABLE IF EXISTS `lookupapi_religion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lookupapi_religion` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `value` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lookupapi_religion`
--

LOCK TABLES `lookupapi_religion` WRITE;
/*!40000 ALTER TABLE `lookupapi_religion` DISABLE KEYS */;
INSERT INTO `lookupapi_religion` VALUES (1,'Buddhism'),(2,'Christian'),(3,'Hindu'),(4,'Jainism'),(5,'Muslim'),(6,'others'),(7,'Religion not disclosed'),(8,'Sikh');
/*!40000 ALTER TABLE `lookupapi_religion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lookupapi_state`
--

DROP TABLE IF EXISTS `lookupapi_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lookupapi_state` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `value` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lookupapi_state`
--

LOCK TABLES `lookupapi_state` WRITE;
/*!40000 ALTER TABLE `lookupapi_state` DISABLE KEYS */;
INSERT INTO `lookupapi_state` VALUES (1,'ANDAMAN AND NICOBAR ISLANDS'),(2,'ANDHRA PRADESH'),(3,'ARUNACHAL PRADESH'),(4,'ASSAM'),(5,'BIHAR'),(6,'CHANDIGARH'),(7,'CHHATTISGARH'),(8,'DADRA AND NAGAR HAVELI AND DAMAN AND DIU'),(9,'DELHI'),(10,'GOA'),(11,'GUJARAT'),(12,'HARYANA'),(13,'HIMACHAL PRADESH'),(14,'JAMMU AND KASHMIR'),(15,'JHARKHAND'),(16,'KARNATAKA'),(17,'KERALA'),(18,'LADAKH'),(19,'LAKSHADWEEP'),(20,'MADHYA PRADESH'),(21,'MAHARASHTRA'),(22,'MANIPUR'),(23,'MEGHALAYA'),(24,'MIZORAM'),(25,'NAGALAND'),(26,'ODISHA'),(27,'PUDUCHERRY'),(28,'PUNJAB'),(29,'RAJASTHAN'),(30,'SIKKIM'),(31,'TAMIL NADU'),(32,'TELANGANA'),(33,'TRIPURA'),(34,'UTTAR PRADESH'),(35,'UTTARAKHAND'),(36,'WEST BENGAL');
/*!40000 ALTER TABLE `lookupapi_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lookupapi_taluk`
--

DROP TABLE IF EXISTS `lookupapi_taluk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lookupapi_taluk` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `value` varchar(50) NOT NULL,
  `districtId` smallint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `lookupapi_taluk_chk_1` CHECK ((`districtId` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=314 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lookupapi_taluk`
--

LOCK TABLES `lookupapi_taluk` WRITE;
/*!40000 ALTER TABLE `lookupapi_taluk` DISABLE KEYS */;
INSERT INTO `lookupapi_taluk` VALUES (1,'ANDIMADAM',1),(2,'ARIYALUR',1),(3,'SENDURAI',1),(4,'UDAYARPALAYAM',1),(5,'CHENGALPATTU',2),(6,'CHEYYUR',2),(7,'MADHURANTAKAM',2),(8,'PALLAVARAM',2),(9,'TAMBARAM',2),(10,'THIRUKKALUKUNDRAM',2),(11,'THIRUPPORUR',2),(12,'VANDALUR',2),(13,'ALANDUR',3),(14,'AMBATTUR',3),(15,'AMINJIKARAI',3),(16,'AYANAVARAM',3),(17,'EGMORE',3),(18,'GUINDY',3),(19,'MADHAVARAM',3),(20,'MADURAVOYAL',3),(21,'MAMBALAM',3),(22,'MYLAPORE',3),(23,'PERAMBUR',3),(24,'PURSAWALKAM',3),(25,'SHOLINGANALLUR',3),(26,'THIRUVOTTIYUR',3),(27,'TONDIARPET',3),(28,'VELACHERY',3),(29,'ANAIMALAI',4),(30,'ANNUR',4),(31,'COIMBATORE NORTH',4),(32,'COIMBATORE SOUTH',4),(33,'KINATHUKADAVU',4),(34,'MADUKARAI',4),(35,'METTUPALAYAM',4),(36,'PERUR',4),(37,'POLLACHI',4),(38,'SULUR',4),(39,'VALPARAI',4),(40,'BHUVANAGIRI',5),(41,'CHIDAMBARAM',5),(42,'CUDDALORE',5),(43,'KATTUMANNARKOIL',5),(44,'KURINJIPADI',5),(45,'PANRUTI',5),(46,'SRIMUSHNAM',5),(47,'TITAGUDI',5),(48,'VEPPUR',5),(49,'VRIDHACHALAM',5),(50,'DHARMAPURI',6),(51,'HARUR',6),(52,'KARIMANGALAM',6),(53,'NALLAMPALLI',6),(54,'PALACODE',6),(55,'PAPPIREDDIPATTI',6),(56,'PENNAGARAM',6),(57,'ATHOOR',7),(58,'DINDIGUL EAST',7),(59,'DINDIGUL WEST',7),(60,'GUJILIAMPARAI',7),(61,'KODAIKANAL',7),(62,'NATHAM',7),(63,'NILAKOTTAI',7),(64,'ODDENCHATRAM',7),(65,'PALANI',7),(66,'VEDASANDUR',7),(67,'ANTHIYUR',8),(68,'BHAVANI',8),(69,'ERODE',8),(70,'GOBICHETTIPALAYAM',8),(71,'KODUMUDI',8),(72,'MODAKKURICHI',8),(73,'NAMBIYUR',8),(74,'PERUNDURAI',8),(75,'SATHYAMANGALAM',8),(76,'THALAVADI',8),(77,'CHINNASELAM',9),(78,'KALLAKURICHI',9),(79,'KALVARAYAN HILLS',9),(80,'SANKARAPURAM',9),(81,'TIRUKKOILUR',9),(82,'ULUNDURPET',9),(83,'KANCHEEPURAM',10),(84,'KUNDRATHUR',10),(85,'SRIPERUMBUDUR',10),(86,'UTHIRAMERUR',10),(87,'WALAJABAD',10),(88,'AGASTHEESWARAM',11),(89,'KALKULAM',11),(90,'KILLIYOOR',11),(91,'THIRUVATTAR',11),(92,'THOVALAI',11),(93,'VILAVANCODE',11),(94,'ARAVAKURICHI',12),(95,'KADAVUR',12),(96,'KARUR',12),(97,'KRISHNARAYAPURAM',12),(98,'KULITHALAI',12),(99,'MANMANGALAM',12),(100,'PUGALUR',12),(101,'ANCHETTY',13),(102,'BARGUR',13),(103,'DENKANIKOTTAI',13),(104,'HOSUR',13),(105,'KRISHNAGIRI',13),(106,'POCHAMPALLI',13),(107,'SHOOLAGIRI',13),(108,'UTHANGARAI',13),(109,'KALLIGUDI',14),(110,'MADURAI EAST',14),(111,'MADURAI NORTH',14),(112,'MADURAI SOUTH',14),(113,'MADURAI WEST',14),(114,'MELUR',14),(115,'PERAIYUR',14),(116,'THIRUMANGALAM',14),(117,'THIRUPPARANKUNDRAM',14),(118,'USILAMPATTI',14),(119,'VADIPATTI',14),(120,'KUTHALAM',15),(121,'MAYILADUTHURAI',15),(122,'SIRKAZHI',15),(123,'THARANGAMBADI',15),(124,'KILVELUR',16),(125,'NAGAPATTINAM',16),(126,'THIRUKKUVALAI',16),(127,'VEDARANYAM',16),(128,'KOLLI HILLS',17),(129,'KUMARAPALAYAM',17),(130,'MOHANUR',17),(131,'NAMAKKAL',17),(132,'PARAMATHI VELUR',17),(133,'RASIPURAM',17),(134,'SENDAMANGALAM',17),(135,'TIRUCHENGODE',17),(136,'COONOOR',18),(137,'GUDALUR',18),(138,'KOTAGIRI',18),(139,'KUNDAH',18),(140,'PANDALUR',18),(141,'UDHAGAI',18),(142,'ALATHUR',20),(143,'KUNNAM',20),(144,'PERAMBALUR',20),(145,'VEPPANTHATTAI',20),(146,'ALANGUDI',21),(147,'ARANTHANGI',21),(148,'AVUDAIYARKOIL',21),(149,'GANDARVAKOTTAI',21),(150,'ILLUPUR',21),(151,'KARAMBAKUDI',21),(152,'KULATHUR',21),(153,'MANAMELKUDI',21),(154,'PONNAMARAVATHI',21),(155,'PUDUKKOTTAI',21),(156,'THIRUMAYAM',21),(157,'VIRALIMALAI',21),(158,'KADALADI',22),(159,'KAMUTHI',22),(160,'KEELAKARAI',22),(161,'MUDUKULATHUR',22),(162,'PARAMAKUDI',22),(163,'RAJASINGAMANGALAM',22),(164,'RAMANATHAPURAM',22),(165,'RAMESWARAM',22),(166,'THIRUVADANI',22),(167,'ARAKKONAM',23),(168,'ARCOT',23),(169,'KALAVAI',23),(170,'NEMILI',23),(171,'SHOLINGUR',23),(172,'WALAJAH',23),(173,'ATTUR',24),(174,'EDAPPADY',24),(175,'GANAGAVALLI',24),(176,'KADAYAMPATTI',24),(177,'METTUR',24),(178,'OMALUR',24),(179,'PETHANAICKENPALAYAM',24),(180,'SALEM',24),(181,'SALEM SOUTH',24),(182,'SALEM WEST',24),(183,'SANKARI',24),(184,'THALAIVASAL',24),(185,'VALAPADY',24),(186,'YERCAUD',24),(187,'DEVAKOTTAI',25),(188,'ILAYANKUDI',25),(189,'KALAIYARKOVIL',25),(190,'KARAIKUDI',25),(191,'MANAMADURAI',25),(192,'SINGAMPUNARI',25),(193,'SIVAGANGAI',25),(194,'THIRUPATTUR',25),(195,'THIRUPPUVANAM',25),(196,'ALANGULAM',26),(197,'KADAYANALLUR',26),(198,'SANKARANKOVIL',26),(199,'SHENCOTTAI',26),(200,'SIVAGIRI',26),(201,'TENKASI',26),(202,'THIRUVENGADAM',26),(203,'V.K.PUDUR',26),(204,'BUDALUR',27),(205,'KUMBAKONAM',27),(206,'ORATHANAD',27),(207,'PAPANASAM',27),(208,'PATTUKOTTAI',27),(209,'PERAVURANI',27),(210,'THANJAVUR',27),(211,'THIRUVAIYARU',27),(212,'THIRUVIDAIMARUTHUR',27),(213,'AUNDIPATTI',28),(214,'BODINAYAKANUR ',28),(215,'PERIYAKULAM',28),(216,'THENI',28),(217,'UTHAMAPALAYAM ',28),(218,'LALGUDI',29),(219,'MANAPPARAI',29),(220,'MANNACHANALLUR',29),(221,'MARUNGAPURI',29),(222,'MUSIRI',29),(223,'SRIRANGAM',29),(224,'THIRUCHIRAPALLI-WEST',29),(225,'THIRUVERUMBUR',29),(226,'THOTTIAM',29),(227,'THURAIYUR',29),(228,'TIRUCHIRAPPALLI-EAST',29),(229,'KOOTHANALLUR',30),(230,'KUDAVASAL',30),(231,'MANNARGUDI',30),(232,'NANNILAM',30),(233,'NEEDAMANGALAM',30),(234,'THIRUTHURAIPOONDI',30),(235,'THIRUVARUR',30),(236,'VALANGAIMAN',30),(237,'ERAL',31),(238,'ETTAYAPURAM',31),(239,'KAYATHAR',31),(240,'KOVILPATTY',31),(241,'OTTAPIDARAM',31),(242,'SATTANKULAM',31),(243,'SRIVAIKUNDAM',31),(244,'THOOTHUKUDI',31),(245,'TIRUCHENDUR',31),(246,'VILATHIKULAM',31),(247,'AMBASAMUDRAM',32),(248,'CHERANMAHADEVI',32),(249,'MANUR',32),(250,'NANGUNERI',32),(251,'PALAYAMKOTTAI',32),(252,'RADHAPURAM',32),(253,'TIRUNELVELI',32),(254,'TISAYANVILAI',32),(255,'AMBUR',33),(256,'NATRAMPALLI',33),(257,'TIRUPATTUR',33),(258,'VANIYAMBADI',33),(259,'AVINASHI',34),(260,'DHARAPURAM',34),(261,'KANGEYAM',34),(262,'MADATHUKKULAM',34),(263,'PALLADAM',34),(264,'TIRUPPUR NORTH ',34),(265,'TIRUPPUR SOUTH',34),(266,'UDUMALPET',34),(267,'UTHUKKULI',34),(268,'AVADI',35),(269,'GUMMIDIPOONDI',35),(270,'PALLIPATTU',35),(271,'PONNERI',35),(272,'POONAMALLEE',35),(273,'R. K. PETTAI',35),(274,'TIRUTTANI',35),(275,'TIRUVALLUR',35),(276,'UTHUKOTTAI',35),(277,'ARNI',36),(278,'CHENGAM',36),(279,'CHETPET',36),(280,'CHEYYAR',36),(281,'JAMUNAMARATHOOR',36),(282,'KALASAPAKKAM',36),(283,'KILPENNATHUR',36),(284,'POLUR',36),(285,'THANDRAMPET',36),(286,'TIRUVANNAMALAI',36),(287,'VANDAVASI',36),(288,'VEMBAKKAM',36),(289,'ANAICUT',37),(290,'GUDIYATHAM',37),(291,'K V KUPPAM',37),(292,'KATPADI',37),(293,'PERNAMBUT',37),(294,'VELLORE',37),(295,'GINGEE',38),(296,'KANDACHIPURAM',38),(297,'MARAKKANAM',38),(298,'MELMALAIYANUR',38),(299,'THIRUVENNAINALLUR',38),(300,'TINDIVANAM',38),(301,'VANUR',38),(302,'VIKKIRAVANDI',38),(303,'VILUPPURAM',38),(304,'ARUPPUKOTTAI',39),(305,'KARIYAPATTI',39),(306,'RAJAPALAYAM',39),(307,'SATTUR',39),(308,'SIVAKASI',39),(309,'SRIVLLIPUTHUR',39),(310,'TIRUCHULI',39),(311,'VEMBAKKOTTAI',39),(312,'VIRUDHUNAGAR',39),(313,'WATRAP',39);
/*!40000 ALTER TABLE `lookupapi_taluk` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-13 21:13:03
