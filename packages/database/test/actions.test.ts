import { getPepeById } from "../dist";
import { getAllPepes } from "../src/actions";


describe('Seeding the database', ()=> {    
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
        var id = 10_000;
        const pepe = await getPepeById(id);        
        expect(pepe).toBe(null);        
    })
})