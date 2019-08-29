# Free-mentors
Free Mentors is a social initiative where accomplished professionals become role models to young people to provide free mentorship sessions. 

## Features

- Users view the dashboard section that expressively describes the platform.
- Users can sign up.
- Users can sign in.
- Admins change a user to a mentor. 
- Mentors can accept a mentorship session request.  
- Mentors can decline a mentorship session request.  

## API Endpoints Specifications

- ApiRoot = .....................

| Endpoint | Request | Status | Description |
| --- | --- | --- | --- |
| / | GET | 200 OK | Helps users to access to the root of the api |
| /auth/signup | POST | 201 Created | Makes a post request to register a new user or create an account |
| /auth/signin | POST | 200 OK | Sign in the user already having a user account |
| /User | POST | 201 OK | Create a mentorship session which mentor can decide |
| /Free-Mentor/:mentor-id | GET | 200 OK | For users to view all available mentors |
| /Free-Mentor/:mentor-id | GET | 200 OK | For users to view a specific user |
| /Free-Mentor/:mentor-id/cancel | PATCH | 200 OK | For the admin to cancel a mentorship session requrest |
| /Free-Mentor/session | POST | 201 OK | For the the users to book a seat |
| /Free-Mentor/session | GET | 200 OK | For both admin and users to view mentors  |

## Tools

Tools used for development of this API are;
- Documentation : [Swagger](https://swagger.io/).
- Framework: [ExpressJS](http://expressjs.com/).
- Code Editor/IDE: [VSCode](https://code.visualstudio.com), [Sublime Text](https://www.sublimetext.com/).
- Programming language: [JavaScript(ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/).
- API Testing environment: [Postman](https://www.getpostman.com).

## Getting Started

1. Clone the github repository [here](https://github.com/Regiss05/free-mentors). 
2. Kindly read very well the provided documentation

## Deployment

- Github Pages : https://github.com/Regiss05/free-mentors.
- Heroku Deployment : .................

## Api Documentation

Get started with WayFarer Api endpoints documentation [here](https: .............).

## Key Contributor

- Regiss Mukubiza

## Acknowledgements

- Andela Homestudy : https://homestudy.andela.com
- Pluralsight      : https://app.pluralsight.com
