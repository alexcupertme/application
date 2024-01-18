import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { UsersService } from '../../../modules/users/users.service';

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('users')
  getUsers(
    @Query('count') count: number,
    @Query('age_sort') ageSort: boolean,
    @Query('alphabet') alphabet: boolean,
  ) {
    if (count > 10) {
      throw new BadRequestException('To much users. Max: 10');
    }
    return this.usersService.getUsers(count, ageSort, alphabet);
  }

  @Get('users/:id')
  getUser(@Param('id') id: string) {
    return this.usersService.getUser(id);
  }
}

// Методы getUsers {api/users?count=5&age_sort=boolean&alphabet=boolean}, getUser { api/users/1 }
// Максимум 10 пользователей за запрос +1 балл
// Возможность сортировки по возрасту и алфавитному порядку +1 балл
// Throttling (too much requests) 10 запросов в минуту +1 балл
// Swagger +1 балл
// Чистота кода +2 балла
// ..._sort = true => low to high. false => high to low. IF undefined => no sort
