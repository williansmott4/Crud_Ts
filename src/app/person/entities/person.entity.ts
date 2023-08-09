import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({name: 'person'})
export class PersonEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable:false})
    name: string;
    
    @Column({})
    email: string;

    @Column({})
    cpf: string;


}