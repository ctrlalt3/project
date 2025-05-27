/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Save` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `songId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
