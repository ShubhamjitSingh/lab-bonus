const { index,update } = require('../controllers/ProductController');

module.exports = router => {
    router.get('/products', index);
    router.get('/products/update', update);
};