import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloNewByJohny8(): string {
    // add new line
    // add another line
    return this.appService.getHello();
  }
}
