import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksServices {

    getTasks() {
        return ['Task 1 ', 'Task 2 ', 'Task 3 ']
    }

    createTask() {
        return 'Creando tarea'
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