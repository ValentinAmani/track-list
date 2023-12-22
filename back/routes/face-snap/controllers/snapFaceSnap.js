import FaceSnap from "../../../models/face-snap";

export default async ({ params, body }, res, next) => {
  try {
    const faceSnap = await FaceSnap.findOne({ _id: params.id });

    await FaceSnap.updateOne(
      { _id: faceSnap.id },
      {
        $set: {
          snaps:
            body.snapType === "snap" ? faceSnap.snaps + 1 : faceSnap.snaps - 1,
        },
      }
    );

    const newFaceSnap = await FaceSnap.findOne({ _id: faceSnap.id });

    return res.status(200).json({
      success: true,
      faceSnap: newFaceSnap,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
