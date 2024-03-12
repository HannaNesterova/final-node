const {Router} = require('express');
const { getResolution, saveResolution } = require('./ResolutionController');
const router = Router();

router.get('/', getResolution);
router.post('/saveResolution', saveResolution)

module.exports = router;