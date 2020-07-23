const express = require('express');

const router = express.Router({ mergeParams: true });
const { CategoryController } = require('../controllers/categoryController');

router.use(express.json());
router.use(
    express.urlencoded({
        extended: true,
    }),
);

router.post('/', CategoryController.postCategory);
router.put('/:id', CategoryController.putCategory);
router.get('/', CategoryController.getAllCategory);
router.delete('/:id', CategoryController.deleteCategory);
router.get('/:id', CategoryController.getOneCategory);

module.exports = router;
