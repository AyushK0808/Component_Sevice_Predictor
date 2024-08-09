-- CreateTable
CREATE TABLE "Machine" (
    "_id" TEXT NOT NULL,
    "manufacture_id" TEXT NOT NULL,
    "machine_type" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Machine_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Machine_manufacture_id_key" ON "Machine"("manufacture_id");

-- AddForeignKey
ALTER TABLE "Machine" ADD CONSTRAINT "Machine_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
