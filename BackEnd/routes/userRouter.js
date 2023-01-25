const Router = require('express');
const {
  registration,
  login,
  updateUserProfile,
} = require('../controllers/userController');
const { generateUploadURL } = require('../controllers/s3BucketController');

const router = new Router();

router.post('/registration', registration);
router.post('/login', login);
router.put('/updateUserProfile', updateUserProfile);

router.get('/s3Url', async (req, res) => {
  const url = await generateUploadURL();
  return res.json({ url });
});

module.exports = router;
