/*
  Warnings:

  - Made the column `id_tipo_permiso` on table `Permiso` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Permiso" DROP CONSTRAINT "Permiso_id_tipo_permiso_fkey";

-- AlterTable
ALTER TABLE "Permiso" ALTER COLUMN "id_tipo_permiso" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Permiso" ADD CONSTRAINT "Permiso_id_tipo_permiso_fkey" FOREIGN KEY ("id_tipo_permiso") REFERENCES "Tipo_Permiso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
