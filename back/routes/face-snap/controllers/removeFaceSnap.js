import FaceSnap from "../../../models/face-snap";

export default async ({ user, params }, res, next) => {
  try {
    const faceSnap = await FaceSnap.findOne({
      _id: params.id,
      userId: user._id,
    });

    if (!faceSnap) {
      return res.status(401).json({
        success: false,
        message: "Impossible de supprimer cette face snap.",
      });
    }

    await FaceSnap.deleteOne({ _id: faceSnap._id });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
