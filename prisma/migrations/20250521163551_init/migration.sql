-- CreateTable
CREATE TABLE `Song` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `artist` VARCHAR(100) NOT NULL,
    `year` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

