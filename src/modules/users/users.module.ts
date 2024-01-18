import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { UsersController } from 'src/api/controllers/users';
import { AmoCRMWrapperModule } from 'src/external/amocrm';
import { UsersService } from './users.service';

@Module({
  imports: [
    AmoCRMWrapperModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule { }
