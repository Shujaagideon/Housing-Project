# The housing Project 

### Structure

Client-
      -contains the UI and the actions the users are likely to perform during their visit in the website.
   #### folder
      -Actions contains login, signup, and sign out actions.
      -components folder contains the UI components.
      -Images are store in the publics folder because of the manual configuration of webpack. 
      -styled components are used for flexibility.

Config-
      -contains most of the webpack configuration needed for the project.
      -also contains the mongodb urls;

Server-
      - contains most of the server side code mostly routes and configs for mongodb
   #### Folders
        - middleWare contains the authority of a user.
        -models contains the model used to store data in Mongodb
        - routes contains the endpoints to connect the UI and the Server.


  ## To Do List

1. Download and connect MongoDB.
2. Create login form and enable its functionality.
3. Setup routes and load data from the server on load.
4. Create a separate portal for home owners to upload and manage their houses.
5. Create a state management system with react-reducers.
6. Enable dynamic collection of data from the database by the front-end.
7. Finish up the UI pages and enable interactivity.


