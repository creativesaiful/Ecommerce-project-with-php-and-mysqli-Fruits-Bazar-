-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 17, 2021 at 02:09 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_info`
--

CREATE TABLE `admin_info` (
  `admin_id` int(11) NOT NULL,
  `admin_email` varchar(60) NOT NULL,
  `admin_pass` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_info`
--

INSERT INTO `admin_info` (`admin_id`, `admin_email`, `admin_pass`) VALUES
(1, 'admin@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055');

-- --------------------------------------------------------

--
-- Table structure for table `catagory`
--

CREATE TABLE `catagory` (
  `ctg_id` int(11) NOT NULL,
  `ctg_name` varchar(60) NOT NULL,
  `ctg_des` varchar(150) NOT NULL,
  `ctg_status` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `catagory`
--

INSERT INTO `catagory` (`ctg_id`, `ctg_name`, `ctg_des`, `ctg_status`) VALUES
(2, 'Mobile phone', 'Here will show All Mobiles', 1),
(3, 'Mem Collection', 'Here will show Men Collection', 1),
(4, 'Child Collection', 'Here will show Child Collection', 0),
(5, 'Fruits', '', 0),
(6, 'Vegitable', '', 0),
(7, 'Computer', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `pdt_id` int(255) NOT NULL,
  `pdt_name` varchar(200) NOT NULL,
  `pdt_price` int(255) NOT NULL,
  `pdt_des` varchar(250) NOT NULL,
  `pdt_ctg` int(200) NOT NULL,
  `pdt_img` varchar(250) NOT NULL,
  `pdt_status` tinyint(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`pdt_id`, `pdt_name`, `pdt_price`, `pdt_des`, `pdt_ctg`, `pdt_img`, `pdt_status`) VALUES
(1, 'Note 9 Pro', 15000, 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.', 2, 'phone.jpg', 1),
(2, 'Mouse', 150, 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.', 3, 'ratonl.jpg', 1),
(3, 'Redme 5', 18000, 'Latest Phones. Welcome to the Gadgets 360 Latest Phones page. Here, you will find the latest smartphones and feature phones launched across the world.', 2, 'mobile.jpg', 1);

-- --------------------------------------------------------

--
-- Stand-in structure for view `product_info_ctg`
-- (See below for the actual view)
--
CREATE TABLE `product_info_ctg` (
`pdt_id` int(255)
,`pdt_name` varchar(200)
,`pdt_price` int(255)
,`pdt_des` varchar(250)
,`pdt_img` varchar(250)
,`pdt_status` tinyint(5)
,`ctg_id` int(11)
,`ctg_name` varchar(60)
);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(6) NOT NULL,
  `user_name` varchar(60) NOT NULL,
  `user_firstname` varchar(60) NOT NULL,
  `user_lastname` varchar(60) NOT NULL,
  `user_email` varchar(60) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_mobile` int(11) NOT NULL,
  `user_roles` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_firstname`, `user_lastname`, `user_email`, `user_password`, `user_mobile`, `user_roles`) VALUES
(1, 'saiful', ' saiful', ' islam', 'saifulislam@gmail.com', '77a3a8f063308744ab88e8643b399bb0', 1246798, 5);

-- --------------------------------------------------------

--
-- Structure for view `product_info_ctg`
--
DROP TABLE IF EXISTS `product_info_ctg`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `product_info_ctg`  AS SELECT `products`.`pdt_id` AS `pdt_id`, `products`.`pdt_name` AS `pdt_name`, `products`.`pdt_price` AS `pdt_price`, `products`.`pdt_des` AS `pdt_des`, `products`.`pdt_img` AS `pdt_img`, `products`.`pdt_status` AS `pdt_status`, `catagory`.`ctg_id` AS `ctg_id`, `catagory`.`ctg_name` AS `ctg_name` FROM (`products` join `catagory`) WHERE `products`.`pdt_ctg` = `catagory`.`ctg_id` ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_info`
--
ALTER TABLE `admin_info`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `catagory`
--
ALTER TABLE `catagory`
  ADD PRIMARY KEY (`ctg_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pdt_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_name` (`user_name`),
  ADD UNIQUE KEY `user_email` (`user_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_info`
--
ALTER TABLE `admin_info`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `catagory`
--
ALTER TABLE `catagory`
  MODIFY `ctg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `pdt_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
