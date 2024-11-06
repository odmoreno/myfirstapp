import { Module } from '@nestjs/common';
import { TaskController } from './tasks.controller';
import { TasksServices } from './task.service';


@Module({
    imports: [],
    controllers: [TaskController],
    providers: [TasksServices]
})
export class TasksModule { }
