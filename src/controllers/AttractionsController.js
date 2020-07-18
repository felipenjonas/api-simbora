const connection = require('../database/connection');


module.exports = {
    async get_all(req, res, next) {
        try {
            const attractions = await connection('attractions').select('*')

            return res.send(attractions);
        } catch (error) {
            next(error)
        }
    },

    async create(req, res, next) {
        try {
            const { 
                category,
                attraction_name,
                link_attraction,
                total_assessment,
                excellent_score,
                great_score,
                fair_score,
                bad_score,
                horrible_score,
                address,
                web_site_external,
                phone,
                source_url
            } = req.body

            const create_attraction = await connection('attractions').insert({
                category,
                attraction_name,
                link_attraction,
                total_assessment,
                excellent_score,
                great_score,
                fair_score,
                bad_score,
                horrible_score,
                address,
                web_site_external,
                phone,
                source_url
            });

            

            return res.json(create_attraction)


        } catch (error) {
            next(error)
        }
    }, 
    async selectByCategory(req, res, next) {
        try {

            const { category } = req.params;

           const select_category = await connection('attractions')
            .from('attractions')
            .select('*')   
            .where('category',category);
            
            if (select_category==false) {
                return res.send("Categoria não existe").status(404)  
            }

            console.log(`attraction on type category:|${category}| - listed`);
    
            return res.send(select_category);
            

        } catch (error) {

            next(error);
        }
    },
    async deleteById(req, res, next) {
        try {
            const {id}= req.params;

            const attraction = await connection('attractions').where('id', id).delete();
            
            console.log(`attraction with ID: ${id}: Deleted from database`);
            return res.status(204).send();

        } catch (error) {
            next(error)
        }
    }


}