-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 29, 2022 at 03:54 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_egzaminas`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `group_id`, `user_id`) VALUES
(1, 2, 2),
(2, 2, 2),
(3, 2, 3),
(4, 1, 5),
(5, 3, 5),
(12, 4, 2),
(14, 4, 5),
(15, 2, 4),
(16, 5, 4),
(17, 5, 2),
(19, 3, 1),
(20, 5, 1);


-- --------------------------------------------------------

--
-- Table structure for table `bills`
--

CREATE TABLE `bills` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bills`
--

INSERT INTO `bills` (`id`, `group_id`, `amount`, `description`) VALUES
(1, 1, 30, 'Citybee rental'),
(2, 2, 10, 'Salad bar'),
(3, 2, 100, 'For hotel'),
(4, 3, 20, 'Taxi'),
(5, 3, 200, 'Mini loan'),
(6, 2, 50, 'For dinner'),
(7, 2, 400, 'For flight ticket'),
(8, 2, 20, 'Travel'),
(9, 8, 15, 'Hotel'),
(10, 2, 20, 'Lunch'),
(13, 2, 30, 'Kebabs'),
(14, 2, 25, 'Drinks'),
(15, 3, 25, 'Dinner'),
(16, 3, 40, 'Train tickets'),
(17, 1, 40, 'Car rent'),
(18, 5, 100, 'Drinks'),
(19, 5, 50, 'Fruits'),
(20, 4, 50, 'Medicine'),
(21, 4, 1000, 'Tickets'),
(22, 4, 50, 'Snacks'),
(23, 4, 200, 'Souvenirs'),
(24, 4, 80, 'Glasses'),
(25, 4, 30, 'Deserts'),
(26, 4, 60, 'Slippers'),
(27, 4, 60, 'Car rent');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`) VALUES
(1, 'Trip to Spain'),
(2, 'Going to the Alps'),
(3, 'Dinner in Vilnius'),
(4, 'Trip to Australia'),
(5, 'New Years Party');


-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `reg_timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password`, `reg_timestamp`) VALUES
(1, 'Jonas', 'jonas@yandex.ru', '$2a$10$XgSXQeWwZSy.LieATcGudu66sFbMIqbaqTQaiLHdaGhov6m3.CBSW', '2022-05-26 12:13:20'),
(2, 'Rokas', 'rokas@jonas.lt', '$2a$10$rQSc86IMSpUfoFrvgA0wdePDBlWGKzctFgwOjnBrmCnJ5RkgFShvK', '2022-05-26 12:50:36'),
(3, 'Tomas Ananasas', 'tomas@gmail.com', '$2a$10$z9OpBKlVV4.FM92fRyZ70OSWpYPDUFCMyxjcQrTCRDaEjsCpoxOTO', '2022-05-26 12:51:26'),
(4, 'Petras', 'petras@gmail.com', '$2a$10$bv36QrRE9xHpO0vDqVrQ1OEhLIg4PnbEn04ln4v9YPngeoJ0uUidm', '2022-05-26 12:58:37'),
(5, 'Juozas', 'juozas1@gmail.com', '$2a$10$BYtQV40ThRz7m6JkTXNbf.sW01D8crCIZeMifJDtD0S3rueLvGOPi', '2022-05-26 17:13:12');


--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `bills`
--
ALTER TABLE `bills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
