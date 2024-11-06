import { Injectable } from "@nestjs/common";

export interface User {
    name: string
    age: number
}


@Injectable()
export class TasksServices {

    private tasks = []

    getTasks() {
        return this.tasks;
    }

    createTask(task: any) {
        this.tasks.push(task)
        return task
    }

    updateTask() {
        return 'Update tasks'
    }

    deleteTask() {
        return 'Eliminando Tarea'
    }

    updateTaksStatus() {
        return 'actualizando el estado de una tarea'
    }

}