import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';


//used to read the queue
@Injectable()
export class MessageProducerService {
    constructor(@InjectQueue('vikram-queue') private queue: Queue) { }

    async sendMessage(message: string) {
        //push the job into the queue
        await this.queue.add('vikram-job', {
            text: message
        }, { delay: 10000 });
    }
}