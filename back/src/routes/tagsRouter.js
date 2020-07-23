const express = require('express');

const router = express.Router({ mergeParams: true });
const { TagController } = require('../controllers/tagController');

router.use(express.json());
router.use(
    express.urlencoded({
        extended: true,
    }),
);

router.post('/', TagController.postTag);
router.get('/', TagController.getAllTag);
router.delete('/:id', TagController.deleteTag);
router.get('/:id', TagController.getOneTag);
router.put('/:id', TagController.putTag);

module.exports = router;
