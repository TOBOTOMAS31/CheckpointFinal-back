const express = require('express');

const router = express.Router({ mergeParams: true });
const { PicsController } = require('../controllers/picsController');

router.use(express.json());
router.use(
    express.urlencoded({
        extended: true,
    }),
);

router.post('/', PicsController.postPic);
router.get('/', PicsController.getAllPics);
router.put('/:id', PicsController.putPic);
router.delete('/:id', PicsController.deletePic);
router.get('/:id', PicsController.getOnePic);

module.exports = router;
