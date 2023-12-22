import FaceSnap from "../../../models/face-snap";

export default async ({ user, body }, res, next) => {
  try {
    const payload = {
      userId: user._id,
      title: body.title,
      description: body.description,
      imageUrl: body.imageUrl,
      location: body.location,
    };

    const faceSnapFind = await FaceSnap.findOne(payload);

    if (faceSnapFind) {
      return res.status(401).json({
        success: false,
        message: "Cette face snap existe déjà.",
      });
    }

    const faceSnap = await FaceSnap.create(payload);

    const newFaceSnap = await FaceSnap.findOne({ _id: faceSnap._id }).populate(
      "userId"
    );

    return res.status(201).json({
      success: true,
      faceSnap: newFaceSnap,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
