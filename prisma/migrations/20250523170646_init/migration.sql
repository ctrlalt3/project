/*
  Warnings:

  - Added the required column `urlArchivo` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `song` ADD COLUMN `urlArchivo` VARCHAR(191) NOT NULL;
