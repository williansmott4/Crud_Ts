import { Controller, Get, Post, Body, Put, ValidationPipe, Delete, Param } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonEntity } from './entities/person.entity';
@Controller('person')
export class PersonController {
    constructor(
        private readonly personService: PersonService,

    ) { }
    @Get('/list')
    async getPerson(): Promise<PersonEntity[]> {
        return await this.personService.findAll();
    }
    @Post()
    async createPerson(@Body() body): Promise<PersonEntity> {
        return await this.personService.store(body);
    }
    @Put()
    async updatePerson(@Body(new ValidationPipe()) body): Promise<PersonEntity> {
        return await this.personService.updateOne(body);
    }
    @Delete('/:id')
    async deletePerson(@Param('id')id ){
        return await this.personService.deleteOne(id)
    }
}

