import { Controller, Get, Post, Body } from "@nestjs/common";
import { HelloService } from "./hello.service";

@Controller("api/hello")
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello() {
    return this.helloService.getHello();
  }

  @Post()
  greet(@Body("name") name: string) {
    return this.helloService.greet(name);
  }
}
