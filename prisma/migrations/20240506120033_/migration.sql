-- CreateTable
CREATE TABLE `sensors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` VARCHAR(50) NOT NULL,
    `detak_jantung` VARCHAR(20) NOT NULL DEFAULT '0',
    `kelembapan_kulit` VARCHAR(20) NOT NULL DEFAULT '0',
    `status_jantung` VARCHAR(100) NOT NULL,
    `status_kulit` VARCHAR(100) NOT NULL,
    `status_stres` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` VARCHAR(50) NOT NULL,
    `nama` VARCHAR(100) NOT NULL,
    `detak_jantung` VARCHAR(20) NOT NULL DEFAULT '0',
    `kelembapan_kulit` VARCHAR(20) NOT NULL DEFAULT '0',
    `status_stres` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Auth` (
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
