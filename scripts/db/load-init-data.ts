import fs from 'fs/promises'
import {PrismaClient} from '@prisma/client'
import path from 'path'
const prisma = new PrismaClient()
const INIT_DATA_PATH = path.join('scripts','db', 'init_data', 'init_pepes.json')

async function loadInitData(){
    const fileData =  await fs.readFile(INIT_DATA_PATH,'utf-8')
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