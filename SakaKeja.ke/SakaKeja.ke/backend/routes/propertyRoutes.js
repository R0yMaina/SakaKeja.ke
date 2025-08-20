const express = require('express');
const {
  getProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
  uploadPropertyPhoto
} = require('../controllers/propertyController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .get(getProperties)
  .post(protect, createProperty);

router
  .route('/:id')
  .get(getProperty)
  .put(protect, updateProperty)
  .delete(protect, deleteProperty);

router.route('/:id/photo').put(protect, uploadPropertyPhoto);

module.exports = router;