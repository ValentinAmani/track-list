import FaceSnap from "../../../models/face-snap";

export default async (req, res, next) => {
  try {
    const faceSnaps = await FaceSnap.find();

    return res.status(200).json({
      success: true,
      faceSnaps: faceSnaps,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
