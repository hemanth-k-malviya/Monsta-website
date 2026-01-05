const express = require('express');
const routes = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/products' })
const path = require('path');
const {  view, create, details, update, destroy, changeStatus, viewColors, viewSubSubCategory, viewMaterials } = require('../../controller/admin/product.controller');
const { viewSubCategory } = require('../../controller/admin/subSubCategory.controller');
const { viewCategory } = require('../../controller/admin/subCategory.controller');



module.exports = server => {

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/products')
        },
        filename: function (req, file, cb) {
            extension = (path.extname(file.originalname))
            const uniqueSuffix = Date.now() + extension;
            cb(null, file.fieldname + '-' + uniqueSuffix)
        }
    })

    const uploads = multer({ storage: storage })
    const singleImage = uploads.single('image')
    const imageUploads = uploads.fields([{ name: 'image', maxCount: 1 }, { name: 'images', maxCount: 8 }])

    routes.post('/view-materials', upload.none(), viewMaterials);

    routes.post('/view-colors', upload.none(), viewColors);

    routes.post('/view-parent-category', upload.none(), viewCategory);

    routes.post('/view-sub-category', upload.none(), viewSubCategory);

    routes.post('/view-sub-sub-category', upload.none(), viewSubSubCategory);

    routes.post('/create', imageUploads, create);

    routes.post('/view', upload.none(), view);

    routes.post('/details/:id', upload.none(), details);

    routes.put('/update/:id', imageUploads, update);

    routes.put('/delete', upload.none(), destroy);

    routes.post('/change-status', upload.none(), changeStatus);

    server.use('/api/admin/products', routes)
}