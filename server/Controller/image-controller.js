import File from '../Models/file.js';

export const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const fileObj = {
            path: req.file.path,
            name: req.file.originalname,
        };

        const file = await File.create(fileObj);

        res.status(200).json({
            path: `http://localhost:8000/file/${file._id}`
        });

    } catch (error) {
        console.log("Error in Upload Image", error.message);
        res.status(500).json({ error: error.message });
    }
};

export const getImage = async (req, res) => {
    try {
        const fileId = req.params.fileId;

        const file = await File.findById(fileId);
        if (!file) {
            return res.status(404).json({ error: "File not found" });
        }

        file.downloadCount++;
        await file.save();

        res.download(file.path, file.name);

    } catch (error) {
        console.log("Error in get Image", error.message);
        res.status(500).json({ error: error.message });
    }
};
