import { Module } from '@nestjs/common';
import * as api from './controllers/users';
import { UserModule } from 'src/modules/users/users.module';

@Module({
  imports: [UserModule],
  controllers: [...(Object.values(api) as any[])],
  providers: [],
})
export class APIModule { }
