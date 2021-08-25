import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";

@Processor('vikram-queue')
export class MessageConsumer {

    @Process('vikram-job')
    messageJob(job: Job<unknown>) {
        console.log(job.data);
    }
}