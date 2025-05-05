# YourCamp

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Overview

YourCamp is a full-stack web application built in 2020 as the capstone project for Colt Steele’s *The Web Developer Bootcamp* on Udemy. Inspired by Yelp, it enables users to create, review, and manage campground listings with features like user authentication, CRUD operations, and image uploads. Developed using the M.E.N. stack (MongoDB, Express, Node.js), it showcases early full-stack development skills with a responsive Bootstrap interface.

**Course Link**: [The Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/)

## Features

- **User Authentication**: Secure sign-up, login, and logout with Passport.js.
- **Campground Management**: Create, edit, and delete campgrounds via CRUD operations.
- **Comments**: Add or delete comments on campgrounds using data associations.
- **Image Uploads**: Upload campground images via Cloudinary integration.
- **Responsive Design**: Mobile-friendly interface built with Bootstrap.
- **RESTful Routing**: Organized routes in the `routes/` directory.
- **Error Handling**: Flash messages for user feedback.

## Technologies

- **Front-End**: HTML, CSS, JavaScript, EJS (templating), Bootstrap.
- **Back-End**: Node.js, Express.js (RESTful routing).
- **Database**: MongoDB, Mongoose (ODM).
- **Authentication**: Passport.js (local strategy).
- **Image Storage**: Cloudinary.
- **Version Control**: Git.
- **Development Tools**: npm, dotenv (environment variables).

## Dataset

No external datasets are used. Campground and comment data are user-generated and stored in MongoDB, with `seeds.js` providing sample data.

## Setup Instructions

### Prerequisites
- **Node.js**: v12.x or higher (update to v18+ recommended).
- **MongoDB**: Local instance or cloud (e.g., MongoDB Atlas).
- **Git**: For cloning the repository.
- **Cloudinary Account**: For image uploads (optional, requires API keys).
- **Text Editor**: VS Code recommended.

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yash-makadia/Your-Camp.git
   cd Your-Camp
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
   - Note: Some dependencies may be outdated (e.g., Express, Mongoose). Update with `npm update` if issues arise.
3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add:
     ```
     DATABASE_URL=<your-mongodb-connection-string>
     CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
     CLOUDINARY_KEY=<your-cloudinary-api-key>
     CLOUDINARY_SECRET=<your-cloudinary-api-secret>
     ```
   - Example MongoDB Atlas URL: `mongodb+srv://<username>:<password>@cluster0.mongodb.net/yourcamp?retryWrites=true&w=majority`
4. **Start MongoDB**:
   - Local: Run `mongod` (ensure MongoDB is installed).
   - Cloud: Ensure your Atlas cluster is active.
5. **Seed the Database** (optional):
   ```bash
   node seeds.js
   ```
6. **Run the Application**:
   ```bash
   npm start
   ```
   - Access at `http://localhost:3000`.
7. **Capture Screenshots** (optional):
   - Visit key pages (e.g., homepage, campground details).
   - Save as `homepage.png`, `campground.png`, `comment.png` in `screenshots/`.
   - Commit to repository.

### Deployment
The app was previously deployed on Heroku’s free tier (https://gentle-gorge-42342.herokuapp.com/), but it’s no longer live due to Heroku ending free plans in November 2022. 

## Project Files

- `README.md`: Project overview and instructions.
- `LICENSE`: GNU General Public License v3.0.
- `app.js`: Main Express application.
- `middleware/`: Custom middleware (e.g., authentication logic).
- `models/`: Mongoose schemas (e.g., Campground, Comment, User).
- `public/stylesheets/`: CSS files (e.g., Bootstrap styles).
- `routes/`: RESTful route definitions.
- `views/`: EJS templates.
- `package.json`: Dependencies and scripts.
- `package-lock.json`: Locked dependency versions.
- `seeds.js`: Sample data script.

## Challenges and Lessons Learned

- **Challenge**: Configuring middleware and Mongoose associations required debugging schema relationships.
- **Challenge**: Integrating Cloudinary for image uploads was complex due to API setup.
- **Lessons**:
  - RESTful routing enhances app scalability.
  - Environment variables improve security.
  - Seed scripts streamline development testing.

## Future Scope

- Add geolocation with Mapbox for campground maps.
- Implement search and filter features.
- Upgrade to modern JavaScript (ES6+) or add React.
- Redeploy on Render or Railway for a live demo.

## References

- Colt Steele’s *The Web Developer Bootcamp*: [https://www.udemy.com/course/the-web-developer-bootcamp/](https://www.udemy.com/course/the-web-developer-bootcamp/)
- MongoDB: [https://www.mongodb.com/](https://www.mongodb.com/)
- Express: [https://expressjs.com/](https://expressjs.com/)
- Cloudinary: [https://cloudinary.com/](https://cloudinary.com/)
- Bootstrap: [https://getbootstrap.com/](https://getbootstrap.com/)

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file.

## Contributing

Fork the repository, create a branch, and submit a pull request with GPL-3.0-compliant changes.

## Contact

For questions, open a GitHub issue or contact Yash Makadia at [yashmakadia1908@gmail.com](mailto:yashmakadia1908@gmail.com).

## Acknowledgments

Thanks to Colt Steele for the bootcamp and the open-source community for tools like Express and MongoDB.
