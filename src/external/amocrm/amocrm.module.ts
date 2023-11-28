import { Module } from '@nestjs/common';
import { AmoCRMWrapperService } from './amocrm.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AmoCRMWrapperService],
  exports: [AmoCRMWrapperService],
})
export class AmoCRMWrapperModule {}
