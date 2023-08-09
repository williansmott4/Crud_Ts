import { Injectable } from '@nestjs/common';
import { PersonEntity } from './entities/person.entity';
import { Repository } from 'typeorm';
import { PersonDto } from './dto/person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonService {

    constructor(
        @InjectRepository(PersonEntity)
        private readonly personRepository: Repository<PersonEntity>

    ) { }
    async findAll(): Promise<PersonEntity[]> {
        return this.personRepository.find();

    }
    async store(body: PersonDto): Promise<PersonEntity> {
        const person = this.personRepository.create(body);
        return await this.personRepository.save(person);
    }
    async updateOne(data: UpdatePersonDto): Promise<PersonEntity> {
        return await this.personRepository.save(data);


    }
async deleteOne(id:string) :Promise<void> {
    const personExist = await this.personRepository.findOne({where: {id} })
    await this.personRepository.delete(personExist);
}
}
