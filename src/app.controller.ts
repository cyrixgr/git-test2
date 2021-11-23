import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
<<<<<<< HEAD
  getHelloNewByJohny6(): string {
    // add new line
=======
  getHelloNewByJohny5(): string {
>>>>>>> a69ebb44575631a725c771c70306ec09db605204
    return this.appService.getHello();
  }
}
