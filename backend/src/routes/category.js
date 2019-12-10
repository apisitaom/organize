const router = require('express').Router();

router.get('/', (req, res) => {res.json({info : `category route`})});

module.exports = router;