import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloNewByJohnyLocal(): string {
    // conflict here?
    return this.appService.getHello();
  }
}
