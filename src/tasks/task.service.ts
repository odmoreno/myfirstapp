import { Injectable } from "@nestjs/common";

export interface User {
    name: string
    age: number
}


@Injectable()
export class TasksServices {

    getTasks(): User {
        return {
            name: 'Oscar moreno',
            age: 29
        }
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