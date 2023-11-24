import Participant from "../../../models/participant"

export default async (req, res, next) => {
  try {
    const participants = await Participant.find();

    res.status(200).json({
      success: true,
      participants: participants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Une erreure est survenue lors du chargement des données.",
    });
  }
};
