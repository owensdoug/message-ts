export class Body {
  constructor(private Value: string, private Type: string = "JSON") {}

  get value(): string {
    return this.Value;
  }

  get type(): string {
    return this.Type;
  }
}
