import { Controller, Get } from '@nestjs/common';

@Controller()
export class UsersController {
  @Get()
  getUsers() {
    return JSON.stringify([
      {
        name: 'John',
      },
    ]);
  }
}

// Максимум 10 пользователей за запрос
// Возможность сортировки по возрасту и алфавитному порядку
// Throttling (too much requests) 10 запросов в минуту
