# Post & Comments Viewer

This is a simple React application that fetches and displays a list of posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/). When a user clicks on a post, it dynamically fetches and displays the corresponding comments.

## Features
- Fetch and display posts from the API.
- Clicking on a post fetches and displays its comments.
- Uses **React Hooks** (`useState`, `useEffect`) for state management.
- Displays posts in a structured list with clickable titles.
- Shows comments below the selected post.
- Implements a **loading state** while fetching data.
- Uses **Tailwind CSS** for basic styling.
- UI improvements with expandable sections for comments.

## Installation & Setup
### Prerequisites
Ensure you have **Node.js** and **npm** installed on your system.

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/post-comments-viewer.git
cd post-comments-viewer
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start the Development Server
```sh
npm run dev
```

This will start the app at `http://localhost:5173/` (default Vite port).

## API Endpoints Used
- **Fetch Posts:** `https://jsonplaceholder.typicode.com/posts`
- **Fetch Comments by Post ID:** `https://jsonplaceholder.typicode.com/comments?postId={postId}`

## Required Dependencies
```sh
npm install react-router-dom tailwindcss postcss autoprefixer
```

### If Vite is Not Installed:
```sh
npm install vite --save-dev
```

## Technologies Used
- **React.js** (Functional Components, Hooks)
- **Vite** (Fast development server)
- **Tailwind CSS** (For styling)
- **Fetch API** (For data fetching)

## Future Enhancements
- Implement a **modal** for displaying comments.
- Add pagination for posts and comments.
- Improve UI with animations.

## License
This project is open-source under the MIT License.

