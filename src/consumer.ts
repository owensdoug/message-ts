import { Message } from "./message";

export interface Consumer {
  acknowledge(message: Message): void;
  reject(message: Message, requeue: boolean): void;
  purge(): void;
  receive(timeout: number): Message[];
  requeue(message: Message, timeout: number): void;
}

export class Consumer implements Consumer {
  constructor(private Topic: string) {}
}
