import { Module } from '@nestjs/common';
import { TaskController } from './tasks.controller';


@Module({
    imports: [],
    controllers: [TaskController]
})
export class TasksModule { }
