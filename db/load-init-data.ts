import fs from 'fs/promises'
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

async function loadInitData(){
    const fileData =  await fs.readFile('db/init_data/init_pepes.json','utf-8')
    const data = JSON.parse(fileData)
    const createMany = await prisma.pepe.createMany({
        data,
        skipDuplicates: true
    })
    console.log(createMany)
    if(createMany.count > 0 ){
        console.log('loaded init pepes')
    } else{
        console.log('not pepes has been loaded')
    }
}

loadInitData()    
.then(async () => {
})
.catch(async (e) => {
    console.error(e)
    process.exit(1)
})