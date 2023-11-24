import Participant from "../../../models/participant";

export default async (req, res, next) => {
  try {
    const participant = await Participant.findOne({
      email: req.body.email,
    });

    if (participant) {
      res.status(400).json({
        success: false,
        message: "Ce participant est déjà dans la liste.",
      });
    }

    await Participant.create({
      firstName: req.body.firstName,
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
    });

    res.status(201).json({
      success: true,
      message: "Participant enregistré.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors de l'enregistrement.",
    });
  }
};
