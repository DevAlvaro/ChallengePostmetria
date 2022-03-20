-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 20, 2022 at 05:39 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `postdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `login` varchar(50) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  `followers` int(11) NOT NULL,
  `following` int(11) NOT NULL,
  `repos` int(11) NOT NULL,
  `created` date NOT NULL,
  `bio` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`login`, `avatar`, `url`, `followers`, `following`, `repos`, `created`, `bio`) VALUES
('7879', 'https://avatars.githubusercontent.com/u/16571902?v=4', 'https://github.com/7879', 3, 0, 3, '2016-01-06', ''),
('alvaroDev', 'https://avatars.githubusercontent.com/u/10871938?v=4', 'https://github.com/alvaroDev', 0, 0, 0, '2015-02-05', ''),
('DevAlvaro', 'https://avatars.githubusercontent.com/u/65177369?v=4', 'https://github.com/DevAlvaro', 10, 10, 6, '2020-05-11', 'Information System student and a Computer Technician. Starting in a journey to become a Full Stack Dev!');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`login`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
