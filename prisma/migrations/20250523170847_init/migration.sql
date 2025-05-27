/*
  Warnings:

  - You are about to drop the column `urlArchivo` on the `song` table. All the data in the column will be lost.
  - Added the required column `fileUrl` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `song` DROP COLUMN `urlArchivo`,
    ADD COLUMN `fileUrl` VARCHAR(191) NOT NULL;
