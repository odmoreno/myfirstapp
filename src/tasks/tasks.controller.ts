import { Controller, Get } from '@nestjs/common';

@Controller({})
export class TaskController {

    @Get('/tasks')
    getAllTasks() {
        //buscar en bd
        //peticion a otro backend o api

        return 'Obnteniendo todas las tareas'
    }

    @Get('/')
    index() {
        return 'Pagina inicial'
    }

}