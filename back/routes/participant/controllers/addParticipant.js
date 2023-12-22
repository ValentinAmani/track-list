import Participant from "../../../models/participant";

export default async ({ body }, res, next) => {
  try {
    const participant = await Participant.findOne({
      email: body.email,
    });

    if (participant) {
      res.status(401).json({
        success: false,
        message: "Ce participant est déjà dans la liste.",
      });
    }

    await Participant.create({
      firstName: body.firstName,
      name: body.name,
      phone: body.phone,
      email: body.email,
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
