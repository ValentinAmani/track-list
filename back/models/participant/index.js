import mongoose, { Schema } from "mongoose";

const participantSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("Participant", participantSchema);

export const schema = model.schema;
export default model;
