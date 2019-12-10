const router = require('express').Router();

router.get('/', (req, res) => {res.json({info : `object route`})});

module.exports = router;