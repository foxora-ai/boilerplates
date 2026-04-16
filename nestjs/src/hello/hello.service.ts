import { Injectable } from "@nestjs/common";

@Injectable()
export class HelloService {
  getHello(): { message: string } {
    return { message: "Hello from NestJS!" };
  }

  greet(name: string): { message: string } {
    return { message: `Hello, ${name}!` };
  }
}
