-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 13 mars 2026 à 07:51
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `foodirect`
--

-- --------------------------------------------------------

--
-- Structure de la table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) DEFAULT '/assets/default.png',
  `category` enum('plat','boisson','dessert','extra') DEFAULT 'plat',
  `available` tinyint(1) DEFAULT 1,
  `rating` decimal(2,1) DEFAULT 5.0,
  `note` text DEFAULT NULL,
  `featured` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `menu`
--

INSERT INTO `menu` (`id`, `name`, `description`, `price`, `image`, `category`, `available`, `rating`, `note`, `featured`, `created_at`, `updated_at`) VALUES
(1, 'Pack Banger', 'Riz + Hors d\'oeuvres chaud + lapin/poulet bicyclette + wassa wassa + 2 ailerons + Chawarma viande', 10000.00, '/assets/3.png', 'plat', 1, 5.0, NULL, 0, '2026-03-07 19:54:22', '2026-03-07 20:31:50'),
(2, 'Sauce Gbota Royal (tête de mouton)', 'Avec Akassa ou Piron', 5000.00, '/assets/4.png', 'plat', 1, 5.0, NULL, 0, '2026-03-07 19:54:22', '2026-03-07 20:31:54'),
(4, 'Telibo avec sauce gombo', 'Avec telibo ou Akassa', 3000.00, '/assets/3.png', 'plat', 1, 5.0, NULL, 0, '2026-03-07 19:54:22', '2026-03-07 19:54:22'),
(5, 'Agbeli', 'Avec sauce gombo ou sauce mouton fromage', 3000.00, '/assets/4.png', 'plat', 1, 5.0, NULL, 0, '2026-03-07 19:54:22', '2026-03-07 22:04:05'),
(6, 'Sauce Mouton', 'Avec Telibo ou Akassa ou Agbeli', 3000.00, '/assets/5.png', 'plat', 1, 5.0, NULL, 0, '2026-03-07 19:54:22', '2026-03-07 19:54:22'),
(7, 'Sauce Gombo Fretri gboman', 'Avec Agbeli ou telibo ou akassa', 3000.00, '/assets/3.png', 'plat', 1, 5.0, NULL, 0, '2026-03-07 19:54:22', '2026-03-07 19:54:22'),
(8, 'Hors d\'oeuvres à Chaud', 'Avec du pain', 3000.00, '/assets/4.png', 'plat', 1, 5.0, NULL, 0, '2026-03-07 19:54:22', '2026-03-07 21:06:23'),
(9, 'Attieke', 'Avec poulet bicyclette braisé ou lapin braisé', 3000.00, '/assets/5.png', 'plat', 1, 5.0, '', 1, '2026-03-07 19:54:22', '2026-03-07 21:18:41'),
(10, 'Frites avec aloco', 'Avec poulet bicyclette braisé ou lapin braisé', 3000.00, '/assets/3.png', 'plat', 1, 5.0, 'Le plat avec le tilapia est à partir de 3500', 0, '2026-03-07 19:54:22', '2026-03-07 21:24:56'),
(11, 'Poulet bicyclette braisé Complet', 'Poulet entier braisé sans accompagnement', 6000.00, '/assets/4.png', 'plat', 1, 5.0, NULL, 0, '2026-03-07 19:54:22', '2026-03-07 19:54:22'),
(12, 'Wassa wassa', 'Avec poulet bicyclette braisé ou lapin braisé', 3000.00, '/assets/5.png', 'plat', 1, 5.0, 'Le plat avec le tilapia est à partir de 3500', 0, '2026-03-07 19:54:22', '2026-03-07 19:54:22'),
(13, 'Chawarma du chef', 'Viande de boeuf et fromage fondant', 3500.00, '/assets/3.png', 'plat', 1, 5.0, NULL, 1, '2026-03-07 19:54:22', '2026-03-07 21:00:13'),
(14, 'Chawarma standard', 'Avec Viande de bœuf', 2000.00, '/assets/4.png', 'plat', 1, 5.0, NULL, 0, '2026-03-07 19:54:22', '2026-03-07 21:55:19'),
(15, 'Riz au gras', 'Avec poulet bicyclette ou lapin braisé', 3000.00, '/assets/5.png', 'plat', 1, 5.0, 'Le plat avec le tilapia est à partir de 3500', 0, '2026-03-07 19:54:22', '2026-03-07 19:54:22'),
(18, 'Portions frites', 'Portions de frites, aloko, ou de riz', 1000.00, '/assets/2.png', 'extra', 1, 5.0, NULL, 0, '2026-03-07 19:54:22', '2026-03-07 19:54:22'),
(19, 'test', 'test', 150.00, '/uploads/menu/img2-1772921024687-133707202.jpeg', 'plat', 1, 5.0, NULL, 1, '2026-03-07 22:03:44', '2026-03-07 22:04:01');

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `customer_phone` varchar(20) NOT NULL,
  `customer_address` text NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `status` enum('en_attente','confirmee','en_preparation','en_livraison','livree','annulee') DEFAULT 'en_attente',
  `payment_method` enum('especes','mobile_money','carte') DEFAULT 'especes',
  `payment_status` enum('en_attente','payee','echouee') DEFAULT 'en_attente',
  `notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `role` enum('admin','staff','customer') DEFAULT 'customer',
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `role`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Admin FOODIRECT', 'admin@foodirect.com', '$2a$10$x6PGyAp2Y9dfm0JElibUiuESw4xnfGPDkocAZY4kP02HD/u3NEwEy', '+2290191260434', 'admin', 1, '2026-03-07 19:54:22', '2026-03-07 19:54:22');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `menu_id` (`menu_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
