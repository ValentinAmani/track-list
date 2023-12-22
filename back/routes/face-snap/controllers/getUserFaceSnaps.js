import FaceSnap from "../../../models/face-snap";

export default async ({ user }, res, next) => {
  try {
    const faceSnaps = await FaceSnap.find({ userId: user._id });

    return res.status(200).json({
      success: true,
      faceSnaps: faceSnaps,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
