const router = require('express').Router();

router.get('/', (req, res) => {res.json({info : `employee route`})});

module.exports = router;