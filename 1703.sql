-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 06, 2025 at 11:02 AM
-- Server version: 5.7.39
-- PHP Version: 8.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `1703`
--

-- --------------------------------------------------------

--
-- Table structure for table `1703_abud`
--

CREATE TABLE `1703_abud` (
  `Abud_nr` smallint(6) DEFAULT NULL,
  `Heimili_nr` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Eign_nr` smallint(6) DEFAULT NULL,
  `Abud_hndr` smallint(6) DEFAULT NULL,
  `Abud_plus_alnir` smallint(6) DEFAULT NULL,
  `Athugasemd` varchar(243) DEFAULT NULL,
  `Abudarflokkur_nr` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `1703_adilar`
--

CREATE TABLE `1703_adilar` (
  `Adili_nr` mediumint(9) DEFAULT NULL,
  `Adili_nafn` varchar(61) DEFAULT NULL,
  `Ad_flokkur_nr` tinyint(4) DEFAULT NULL,
  `Lysing` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `1703_byli`
--

CREATE TABLE `1703_byli` (
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Logbyli_nr` smallint(6) DEFAULT NULL,
  `Tilheyrir_byli_nr` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `1703_bylisflokkur`
--

CREATE TABLE `1703_bylisflokkur` (
  `Býli_nr` smallint(6) DEFAULT NULL,
  `Bylisflokkur_nr` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `1703_byli_eigandi`
--

CREATE TABLE `1703_byli_eigandi` (
  `Nr` smallint(6) DEFAULT NULL,
  `Adili_nr` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `1703_byli_nofn`
--

CREATE TABLE `1703_byli_nofn` (
  `ID` smallint(6) DEFAULT NULL,
  `Byli_nafn` varchar(28) DEFAULT NULL,
  `Adal_nafn` varchar(5) DEFAULT NULL,
  `Logbyli_nr` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `1703_dyrleiki`
--

CREATE TABLE `1703_dyrleiki` (
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Dyrl_heil_hndr` smallint(6) DEFAULT NULL,
  `Dyrl_plus_alnir` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `1703_eignir`
--

CREATE TABLE `1703_eignir` (
  `Eign_nr` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Adili_nr` mediumint(9) DEFAULT NULL,
  `Eign_hlutfall` decimal(16,15) DEFAULT NULL,
  `Eign_heil_hndr` smallint(6) DEFAULT NULL,
  `Eign_plus_alnir` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `1703_einstaklingar`
--

CREATE TABLE `1703_einstaklingar` (
  `Einst_nr` mediumint(9) DEFAULT NULL,
  `Fullt_nafn` varchar(31) DEFAULT NULL,
  `Fornafn` varchar(17) DEFAULT NULL,
  `Eftirnafn` varchar(20) DEFAULT NULL,
  `Kyn` tinyint(4) DEFAULT NULL,
  `Aldur` tinyint(4) DEFAULT NULL,
  `Kyn_txt` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `1703_heimili`
--

CREATE TABLE `1703_heimili` (
  `Heimili_nr` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Hreppur_nr` smallint(6) DEFAULT NULL,
  `Rodun` smallint(6) DEFAULT NULL,
  `Er_heimili` varchar(5) DEFAULT NULL,
  `Husradandi_einst_nr` mediumint(9) DEFAULT NULL,
  `Husmadur` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `1703_hopar`
--

CREATE TABLE `1703_hopar` (
  `Hopeigandi_nr` smallint(6) DEFAULT NULL,
  `Ad_nr_hops` smallint(6) DEFAULT NULL,
  `Ad_nr_medlims` smallint(6) DEFAULT NULL,
  `Hlutdeild` decimal(17,16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `1703_hreppar`
--

CREATE TABLE `1703_hreppar` (
  `Hreppur_nr` smallint(6) DEFAULT NULL,
  `Sysla_nr` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `1703_hreppar_nofn`
--

CREATE TABLE `1703_hreppar_nofn` (
  `ID` smallint(6) DEFAULT NULL,
  `Hreppur_nr` smallint(6) DEFAULT NULL,
  `Hreppur_nafn` varchar(25) DEFAULT NULL,
  `Adal_nafn` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `1703_logbyli`
--

CREATE TABLE `1703_logbyli` (
  `Logbyli_nr` smallint(6) DEFAULT NULL,
  `Hreppur_nr` smallint(6) DEFAULT NULL,
  `Er_logbyli` varchar(5) DEFAULT NULL,
  `Dyrleiki_heimild` varchar(8) DEFAULT NULL,
  `Dyrleiki_oviss` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `1703_manntal`
--

CREATE TABLE `1703_manntal` (
  `Tilfelli_nr` mediumint(9) DEFAULT NULL,
  `Heimili_nr` smallint(6) DEFAULT NULL,
  `Einst_nr` mediumint(9) DEFAULT NULL,
  `Lysing` varchar(255) DEFAULT NULL,
  `Manntalsflokkur_nr` tinyint(4) DEFAULT NULL,
  `Hstada_nr` smallint(6) DEFAULT NULL,
  `Hjskstada_nr` tinyint(4) DEFAULT NULL,
  `Dag` tinyint(4) DEFAULT NULL,
  `Man` tinyint(4) DEFAULT NULL,
  `Ar` smallint(6) DEFAULT NULL,
  `Athugasemd` varchar(223) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `1703_syslur`
--

CREATE TABLE `1703_syslur` (
  `Sysla_nr` tinyint(4) DEFAULT NULL,
  `Sysla_nafn_langt` varchar(23) DEFAULT NULL,
  `Sysla_nafn_stutt` varchar(18) DEFAULT NULL,
  `Landshluti` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `abudarflokkur`
--

CREATE TABLE `abudarflokkur` (
  `Abudarflokkur_nr` tinyint(4) DEFAULT NULL,
  `Abudarflokkur` varchar(10) DEFAULT NULL,
  `Skyring` varchar(110) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `adferdir`
--

CREATE TABLE `adferdir` (
  `Aðferð` varchar(3) DEFAULT NULL,
  `Stutt skýring` varchar(30) DEFAULT NULL,
  `Ítarleg skýring` varchar(204) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `adili_flokkur`
--

CREATE TABLE `adili_flokkur` (
  `Ad_flokkur_nr` tinyint(4) DEFAULT NULL,
  `Ad_flokkur` varchar(28) DEFAULT NULL,
  `Flokkun1_nr` tinyint(4) DEFAULT NULL,
  `Eignarhaldsflokkun_1` varchar(14) DEFAULT NULL,
  `Flokkun2_nr` tinyint(4) DEFAULT NULL,
  `Eignarhaldsflokkun_2` varchar(13) DEFAULT NULL,
  `Flokkun3_nr` tinyint(4) DEFAULT NULL,
  `Eignarhaldsflokkun_3` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `bl_byli`
--

CREATE TABLE `bl_byli` (
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Byli_nr_BL` varchar(8) DEFAULT NULL,
  `Byli_nafn` varchar(25) DEFAULT NULL,
  `Hreppur_nr` smallint(6) DEFAULT NULL,
  `Dyrl_heil_hdr_1` smallint(6) DEFAULT NULL,
  `Dyrl_plus_alnir_1` smallint(6) DEFAULT NULL,
  `Landsk_1` smallint(6) DEFAULT NULL,
  `Kugildi_1` decimal(16,14) DEFAULT NULL,
  `Dyrl_heil_hdr_2` smallint(6) DEFAULT NULL,
  `Dyrl_plus_alnir_2` smallint(6) DEFAULT NULL,
  `Landsk_2` smallint(6) DEFAULT NULL,
  `Kugildi_2` decimal(17,15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `bl_eigandi_byli`
--

CREATE TABLE `bl_eigandi_byli` (
  `ID` smallint(6) DEFAULT NULL,
  `Eign_nr` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `bl_eignir`
--

CREATE TABLE `bl_eignir` (
  `Eign_nr` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Eig_flokkur` varchar(8) DEFAULT NULL,
  `Hlutfall` decimal(16,15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `bl_hreppar`
--

CREATE TABLE `bl_hreppar` (
  `Hreppur_nr` smallint(6) DEFAULT NULL,
  `Sysla_nr` tinyint(4) DEFAULT NULL,
  `Hreppur_nafn` varchar(26) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `bl_syslur`
--

CREATE TABLE `bl_syslur` (
  `Sysla_nr` tinyint(4) DEFAULT NULL,
  `Sysla_nafn` varchar(23) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `bylisflokkur`
--

CREATE TABLE `bylisflokkur` (
  `Bylisflokkur_nr` tinyint(4) DEFAULT NULL,
  `Bylisflokkur` varchar(12) DEFAULT NULL,
  `Skyring` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `einkunn_tengingar`
--

CREATE TABLE `einkunn_tengingar` (
  `Einkunn` tinyint(4) DEFAULT NULL,
  `Skyring` varchar(92) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_abud`
--

CREATE TABLE `jb_abud` (
  `Abud_nr` smallint(6) DEFAULT NULL,
  `Heimili_nr` smallint(6) DEFAULT NULL,
  `Eign_nr` smallint(6) DEFAULT NULL,
  `Abudarflokkur_nr` tinyint(4) DEFAULT NULL,
  `Abud_hlutfall` decimal(16,15) DEFAULT NULL,
  `Abud_hndr` smallint(6) DEFAULT NULL,
  `Abud_plus_alnir` decimal(16,13) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_adilar`
--

CREATE TABLE `jb_adilar` (
  `Adili_nr` smallint(6) DEFAULT NULL,
  `Adili_nafn` varchar(54) DEFAULT NULL,
  `Ad_flokkur_nr` tinyint(4) DEFAULT NULL,
  `Lysing` varchar(28) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_byli`
--

CREATE TABLE `jb_byli` (
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Logbyli_nr` smallint(6) DEFAULT NULL,
  `Tilheyrir_byli_nr` smallint(6) DEFAULT NULL,
  `Rod_i_heimild` smallint(6) DEFAULT NULL,
  `Skrad_ar` smallint(6) DEFAULT NULL,
  `Lysing_nr` tinyint(4) DEFAULT NULL,
  `Kirkja` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_byli_eigandi`
--

CREATE TABLE `jb_byli_eigandi` (
  `ID` smallint(6) DEFAULT NULL,
  `Adili_nr` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_byli_lysing`
--

CREATE TABLE `jb_byli_lysing` (
  `Lysing_nr` tinyint(4) DEFAULT NULL,
  `Lysing` varchar(23) DEFAULT NULL,
  `Hus` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_byli_nofn`
--

CREATE TABLE `jb_byli_nofn` (
  `ID` smallint(6) DEFAULT NULL,
  `Byli_nafn` varchar(28) DEFAULT NULL,
  `Adal_nafn` varchar(5) DEFAULT NULL,
  `Logbyli_nr` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_dyrleiki`
--

CREATE TABLE `jb_dyrleiki` (
  `ID` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Dyrleiki_oviss` varchar(5) DEFAULT NULL,
  `Dyrl_heil_hdr` decimal(4,1) DEFAULT NULL,
  `Dyrl_plus_alnir` smallint(6) DEFAULT NULL,
  `Landskuld_alnir` decimal(15,12) DEFAULT NULL,
  `Kugildi` decimal(16,14) DEFAULT NULL,
  `Eftir_proportion` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_eignir`
--

CREATE TABLE `jb_eignir` (
  `Eign_nr` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Adili_nr` smallint(6) DEFAULT NULL,
  `Eign_hlutfall` decimal(16,15) DEFAULT NULL,
  `Eign_heil_hdr` decimal(17,14) DEFAULT NULL,
  `Eign_plus_alnir` decimal(4,1) DEFAULT NULL,
  `Byli_eiganda_nr` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_eydibyli`
--

CREATE TABLE `jb_eydibyli` (
  `ID` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Eydi_min` smallint(6) DEFAULT NULL,
  `Eydi_max` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_heimili`
--

CREATE TABLE `jb_heimili` (
  `Heimili_nr` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Husradandi_ad_nr` smallint(6) DEFAULT NULL,
  `Heimilisfolk` decimal(16,14) DEFAULT NULL,
  `Husmadur` varchar(5) DEFAULT NULL,
  `Lysing` varchar(0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_hopar`
--

CREATE TABLE `jb_hopar` (
  `ID` smallint(6) DEFAULT NULL,
  `Ad_nr_hops` smallint(6) DEFAULT NULL,
  `Ad_nr_medlims` smallint(6) DEFAULT NULL,
  `Hlutdeild` decimal(17,16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_hreppar`
--

CREATE TABLE `jb_hreppar` (
  `Hreppur_nr` smallint(6) DEFAULT NULL,
  `Sysla_nr` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_hreppar_nofn`
--

CREATE TABLE `jb_hreppar_nofn` (
  `ID` smallint(6) DEFAULT NULL,
  `Hreppur_nr` smallint(6) DEFAULT NULL,
  `Hreppur_nafn` varchar(26) DEFAULT NULL,
  `Adal_nafn` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_kirkjur`
--

CREATE TABLE `jb_kirkjur` (
  `Kirkjutegund_nr` tinyint(4) DEFAULT NULL,
  `Kirkjutegund_nr_gamalt` tinyint(4) DEFAULT NULL,
  `Kirkjutegund_lysing` varchar(17) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_kugildi`
--

CREATE TABLE `jb_kugildi` (
  `Kugildi_nr` smallint(6) DEFAULT NULL,
  `Abud_nr` smallint(6) DEFAULT NULL,
  `Til_heimili_nr` smallint(6) DEFAULT NULL,
  `Til_adili_nr` smallint(6) DEFAULT NULL,
  `Kugildi` decimal(17,15) DEFAULT NULL,
  `Kugildi_greidsla` smallint(6) DEFAULT NULL,
  `Breyttist_fyrir` smallint(6) DEFAULT NULL,
  `Ar_fra` smallint(6) DEFAULT NULL,
  `Ar_til` smallint(6) DEFAULT NULL,
  `Athugasemd` varchar(97) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_kvikfje`
--

CREATE TABLE `jb_kvikfje` (
  `ID` mediumint(9) DEFAULT NULL,
  `Byli_nr` varchar(4) DEFAULT NULL,
  `Heimili_nr` varchar(4) DEFAULT NULL,
  `Kvikfje_nr` varchar(2) DEFAULT NULL,
  `Fjoldi` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_landskuld`
--

CREATE TABLE `jb_landskuld` (
  `Landskuld_nr` smallint(6) DEFAULT NULL,
  `Abud_nr` smallint(6) DEFAULT NULL,
  `Til_heimili_nr` smallint(6) DEFAULT NULL,
  `Til_ad_nr` smallint(6) DEFAULT NULL,
  `Landskuld` decimal(17,14) DEFAULT NULL,
  `Breyttist_fyrir` smallint(6) DEFAULT NULL,
  `Fra_ari` smallint(6) DEFAULT NULL,
  `Til_ars` smallint(6) DEFAULT NULL,
  `Athugasemd` varchar(146) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_logbyli`
--

CREATE TABLE `jb_logbyli` (
  `Logbyli_nr` smallint(6) DEFAULT NULL,
  `Hreppur_nr` smallint(6) DEFAULT NULL,
  `Er_logbyli` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_manntal`
--

CREATE TABLE `jb_manntal` (
  `Tilfelli_nr` smallint(6) DEFAULT NULL,
  `Adili_nr` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Heimili_nr` smallint(6) DEFAULT NULL,
  `Fra_ari` smallint(6) DEFAULT NULL,
  `Til_ars` smallint(6) DEFAULT NULL,
  `Lysing` varchar(51) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jb_syslur`
--

CREATE TABLE `jb_syslur` (
  `Sysla_nr` tinyint(4) DEFAULT NULL,
  `Sysla_nafn` varchar(18) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kft_adilar`
--

CREATE TABLE `kft_adilar` (
  `Adili_nr` smallint(6) DEFAULT NULL,
  `Adili_nafn` varchar(61) DEFAULT NULL,
  `Ad_flokkur_nr` tinyint(4) DEFAULT NULL,
  `Lysing` varchar(5) DEFAULT NULL,
  `Athugasemd` varchar(152) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kft_byli`
--

CREATE TABLE `kft_byli` (
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Hreppur_nr` smallint(6) DEFAULT NULL,
  `Rod_i_heimild` smallint(6) DEFAULT NULL,
  `Er_byli` varchar(5) DEFAULT NULL,
  `I_eydi` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kft_byli_nofn`
--

CREATE TABLE `kft_byli_nofn` (
  `ID` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Byli_nafn` varchar(35) DEFAULT NULL,
  `Adal_nafn` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kft_eignir`
--

CREATE TABLE `kft_eignir` (
  `Eign_nr` mediumint(9) DEFAULT NULL,
  `Faersla_nr` mediumint(9) DEFAULT NULL,
  `Stada` tinyint(4) DEFAULT NULL,
  `Fjoldi` decimal(18,15) DEFAULT NULL,
  `Kvikfe_nr` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kft_faerslur`
--

CREATE TABLE `kft_faerslur` (
  `Faersla_nr` mediumint(9) DEFAULT NULL,
  `Rodun` mediumint(9) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Heimili_nr` smallint(6) DEFAULT NULL,
  `Uthagi_nr` varchar(1) DEFAULT NULL,
  `Adili_nr` smallint(6) DEFAULT NULL,
  `Skrad_nafn` varchar(62) DEFAULT NULL,
  `Uppfaert_nafn` varchar(61) DEFAULT NULL,
  `Lysing` varchar(40) DEFAULT NULL,
  `Byli_eiganda` varchar(26) DEFAULT NULL,
  `Byli_nanar` varchar(26) DEFAULT NULL,
  `Stadsetning_eiganda` varchar(32) DEFAULT NULL,
  `Vafi` varchar(5) DEFAULT NULL,
  `Ath_Ragnhildur_Arnor` varchar(255) DEFAULT NULL,
  `Ath_Oskar` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kft_heimili`
--

CREATE TABLE `kft_heimili` (
  `Heimili_nr` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Er_heimili` varchar(5) DEFAULT NULL,
  `Husradandi_ad_nr` smallint(6) DEFAULT NULL,
  `Leigukugildi` decimal(2,1) DEFAULT NULL,
  `Leigukyr` decimal(16,14) DEFAULT NULL,
  `Leiguaer` smallint(6) DEFAULT NULL,
  `Daud_kugildi` tinyint(4) DEFAULT NULL,
  `Hlutf_jardar` decimal(2,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kft_hopar`
--

CREATE TABLE `kft_hopar` (
  `ID` smallint(6) DEFAULT NULL,
  `Hopur_ad_nr` smallint(6) DEFAULT NULL,
  `Medlimur_ad_nr` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kft_hreppar`
--

CREATE TABLE `kft_hreppar` (
  `Hreppur_nr` smallint(6) DEFAULT NULL,
  `Sysla_nr` tinyint(4) DEFAULT NULL,
  `Skrad_fra_dag` tinyint(4) DEFAULT NULL,
  `Skrad_fra_man` tinyint(4) DEFAULT NULL,
  `Skrad_til_dag` tinyint(4) DEFAULT NULL,
  `Skrad_til_man` tinyint(4) DEFAULT NULL,
  `Skrad_ar` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kft_kvikfjar_flokkar`
--

CREATE TABLE `kft_kvikfjar_flokkar` (
  `ID` tinyint(4) DEFAULT NULL,
  `Kvikfe_nr` tinyint(4) DEFAULT NULL,
  `Lysing` varchar(18) DEFAULT NULL,
  `Flokkur` varchar(10) DEFAULT NULL,
  `Aldursflokkur` varchar(10) DEFAULT NULL,
  `Malnyta` varchar(5) DEFAULT NULL,
  `Verd` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kft_manntal`
--

CREATE TABLE `kft_manntal` (
  `Tilfelli_nr` smallint(6) DEFAULT NULL,
  `Heimili_nr` smallint(6) DEFAULT NULL,
  `Adili_nr` smallint(6) DEFAULT NULL,
  `Lysing` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kft_stada_kvikfjar`
--

CREATE TABLE `kft_stada_kvikfjar` (
  `Stada_kvikfjar_nr` tinyint(4) DEFAULT NULL,
  `Stada_kvikfjar` varchar(27) DEFAULT NULL,
  `Eigandi_nytir` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kft_syslur`
--

CREATE TABLE `kft_syslur` (
  `Sysla_nr` tinyint(4) DEFAULT NULL,
  `Sysla_nafn` varchar(23) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `manntalsflokkur`
--

CREATE TABLE `manntalsflokkur` (
  `Manntalsflokkur_nr` tinyint(4) DEFAULT NULL,
  `Lysing` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `mt_einstaklingar`
--

CREATE TABLE `mt_einstaklingar` (
  `Einst_nr` mediumint(9) DEFAULT NULL,
  `Fullt_nafn` varchar(29) DEFAULT NULL,
  `Fornafn` varchar(17) DEFAULT NULL,
  `Eftirnafn` varchar(19) DEFAULT NULL,
  `Kyn` tinyint(4) DEFAULT NULL,
  `Aldur` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `mt_heimili`
--

CREATE TABLE `mt_heimili` (
  `Heimili_nr` smallint(6) DEFAULT NULL,
  `Hreppur_nr` smallint(6) DEFAULT NULL,
  `Er_heimili` varchar(5) DEFAULT NULL,
  `Husradandi_einst_nr` mediumint(9) DEFAULT NULL,
  `Heimili_lysing` varchar(255) DEFAULT NULL,
  `Abud_hlutfall` decimal(16,15) DEFAULT NULL,
  `Abud_hndr` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `mt_hreppar`
--

CREATE TABLE `mt_hreppar` (
  `Hreppur_nr` smallint(6) DEFAULT NULL,
  `Hreppur_nr_Olof_G` mediumint(9) DEFAULT NULL,
  `Sysla_nr` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `mt_manntal`
--

CREATE TABLE `mt_manntal` (
  `Tilfelli_nr` mediumint(9) DEFAULT NULL,
  `Rad_nr_Olof_G` decimal(6,1) DEFAULT NULL,
  `Heimili_nr` smallint(6) DEFAULT NULL,
  `Einst_nr` mediumint(9) DEFAULT NULL,
  `Einst_rod` tinyint(4) DEFAULT NULL,
  `Lysing` text,
  `Hstada_nr` smallint(6) DEFAULT NULL,
  `Occ_hisco` varchar(9) DEFAULT NULL,
  `Hjskstada_nr` tinyint(4) DEFAULT NULL,
  `Dag` tinyint(4) DEFAULT NULL,
  `Man` tinyint(4) DEFAULT NULL,
  `Ar` smallint(6) DEFAULT NULL,
  `Manntalsflokkur_nr` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `mt_syslur`
--

CREATE TABLE `mt_syslur` (
  `Sysla_nr` tinyint(4) DEFAULT NULL,
  `Olof_G_sysla_nr` smallint(6) DEFAULT NULL,
  `Sysla_nafn` varchar(23) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tenging_abud`
--

CREATE TABLE `tenging_abud` (
  `ID` mediumint(9) DEFAULT NULL,
  `Abud_nr_1703` smallint(6) DEFAULT NULL,
  `Abud_nr_JB` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tenging_byli`
--

CREATE TABLE `tenging_byli` (
  `ID` smallint(6) DEFAULT NULL,
  `Byli_nr_1703` smallint(6) DEFAULT NULL,
  `Byli_nr_KFT` smallint(6) DEFAULT NULL,
  `Byli_nr_JB` smallint(6) DEFAULT NULL,
  `Byli_nr_BL` smallint(6) DEFAULT NULL,
  `Byli_nr_gamalt` mediumint(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tenging_eignir`
--

CREATE TABLE `tenging_eignir` (
  `ID` smallint(6) DEFAULT NULL,
  `Eign_nr_1703` smallint(6) DEFAULT NULL,
  `Eign_nr_JB` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tenging_einstaklingar_adilar`
--

CREATE TABLE `tenging_einstaklingar_adilar` (
  `ID` mediumint(9) DEFAULT NULL,
  `Einst_nr_1703` mediumint(9) DEFAULT NULL,
  `Einst_nr_Olof_G` int(11) DEFAULT NULL,
  `Einst_nr_MT` mediumint(9) DEFAULT NULL,
  `Ad_nr_1703` mediumint(9) DEFAULT NULL,
  `Ad_nr_gamalt` int(11) DEFAULT NULL,
  `Ad_nr_JB` smallint(6) DEFAULT NULL,
  `Ad_nr_KFT` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tenging_heimili`
--

CREATE TABLE `tenging_heimili` (
  `ID` smallint(6) DEFAULT NULL,
  `Heimili_nr_1703` smallint(6) DEFAULT NULL,
  `Heimili_nr_MT` smallint(6) DEFAULT NULL,
  `Heimili_nr_KFT` smallint(6) DEFAULT NULL,
  `Heimili_nr_Olof_G` bigint(20) DEFAULT NULL,
  `Heimili_nr_JB` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tenging_hreppar`
--

CREATE TABLE `tenging_hreppar` (
  `ID` smallint(6) DEFAULT NULL,
  `Hreppur_nr_1703` smallint(6) DEFAULT NULL,
  `Hreppur_nr_MT` smallint(6) DEFAULT NULL,
  `Hreppur_nr_KFT` smallint(6) DEFAULT NULL,
  `Hreppur_nr_JB` smallint(6) DEFAULT NULL,
  `Hreppur_nr_BL` smallint(6) DEFAULT NULL,
  `Hreppur_nr_gamalt` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tenging_jb_mt_einstaklingar`
--

CREATE TABLE `tenging_jb_mt_einstaklingar` (
  `ID` smallint(6) DEFAULT NULL,
  `Ad_nr_JB` smallint(6) DEFAULT NULL,
  `Einst_nr_MT` mediumint(9) DEFAULT NULL,
  `Einkunn` tinyint(4) DEFAULT NULL,
  `Athugasemd` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tenging_logbyli`
--

CREATE TABLE `tenging_logbyli` (
  `ID` smallint(6) DEFAULT NULL,
  `Logbyli_nr_1703` smallint(6) DEFAULT NULL,
  `Logbyli_nr_JB` smallint(6) DEFAULT NULL,
  `Jord_nr_gamalt` mediumint(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tenging_syslur`
--

CREATE TABLE `tenging_syslur` (
  `ID` tinyint(4) DEFAULT NULL,
  `Sysla_nr_1703` tinyint(4) DEFAULT NULL,
  `Sysla_nr_MT` tinyint(4) DEFAULT NULL,
  `Sysla_nr_JB` tinyint(4) DEFAULT NULL,
  `Sysla_nr_KFT` tinyint(4) DEFAULT NULL,
  `Sysla_nr_BL` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tenging_tilfelli`
--

CREATE TABLE `tenging_tilfelli` (
  `ID` mediumint(9) DEFAULT NULL,
  `Tilfelli_nr_mt` mediumint(9) DEFAULT NULL,
  `Tilfelli_nr_1703` mediumint(9) DEFAULT NULL,
  `Tilfelli_nr_kft` smallint(6) DEFAULT NULL,
  `Tilfelli_nr_jb` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `~TMPCLP24321`
--

CREATE TABLE `~TMPCLP24321` (
  `ID` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL,
  `Adili_nr` smallint(6) DEFAULT NULL,
  `Eiganda_byli_nr` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `~TMPCLP126041`
--

CREATE TABLE `~TMPCLP126041` (
  `ID` mediumint(9) DEFAULT NULL,
  `Tilfelli_nr_mt` mediumint(9) DEFAULT NULL,
  `Tilfelli_nr_1703` mediumint(9) DEFAULT NULL,
  `Tilfelli_nr_kft` smallint(6) DEFAULT NULL,
  `Tilfelli_nr_jb` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `~TMPCLP593431`
--

CREATE TABLE `~TMPCLP593431` (
  `ID` smallint(6) DEFAULT NULL,
  `Adili_nr` smallint(6) DEFAULT NULL,
  `Byli_nr` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
