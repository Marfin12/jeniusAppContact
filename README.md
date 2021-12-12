# Description
  This project is jenius technical test front end developer made by react native. It works for android and iOS platform.

# Setup Instructions 
  1. yarn / npm install
  2. get IP Address 
     
**Windows:** 
ipconfig/all

<img width="651" alt="Screen Shot 2021-08-29 at 23 32 00" src="https://user-images.githubusercontent.com/33171451/131258137-12cd0519-3a86-4675-98bc-36ecf51227b0.png">
     
**Mac:**
ifconfig

<img width="570" alt="Screen Shot 2021-08-29 at 23 35 04" src="https://user-images.githubusercontent.com/33171451/131258141-8d81d519-a533-4860-b7e7-c6d21c5a86cf.png">

  3. Replace client address with your ip address in ** app.js **
     navigate to app.js by typing: `cd skillTestApplication`
     ex: 
     `const client = new ApolloClient({
        uri: 'http://<youripaddress>:4000/graphql',
      });`
  4. navigate to server: ** cd skillTestApplication/server **
  5. run the server by typing `node app`
  6. navigate back to directory ** cd skillTestApplication **
  7. run the apps
     ** android **
     `yarn android`
     ** iOS **
     `cd ios && pod install`
     `cd .. && yarn ios`   

# Apps Description
  Application that shows a list of contact. The detail of functionality of this apps explained below
  - User can save contact by clicking add float iconic button and fill the required information in save contact screen
  - User can see the profile detail by clicking one of the item list of contact
  - User can delete contact in the profile detail by clicking remove float iconic button
  - User can edit the contact by clicking pencil icon on top bar navigation and fill the required information in edit contact screen

# Implementation
  Front End
    - Clean architecture
    - Dark / light mode using reducer
    - Tested by jest (snapshot & unit test)
    - Fetch & retrieve using graphql from react-apollo
    - Implement micro front end (library name = "micro-card-marfin")
  Back End
    - Clean Architecture
    - Tested by jest & chai
    - Implement graphql schema
    - Using node js

# Screenshots or GIFS
  Android


   ![android](https://user-images.githubusercontent.com/33171451/145721349-cacba423-0700-4cea-90dc-d0f72f69b418.gif)

  iOS


   ![ios](https://user-images.githubusercontent.com/33171451/145721403-db92390c-848b-4ac0-9d5c-c8b8957a4b75.gif)

