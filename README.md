#Toy Robot

## Prerequisites

Following guide is for Mac users and most of the steps would be the same. Please follow OS specific guidelines whenever 
required.

1. Install NVM

       http://dev.topheman.com/install-nvm-with-homebrew-to-use-multiple-versions-of-node-and-iojs-easily/

2. Install node.js version 12.16

       nvm install 12.16
       
3. Install Dependencies (I have used Yarn and yarn.lock file has been pushed to the repository)
   
       yarn install / npm install
       
## Run the application

Start the application using the following command and keep entering robot commands on the CLI. Please input commands one by one.
Ex: Enter the PLACE command first and then press enter key, and keep doing the same. Once the REPORT
command is entered, it will display the current position of the robot.
      
      yarn start / npm start
      
      ? Please enter the command >> PLACE 0,0,1 (press enter)
      ? Please enter the command >> MOVE (press enter)
      ? Please enter the command >> REPORT (press enter)
      Current position is: 0,1,NORTH
  
        
 ##### Sample test data
 
    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT
    Output: 3,3,NORTH
    
    PLACE 0,1,SOUTH,
    MOVE,
    RUN,
    RIGHT,
    MOVE,
    REPORT,
    Output: 0,0,WEST
            
    PLACE -1,-2,EAST
    MOVE
    RIGHT
    MOVE
    REPORT
    Output: Invalid place command!. Please correct it and try again.
    
    MOVE
    RIGHT
    REPORT
    Output: Please enter a valid PLACE command as the first command!
    
  ##### Run Spec Tests
  
     yarn test / npm run test
      
  ##### Run Test Coverage
  
     yarn test:coverge / npm run test:coverage
     
 ##### Run Lint
 
    yarn lint / npm run lint
    
 ##### Folder Structure
  <ul>
  <li>src - Source folder</li>
  <li>test - Test folder</li>
  <li>index.ts - Starting point of the application</li>
  </ul>
 


      
