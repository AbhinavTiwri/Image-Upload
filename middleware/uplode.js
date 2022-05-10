import path from 'path';

import multer from 'multer';

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/uplode');
    },
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})


var uplode = multer({
    storage : storage,
    fileFilter : (req, file, cb) => {
        if(
            file.mimetype == "image/png" || 
            file.mimetype == "image/jpeg"
        ){
            cb(null, true);
        } else {
            cb(new Error('Not an image! Please upload an image.', 400), false);
        }
    },
    limits:{
        fileSize: 1024 * 1024 * 2
    }

})

export default uplode