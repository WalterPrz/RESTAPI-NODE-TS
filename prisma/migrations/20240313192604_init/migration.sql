-- CreateTable
CREATE TABLE "Tipo_Permiso" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tipo_Permiso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permiso" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "id_tipo_permiso" INTEGER,

    CONSTRAINT "Permiso_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tipo_Permiso_nombre_key" ON "Tipo_Permiso"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Permiso_nombre_key" ON "Permiso"("nombre");

-- AddForeignKey
ALTER TABLE "Permiso" ADD CONSTRAINT "Permiso_id_tipo_permiso_fkey" FOREIGN KEY ("id_tipo_permiso") REFERENCES "Tipo_Permiso"("id") ON DELETE SET NULL ON UPDATE CASCADE;
