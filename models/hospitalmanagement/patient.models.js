import mongoose from 'mongoose';

const patiendSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dignosedWith: {
      type: String,
      required: true,
      description: {
        type: String,
        required: true,
        doctorNote: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Doctor',
        },
      },
    },
    currentDoctor: {
      name: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
    },
    patientAddress: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
      age: Number,
    },
    bloodGroupo: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'rh-'],
    },
    gender: {
      type: String,
      enum: ['Male', 'FEMALE', 'OTHERS'],
    },
    addmitedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patiendSchema);
