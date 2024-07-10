# Introduction

- Learning Management System.

## Environmental Variable

Create a .env file inside the root of your application and include the following content:

```bash
DATABASE_URL='postgresql://postgres:YOURPASSWORD@localhost:5432/voice_lesson_app?schema=public'

NODE_ENV="development"

JWT_SECRET=""
```


> Note!! you need to create the database `` yourself before doing any other thing within the app 