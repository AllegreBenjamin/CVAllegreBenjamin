-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 11 mai 2020 à 07:46
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `projets_4`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_chef` int(11) NOT NULL,
  `type` varchar(7) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `ingredient` varchar(25) NOT NULL,
  `prix_HT` decimal(10,2) NOT NULL,
  `allergene` varchar(25) NOT NULL,
  `prix_TTC` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `chef_article_fk` (`id_chef`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id`, `id_chef`, `type`, `nom`, `ingredient`, `prix_HT`, `allergene`, `prix_TTC`) VALUES
(1, 1, 'plat', 'Blanquette de veau', 'veau,carotte,champignon', '12.50', 'Blé,céleri,Trace de lait', '13.75'),
(2, 2, 'plat', 'lasagnes bolognaise', 'boeuf,carotte,tomate', '12.50', 'gluten,oeuf,celeri', '13.75'),
(3, 1, 'plat', 'boeuf bourguignon', 'boeuf, carotte,champignon', '12.50', 'blé,celeri,sulfites', '13.75'),
(4, 2, 'plat', 'poulet moutard', 'poulet,champignon,moutard', '12.50', 'celeri,gluten,lactose', '13.75'),
(5, 1, 'dessert', 'moelleux orange', 'orange,farine,beurre', '3.50', 'gluten', '3.85'),
(6, 2, 'dessert', 'fondu choco', 'chocolat,farine,oeuf', '3.50', 'gluten', '3.85'),
(7, 1, 'dessert', 'cookies', 'chocolat,farine,oeuf', '3.50', 'gluten', '3.85'),
(8, 2, 'dessert', 'boules coco', 'coco,farine,oeuf', '3.50', 'gluten', '3.85');

-- --------------------------------------------------------

--
-- Structure de la table `chef`
--

DROP TABLE IF EXISTS `chef`;
CREATE TABLE IF NOT EXISTS `chef` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(15) NOT NULL,
  `login` varchar(20) NOT NULL,
  `password` varchar(32) NOT NULL,
  `description` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `chef`
--

INSERT INTO `chef` (`id`, `nom`, `prenom`, `login`, `password`, `description`) VALUES
(1, 'Blanc', 'Georges', 'chef1', '1234', 'Cum haec taliaque sollicitas eius aures.'),
(2, 'Pic', 'sophie', 'chef2', '1234', 'Cum haec taliaque sollicitas eius aures.');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(20) NOT NULL,
  `password` varchar(32) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(15) NOT NULL,
  `civiliter` varchar(8) NOT NULL,
  `adresse` varchar(38) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id`, `login`, `password`, `nom`, `prenom`, `civiliter`, `adresse`) VALUES
(1, 'client1', '1234', 'allegre', 'benjamin', 'm', '1 bis rue baudina'),
(2, 'client2', '1234', 'Delpuech', 'jennyffer', 'f', '30 rue de paris'),
(3, 'client3', '1234', 'Michel', 'Annick', 'f', '17 rue du teil');

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

DROP TABLE IF EXISTS `commande`;
CREATE TABLE IF NOT EXISTS `commande` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_client` int(11) NOT NULL,
  `id_livreur` int(11) NOT NULL,
  `id_statut_commande` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `statut_commande_commande_fk` (`id_statut_commande`),
  KEY `livreur_commande_fk` (`id_livreur`),
  KEY `client_commande_fk` (`id_client`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `commande`
--

INSERT INTO `commande` (`id`, `id_client`, `id_livreur`, `id_statut_commande`) VALUES
(1, 1, 1, 4),
(2, 2, 1, 4),
(3, 1, 2, 3),
(4, 2, 2, 2),
(5, 1, 2, 1),
(6, 2, 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `facture`
--

DROP TABLE IF EXISTS `facture`;
CREATE TABLE IF NOT EXISTS `facture` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_commande` int(11) NOT NULL,
  `total_HT` decimal(10,2) NOT NULL,
  `total_TTC` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `commande_facture_fk` (`id_commande`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `facture`
--

INSERT INTO `facture` (`id`, `id_commande`, `total_HT`, `total_TTC`) VALUES
(1, 1, '16.00', '7.35'),
(2, 2, '48.00', '52.80'),
(3, 3, '19.50', '21.45'),
(4, 4, '39.00', '42.90'),
(5, 5, '71.00', '78.10'),
(6, 6, '74.50', '81.95');

-- --------------------------------------------------------

--
-- Structure de la table `ligne_commande`
--

DROP TABLE IF EXISTS `ligne_commande`;
CREATE TABLE IF NOT EXISTS `ligne_commande` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `qts` int(11) NOT NULL,
  `id_commande` int(11) NOT NULL,
  `id_article` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `article_ligne_commande_fk` (`id_article`),
  KEY `commande_ligne_commande_fk` (`id_commande`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `ligne_commande`
--

INSERT INTO `ligne_commande` (`id`, `qts`, `id_commande`, `id_article`) VALUES
(1, 1, 1, 4),
(2, 1, 1, 8),
(3, 2, 2, 4),
(4, 1, 2, 3),
(5, 3, 2, 7),
(6, 1, 3, 2),
(7, 2, 3, 6),
(8, 2, 4, 1),
(9, 4, 4, 5),
(10, 3, 5, 3),
(11, 3, 5, 8),
(12, 2, 5, 4),
(13, 2, 5, 7),
(14, 2, 6, 2),
(15, 2, 6, 5),
(16, 3, 6, 1),
(17, 3, 6, 6);

-- --------------------------------------------------------

--
-- Structure de la table `livreur`
--

DROP TABLE IF EXISTS `livreur`;
CREATE TABLE IF NOT EXISTS `livreur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(20) NOT NULL,
  `password` varchar(32) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(15) NOT NULL,
  `civiliter` varchar(8) NOT NULL,
  `adresse` varchar(38) NOT NULL,
  `position` varchar(38) NOT NULL,
  `id_statut_livreur` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `statut_livreur_livreur_fk` (`id_statut_livreur`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `livreur`
--

INSERT INTO `livreur` (`id`, `login`, `password`, `nom`, `prenom`, `civiliter`, `adresse`, `position`, `id_statut_livreur`) VALUES
(1, 'livreur1', '1234', 'richaud', 'eric', 'm', '1 place comble', '30 rue julien', 1),
(2, 'livreur2', '1234', 'smich', 'tom', 'm', '1 rue segnieu', '4 rue mars', 1);

-- --------------------------------------------------------

--
-- Structure de la table `menu_jour`
--

DROP TABLE IF EXISTS `menu_jour`;
CREATE TABLE IF NOT EXISTS `menu_jour` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `num_plat` int(11) NOT NULL,
  `num_dessert` int(11) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `num_dessert` (`num_dessert`),
  KEY `num_plat` (`num_plat`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `menu_jour`
--

INSERT INTO `menu_jour` (`id`, `num_plat`, `num_dessert`, `date`) VALUES
(1, 4, 8, '2020-05-11'),
(2, 3, 7, '2020-05-11'),
(3, 2, 6, '2020-05-12'),
(4, 1, 5, '2020-05-12'),
(5, 3, 8, '2020-05-13'),
(6, 4, 7, '2020-05-13'),
(7, 2, 5, '2020-05-14'),
(8, 1, 6, '2020-05-14');

-- --------------------------------------------------------

--
-- Structure de la table `statut_commande`
--

DROP TABLE IF EXISTS `statut_commande`;
CREATE TABLE IF NOT EXISTS `statut_commande` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(10) NOT NULL,
  `description` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `statut_commande`
--

INSERT INTO `statut_commande` (`id`, `nom`, `description`) VALUES
(1, 'PREPA', 'en cours de validation'),
(2, 'VALIDER', 'payment fait, recherche livreur dispo'),
(3, 'EnLIVR', 'en livraison'),
(4, 'LIVRER', 'commande livraison faite');

-- --------------------------------------------------------

--
-- Structure de la table `statut_livreur`
--

DROP TABLE IF EXISTS `statut_livreur`;
CREATE TABLE IF NOT EXISTS `statut_livreur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(10) NOT NULL,
  `description` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `statut_livreur`
--

INSERT INTO `statut_livreur` (`id`, `nom`, `description`) VALUES
(1, 'DISPO', 'le livreur attend d\'être missioné'),
(2, 'InDISPO', 'le livreur non connecter'),
(3, 'EnLIVRE', 'le livreur en livraison');

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

DROP TABLE IF EXISTS `stock`;
CREATE TABLE IF NOT EXISTS `stock` (
  `id_article` int(11) NOT NULL,
  `id_livreur` int(11) NOT NULL,
  `qts_article` int(11) NOT NULL,
  KEY `article_stock_fk` (`id_article`),
  KEY `livreur_stock_fk` (`id_livreur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `stock`
--

INSERT INTO `stock` (`id_article`, `id_livreur`, `qts_article`) VALUES
(1, 1, 2),
(1, 2, 4),
(2, 1, 1),
(2, 2, 2),
(3, 1, 4),
(3, 2, 2),
(4, 1, 1),
(4, 2, 3),
(5, 2, 3),
(5, 1, 2),
(6, 1, 3),
(6, 2, 1),
(7, 1, 3),
(7, 2, 2),
(8, 1, 2),
(8, 2, 4);

-- --------------------------------------------------------

--
-- Structure de la table `stock_livreur`
--

DROP TABLE IF EXISTS `stock_livreur`;
CREATE TABLE IF NOT EXISTS `stock_livreur` (
  `id_article` int(11) NOT NULL,
  `id_livreur` int(11) NOT NULL,
  `qts_article` int(11) NOT NULL,
  KEY `article_stock_livreur_fk` (`id_article`),
  KEY `livreur_stock_livreur_fk` (`id_livreur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `stock_livreur`
--

INSERT INTO `stock_livreur` (`id_article`, `id_livreur`, `qts_article`) VALUES
(1, 1, 2),
(1, 2, 4),
(2, 1, 1),
(2, 2, 2),
(3, 1, 4),
(3, 2, 2),
(4, 1, 1),
(4, 2, 3),
(5, 1, 2),
(5, 2, 3),
(6, 1, 3),
(6, 2, 1),
(7, 1, 3),
(7, 2, 2),
(8, 1, 2),
(8, 2, 4);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `chef_article_fk` FOREIGN KEY (`id_chef`) REFERENCES `chef` (`id`);

--
-- Contraintes pour la table `commande`
--
ALTER TABLE `commande`
  ADD CONSTRAINT `client_commande_fk` FOREIGN KEY (`id_client`) REFERENCES `client` (`id`),
  ADD CONSTRAINT `livreur_commande_fk` FOREIGN KEY (`id_livreur`) REFERENCES `livreur` (`id`),
  ADD CONSTRAINT `statut_commande_commande_fk` FOREIGN KEY (`id_statut_commande`) REFERENCES `statut_commande` (`id`);

--
-- Contraintes pour la table `facture`
--
ALTER TABLE `facture`
  ADD CONSTRAINT `commande_facture_fk` FOREIGN KEY (`id_commande`) REFERENCES `commande` (`id`);

--
-- Contraintes pour la table `ligne_commande`
--
ALTER TABLE `ligne_commande`
  ADD CONSTRAINT `article_ligne_commande_fk` FOREIGN KEY (`id_article`) REFERENCES `article` (`id`),
  ADD CONSTRAINT `commande_ligne_commande_fk` FOREIGN KEY (`id_commande`) REFERENCES `commande` (`id`);

--
-- Contraintes pour la table `livreur`
--
ALTER TABLE `livreur`
  ADD CONSTRAINT `statut_livreur_livreur_fk` FOREIGN KEY (`id_statut_livreur`) REFERENCES `statut_livreur` (`id`);

--
-- Contraintes pour la table `menu_jour`
--
ALTER TABLE `menu_jour`
  ADD CONSTRAINT `num_dessert` FOREIGN KEY (`num_dessert`) REFERENCES `article` (`id`),
  ADD CONSTRAINT `num_plat` FOREIGN KEY (`num_plat`) REFERENCES `article` (`id`);

--
-- Contraintes pour la table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `article_stock_fk` FOREIGN KEY (`id_article`) REFERENCES `article` (`id`),
  ADD CONSTRAINT `livreur_stock_fk` FOREIGN KEY (`id_livreur`) REFERENCES `livreur` (`id`);

--
-- Contraintes pour la table `stock_livreur`
--
ALTER TABLE `stock_livreur`
  ADD CONSTRAINT `article_stock_livreur_fk` FOREIGN KEY (`id_article`) REFERENCES `article` (`id`),
  ADD CONSTRAINT `livreur_stock_livreur_fk` FOREIGN KEY (`id_livreur`) REFERENCES `article` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
