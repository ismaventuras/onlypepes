import { prisma } from ".";

import type { Pepe } from "@prisma/client";

const DEFAULT_PEPES = Array.from({length:8798}, (_,index) => {
  const id = ++index;
  const image = `https://cdn.onlypepes.xyz/images/${id}.jpg`
  return {
      id,
      image
  }
}) as Array<Pepe>



(async () => {
  try {
    await prisma.pepe.createMany({
      data:DEFAULT_PEPES,
      skipDuplicates:true
    })

  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
