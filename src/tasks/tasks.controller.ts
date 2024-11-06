import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksServices } from './task.service';

@Controller('/tasks')
export class TaskController {

    constructor(private tasksService: TasksServices) { }

    @Get()
    getAllTasks() {
        //buscar en bd
        //peticion a otro backend o api
        return this.tasksService.getTasks();
    }

    @Post()
    createTask() {
        return this.tasksService.createTask()
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