import { Pepe, PrismaClient } from '@prisma/client'
const IMAGES_URL = "https://cdn.onlypepes.xyz/images/"
const currentPepeAmount = 8798
const prisma = new PrismaClient()

async function seedDb() {
    async function init_pepes() {
        const pepes: Pepe[] = []
        // generate a list of pepes from already existing ones
        for (let index = 1; index <= currentPepeAmount; index++) {
            let filename = `${index.toString()}.jpg`
            let uri = `${IMAGES_URL}${filename}`
            pepes.push({ image: uri, id: index })
        }
        const createMany = await prisma.pepe.createMany({
            data: pepes,
            skipDuplicates: true
        })
        console.log(createMany)
        if (createMany.count > 0) {
            console.log('loaded init pepes')
        } else {
            console.log('not pepes has been loaded')
        }
    }
    await init_pepes()

}


seedDb()
    .then(async () => {
    })
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })