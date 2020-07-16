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

           const category = await connection('attractions')
            .select()    
            .where({ category });

            console.log(`attraction on type category:${category} was listed`);

            return res.send(category);

        } catch (error) {

            next(error);
        }
    }


}