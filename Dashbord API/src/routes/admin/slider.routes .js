const express = require('express');
const routes = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/slider' })
const path = require('path');
const { view, create, details, update, destroy, changeStatus } = require('../../controller/admin/slider.controller');


module.exports = server => {

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/slider')
        },
        filename: function (req, file, cb) {
            extension = (path.extname(file.originalname))
            const uniqueSuffix = Date.now()+extension;
            cb(null, file.fieldname + '-' + uniqueSuffix)
        }
    })

    const uploads = multer({ storage: storage })
    const singleImage = uploads.single('image')
   
    routes.post('/create', singleImage, create);
    routes.post('/view', upload.none(), view);
    routes.post('/details/:id', upload.none(), details);
    routes.put('/update/:id', singleImage, update);
    routes.put('/delete', upload.none(), destroy);
    routes.post('/change-status', upload.none(), changeStatus);

    server.use('/api/admin/slider', routes)
}