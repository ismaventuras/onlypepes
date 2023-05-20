import fs from 'fs/promises'
import { Pepe } from '@prisma/client'
import path from 'path'
//const IMAGES_URL = "https://pepe.ismaelb.dev/images/"
const IMAGES_URL = "https://cdn.onlypepes.xyz/images/"
const INIT_DATA_PATH = path.join('db', 'init_data')
const currentPepeAmount = 8798

async function generateInitData() {
    async function init_pepes() {
        const pepes: Pepe[] = []
        // generate a list of pepes from already existing ones
        for (let index = 1; index <= currentPepeAmount; index++) {
            let filename = `${index.toString()}.jpg`
            let uri = `${IMAGES_URL}${filename}`
            pepes.push({ image: uri, id: index })
        }
        await fs.writeFile(path.join(INIT_DATA_PATH, 'init_pepes.json'), JSON.stringify(pepes, null, 2))
    }
    await init_pepes()

}


generateInitData()
    .then(async () => {
    })
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })