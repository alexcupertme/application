export class UsersController {}

// Методы getUsers {api/users?count=5&age_sort=boolean&alphabet=boolean}, getUser { api/users/1 }
// Максимум 10 пользователей за запрос +1 балл
// Возможность сортировки по возрасту и алфавитному порядку +1 балл
// Throttling (too much requests) 10 запросов в минуту +1 балл
// Swagger +1 балл
// Чистота кода +2 балла
// ..._sort = true => low to high. false => high to low. IF undefined => no sort
