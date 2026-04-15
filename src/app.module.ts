import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormModule } from './form/form.module';
import { AuthModule } from './auth/auth.module';
import { User } from './entity/user.entity';
import { FormSubmission } from './entity/form.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // делает ConfigService доступным везде
      envFilePath: '.env', // путь к файлу .env (по умолчанию)
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [User, FormSubmission],
        synchronize: configService.get('DB_SYNCHRONIZE') === 'true',
        logging: configService.get('DB_LOGGING') === 'true',
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    FormModule,
  ],
})
export class AppModule {}