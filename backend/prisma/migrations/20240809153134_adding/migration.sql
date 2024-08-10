/*
  Warnings:

  - You are about to drop the column `userId` on the `Machine` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Machine" DROP CONSTRAINT "Machine_userId_fkey";

-- AlterTable
ALTER TABLE "Machine" DROP COLUMN "userId",
ADD COLUMN     "ownerId" INTEGER;

-- AddForeignKey
ALTER TABLE "Machine" ADD CONSTRAINT "Machine_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "User" ADD COLUMN "email" TEXT DEFAULT 'unknown@example.com';
ALTER TABLE "User" ADD COLUMN "phone" TEXT DEFAULT '0000000000';