import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageConsumer } from './message.consumer';
import { MessageProducerService } from './message.producer.service'

@Module({
  imports: [
    //Declare what port you will be using
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 5003,
      },
    }),
    //Name and configure a bullModule queue
    BullModule.registerQueue({
      name: 'vikram-queue'
    })
  ],
  controllers: [AppController],
  providers: [AppService, MessageProducerService, MessageConsumer],
})
export class AppModule { }
