import { Guid } from "guid-typescript";
import { Type } from "./type";

export class Header {
  constructor(
    public id: Guid,
    public topic: string,
    public type: Type,
    public timestamp?: Date,
    public correlationId?: Guid,
    public replyTo?: string,
    public contentType?: string
  ) {}
}
