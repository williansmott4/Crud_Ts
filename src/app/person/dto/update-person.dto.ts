import { IsEmpty } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
export class UpdatePersonDto {
    @ApiProperty()
    id: string

    name: string;
    email: string;
    cpf: string;
}