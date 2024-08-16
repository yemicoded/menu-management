## About

This is a menu management application server. An assignment for Backend (NodeJS) Engineering role at Guestara

## Overview:

1. Create a Nodejs backend server for menu management. 
2. The menu will be divided into 3 parts in the following order:
  - Category
  - Sub Category: A category can have multiple sub-categories
  - Items: A Subcategory can have multiple items in it

## How do run the project locally

1. clone the project
2. remane the `.env.example` in the root directory to `.env`
3. replace the `MONGO_DB_URL` with a live or local mongodb connection string
4. run the server using `npm run dev`

## Available Endpoints

### CATEGORY

- `CREATE` - Create Category
- `POST` - Update Category
- `GET` - Get all Categories
- `GET` - Get single Category by ID

### SUB_CATEGORY

- `CREATE` - Create Sub-Category
- `POST` - Update Sub-Category
- `GET` - Get all Sub-Categories
- `GET` - Get single Sub-Category by ID

### ITEM

- `CREATE` - Create Item
- `POST` - Update Item
- `GET` - Get all Items
- `GET` - Get single Item by ID
- `GET` - Get Items by Category
- `GET` - Get Items by Sub-Category
- `GET` - Get Items by Category and Sub-Category
- `GET` - Get Items by search keyword

## Testing Endpoints

1. Ensure to must have run the project on your local environment.
2. Using Postman Desktop, visit [My Postman Workspace for this Project](https://www.postman.com/yemicoded/workspace/menu-management/overview) to test the endpoints

## Additional Notes

- If `npm run dev` gives you issues with bcrypt on MacOS you may need to run: `npm rebuild bcrypt --build-from-source`. 
