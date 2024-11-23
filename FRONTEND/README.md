Области хранения данных:

-   база данных на json-server
-   BFF
-   редакс стор

Сущности приложения:

-   пользователь: БД (список пользователей), BFF (сессия текущего пользователя), стор (отображения в брауезере)
-   роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), стор (использоватение на клиенте)
-   статья: БД (список статей), стор (отображения в браузере)
-   комментарий: БД (список комментариев), стор (отображения в браузере)

Таблицы БД:

-   пользователи - users: id / login / password / registered_at / role_id
-   роли - roles: id / name
-   статьи - posts: id / title / image_url / content / published_at
-   комментарии - comments: id / author_id / post_id / content

Схема состояния на BFF:

-   сессия текущего пользователя: login / password / role

Схема для редакс стора (на клиенте):

-   user: id / login /role_id / session
-   posts: массив post: id / title / imageUrl / publishedAt / commentsCount
-   post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
-   users: массив user: id / login / registeredAt / role
