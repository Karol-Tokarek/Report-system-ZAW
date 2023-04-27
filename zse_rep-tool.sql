-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Czas generowania: 19 Mar 2023, 20:45
-- Wersja serwera: 8.0.32-0ubuntu0.20.04.2
-- Wersja PHP: 7.4.3-4ubuntu2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `zse_rep-tool`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `rt_categories`
--

CREATE TABLE `rt_categories` (
  `id` int NOT NULL,
  `pub` int NOT NULL DEFAULT '0',
  `name` varchar(128) COLLATE utf8mb4_polish_ci NOT NULL,
  `desc` varchar(128) COLLATE utf8mb4_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `rt_conf`
--

CREATE TABLE `rt_conf` (
  `id` int NOT NULL,
  `key` varchar(16) COLLATE utf8mb4_polish_ci NOT NULL,
  `val` varchar(32) COLLATE utf8mb4_polish_ci NOT NULL,
  `desc` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `rt_conf`
--

INSERT INTO `rt_conf` (`id`, `key`, `val`, `desc`) VALUES
(1, 'reportBy', 'guest', '{guest|user} whos able to report a submission'),
(2, 'reportTo', '{file,base}', '{file,base,email} where to store te reported submission'),
(3, 'reportConfirm', 'true', '{true|false} do send e-mail confirmation of the report submission');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `rt_submissions`
--

CREATE TABLE `rt_submissions` (
  `id` int NOT NULL,
  `id_author` int NOT NULL,
  `unit` varchar(5) COLLATE utf8mb4_polish_ci NOT NULL,
  `surname` varchar(32) COLLATE utf8mb4_polish_ci NOT NULL,
  `name` varchar(16) COLLATE utf8mb4_polish_ci NOT NULL,
  `email` varchar(64) COLLATE utf8mb4_polish_ci NOT NULL,
  `title` varchar(64) COLLATE utf8mb4_polish_ci NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `rt_units`
--

CREATE TABLE `rt_units` (
  `id` int NOT NULL,
  `yos` int NOT NULL COMMENT 'year of start',
  `name` varchar(5) COLLATE utf8mb4_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `rt_units`
--

INSERT INTO `rt_units` (`id`, `yos`, `name`) VALUES
(1, 2022, '1td'),
(2, 2022, '1tf'),
(3, 2021, '2td'),
(4, 2021, '2tp'),
(5, 2020, '3tp'),
(6, 2020, '3tr'),
(7, 2019, '4dt4'),
(8, 2019, '4dt5'),
(9, 2019, '4et5'),
(10, 2019, '4pt4'),
(11, 2019, '4pt5');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `rt_categories`
--
ALTER TABLE `rt_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `rt_conf`
--
ALTER TABLE `rt_conf`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `rt_submissions`
--
ALTER TABLE `rt_submissions`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `rt_units`
--
ALTER TABLE `rt_units`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `rt_categories`
--
ALTER TABLE `rt_categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `rt_conf`
--
ALTER TABLE `rt_conf`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `rt_submissions`
--
ALTER TABLE `rt_submissions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `rt_units`
--
ALTER TABLE `rt_units`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
