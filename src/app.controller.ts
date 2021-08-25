import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageProducerService } from './message.producer.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private messageProducerService: MessageProducerService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('send-message')
  async sendMessage(@Query('message') message: string) {
    this.messageProducerService.sendMessage(message);
    return message;
  }
}
