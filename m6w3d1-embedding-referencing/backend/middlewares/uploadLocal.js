import multer from 'multer';
import path from 'node:path';

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, callback) => {
        callback(null, Date.now() + path.extname(file.originalname));
    },
});

const uploadLocal = multer({ storage });

export default uploadLocal;
