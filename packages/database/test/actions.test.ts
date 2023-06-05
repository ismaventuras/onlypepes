import { getAllPepes, getPepeById } from "../src/actions";
import { prisma } from "../src";

describe('Seeding the database', () => {
    beforeAll(async () => {
        await prisma.pepe.createMany({
            data: [
                {
                    image: 'url1'
                },
                {
                    image: 'url2'
                },
                {
                    image: 'url3'
                },
                {
                    image: 'url4'
                },
                {
                    id:420,
                    image: 'url5'
                },
            ]
        })
    })

    afterAll(async () => {
        await prisma.$disconnect()
    })

    it('Amount of pepes should be greater than 0', async () => {
        const pepes = await getAllPepes()
        expect(Array.isArray(pepes)).toBe(true);
        expect(pepes.length).toBeGreaterThan(0);
        expect(pepes[0].image).toBeDefined()
    })

    it('Should return an existing pepe', async () => {
        var id = 420;
        const pepe = await getPepeById(id);
        expect(pepe?.id).toBe(id);
    })
    it('Should return null if pepe does not exist', async () => {
        var id = 10_000_000;
        const pepe = await getPepeById(id);
        expect(pepe).toBe(null);
    })
})