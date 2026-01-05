// const express = require('express');
// const routes = express.Router();
// const multer = require('multer')
// const upload = multer({ dest: 'uploads/users' })
// const path = require('path');
// const {register,login, viewProfile, changePassword, updateProfile, forgotPassword, resetPassword} = require('../../controller/admin/user.controller');


// module.exports = server => {

//     const storage = multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, 'uploads/categories')
//         },
//         filename: function (req, file, cb) {
//             extension = (path.extname(file.originalname))
//             const uniqueSuffix = Date.now() + extension;
//             cb(null, file.fieldname + '-' + uniqueSuffix)
//         }
//     })

//     const uploads = multer({ storage: storage })
//     const singleImage = uploads.single('image')

//     routes.post('/register', upload.none(), register);

//     // routes.post('/login', upload.none(), login);

//     // routes.post('/view-profile', upload.none(), viewProfile);

//     // routes.put('/change-password', upload.none(), changePassword);

//     // routes.put('/update-profile', singleImage, updateProfile);

//     // routes.post('/forgot-password', upload.none(), forgotPassword);

//     // routes.put('/reset-password', upload.none(), resetPassword);

//     server.use('/api/website/user', routes)
// }