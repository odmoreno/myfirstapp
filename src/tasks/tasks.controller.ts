import { Body, Controller, Delete, Get, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksServices } from './task.service';

@Controller('/tasks')
export class TaskController {

    constructor(private tasksService: TasksServices) { }

    @Get()
    getAllTasks(@Query() query: any) {
        console.log(query)
        //buscar en bd
        //peticion a otro backend o api
        return this.tasksService.getTasks();
    }

    @Post()
    createTask(@Body() task: any) {
        console.log(task)
        return this.tasksService.createTask(task)
    }

    @Put() // {title: 'primer tarea', status: false} -> {title: "tarea update", update: true}
    updateTask() {
        return this.tasksService.updateTask()
    }   

    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask()
    }

    @Patch() // actualizacion parcial {title: 'asdasdasd', status: false} => {status: true}
    updateTaskStatus() {
        return this.tasksService.updateTaksStatus()
    }
}