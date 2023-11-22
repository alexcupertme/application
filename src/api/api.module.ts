import { Module } from '@nestjs/common';
import * as api from './controllers/users';

@Module({
  imports: [],
  controllers: [...(Object.values(api) as any[])],
  providers: [],
})
export class APIModule {}
