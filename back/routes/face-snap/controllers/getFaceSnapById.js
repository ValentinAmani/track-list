import FaceSnap from "../../../models/face-snap";

export default async ({ params }, res, next) => {
  try {
    const faceSnap = await FaceSnap.findOne({ _id: params.id }).populate(
      "userId"
    );

    if (!faceSnap) {
      return res.status(400).json({
        success: false,
        message: "Face snap introuvable.",
      });
    }

    return res.status(200).json({
      success: true,
      faceSnap: faceSnap,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
