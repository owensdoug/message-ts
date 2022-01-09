import { Guid } from "guid-typescript";
import { Body } from "./body";
import { Header } from "./header";

export class Message {
  constructor(private Header: Header, private Body: Body) {}

  get header(): Header {
    return this.Header;
  }

  get body(): Body {
    return this.Body;
  }

  get id(): Guid {
    return this.Header.id;
  }
}
