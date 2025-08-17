import { Document, model, Model, Schema } from "mongoose";
import { IUser } from "./users.models";
import { UserRole } from "../utils/types";

export interface IContractorUser extends Document {
  userInfo: IUser["_id"];
  role: UserRole;
  contractorUserCheck: boolean;
}

const ContractorUserSchema: Schema<IContractorUser> = new Schema({
  userInfo: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  role: {
    type: String,
    enum: ["employee", "contractor", "customer", "admin"],
    required: true,
  },
  contractorUserCheck: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const ContractorUser: Model<IContractorUser> = model<IContractorUser>(
  "ContractorUser",
  ContractorUserSchema
);
