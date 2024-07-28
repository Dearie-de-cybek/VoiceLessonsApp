const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const path = require("path");

const saveCourse = async (req, res, next) => {
  const { title, description, content } = req.body;
  const audio = req.files.audio ? req.files.audio[0].path : null;
  const video = req.files.video ? req.files.video[0].path : null;

  try {
    const newMedia = await prisma.media.create({
      data: {
        title,
        description,
        audio,
        video,
        content,
      },
    });

    res.status(201).json(newMedia);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
};

const editCourse = async (req, res, next) => {
    
}

module.exports = { saveCourse };