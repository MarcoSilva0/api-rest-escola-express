import multer from 'multer';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('photo');

class UploadController {
  async store(req, res) {
    return upload(req, res, (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      return res.json(req.file);
    });
  }
}

export default new UploadController();
