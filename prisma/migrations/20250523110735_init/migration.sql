/*
  Warnings:

  - Added the required column `title` to the `Save` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `save` ADD COLUMN `title` VARCHAR(100) NOT NULL;
