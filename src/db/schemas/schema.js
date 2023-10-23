import { Schema } from "mongoose";

const DataSchema = new Schema(
  {
    ID: {
      type: String,
      required: true,
    },
    Text: {
      type: String,
      required: true,
    },
  },
  {
    collection: "Data",
    timestamps: true,
  }
);

const logSchema = new Schema(
  {
    Ip: {
      type: String,
      required: false,
    },
    ID: {
      type: String,
      required: true,
    },
    Text: {
      type: String,
      required: true,
    },

  },
  {
    collection: "Log",
    timestamps: true,
  }
);

export { DataSchema, logSchema };
