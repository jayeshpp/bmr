import { IMember } from "../interfaces/member.interface";

declare module "express-session" {
  interface Session {
    member: IMember
  }
}
