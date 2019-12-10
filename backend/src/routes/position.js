const router = require('express').Router();

router.get('/', (req, res) => {res.json({info : `position route`})});

module.exports = router;