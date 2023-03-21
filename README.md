# Blog Website
- This is a simple blog website created with Next.js. 
- The website allows users to view blog posts and also post comments.
- This client side app uses the [REST Blog API](https://github.com/luuu-xu/blog-api).
- There is also a content management system too: [Blog CMS](https://github.com/luuu-xu/blog-cms).

## Getting Started
To get started with the website, follow these steps:

1. Clone the repository to your local machine.
2. Run npm install to install the project dependencies.
3. Run npm run dev to start the development server.
4. Open http://localhost:3000 in your web browser to view the website.

## Features
The website includes the following features:

- View all blog posts.
- View a specific blog post by ID.
- View all comments for a specific blog post.
- Add a new comment for a specific blog post.

## Dependencies
The following dependencies are used in this project:

- next: Framework for server-rendered React applications.
- react: JavaScript library for building user interfaces.
- react-dom: Entry point to the DOM and server renderer for React.
- typescript: Typescript adapted.

## Pages
The website includes the following pages:

- /: The homepage, which displays all blog posts.
- /posts/:id: Displays a specific blog post by ID and its comments.

## API Endpoints
The website uses the following API endpoints:

- GET /api/posts: Get all blog posts.
- GET /api/posts/:id: Get a specific blog post by ID.
- GET /api/posts/:id/comments: Get all comments for a specific blog post.
- POST /api/posts/:id/comments: Create a new comment for a specific blog post.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.