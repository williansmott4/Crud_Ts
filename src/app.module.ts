import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './app/person/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PersonModule,
    TypeOrmModule.forRoot({
      host: 'localhost',
      type: 'mysql',
      username: 'root',
      password: '',
      database: 'persons_crud',
      entities: [__dirname +'/**/*.entity{.ts,.js}'],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
