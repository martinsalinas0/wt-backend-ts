import { Document, model, Model, Schema } from "mongoose";
import { IUser } from "./users.models";
import { UserRole } from "../utils/types";

export interface IAdminUser extends Document {
  userInfo: IUser["_id"];
  role: UserRole;
  adminCheck: boolean;
}

const AdminUserSchema: Schema<IAdminUser> = new Schema({
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
  adminCheck: {
    required: true,
    default: false,
    type: Boolean,
  },
});

const AdminUser: Model<IAdminUser> = model<IAdminUser>(
  "AdminUser",
  AdminUserSchema
);
