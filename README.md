# Description
  This project is an example of application created with react-native and node js

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
  Application that shows a list of sports and its description

# Implementation
  - Clean architecture
  - Dark / light mode using reducer
  - Tested by jest (snapshot & unit test)
  ```diff
  + Tested by mocha
  + code style using linter
  + Scrollable View
  + Bottom-sheet navigation
  ```
  - Fetch using graphql from react-apollo

# What's New
  - Dark / Light mode enhanced
  - Bottom-sheet navigation
  - Stack Screen inside Bottom-Sheet navigation
  - Server testing using mocha
  - Favorite Screen
  - Scrollable view on detail screen
  - Clean Architecture on backend
  - More linter rules

# Screenshots or GIFS
  Dark Mode Example
  
  ![Dark-Mode](https://user-images.githubusercontent.com/33171451/132995667-10eccb10-a850-4676-aa11-a62114c442f4.gif)
  
  Light Mode Example
  
  ![Light-Mode](https://user-images.githubusercontent.com/33171451/132995631-2e56d149-7af0-4b88-bad6-26ec4e5a4e17.gif)


# Coverage
  <img width="1439" alt="Screen Shot 2021-09-12 at 23 34 55" src="https://user-images.githubusercontent.com/33171451/132995524-35037cf3-1ab2-4d33-a647-b68e41774480.png">

# lint
  <img width="1440" alt="Screen Shot 2021-09-12 at 23 13 07" src="https://user-images.githubusercontent.com/33171451/132995475-79b0428b-76d3-4a32-b566-f2747028d41f.png">

# Unit Test
<img width="1440" alt="Screen Shot 2021-09-12 at 23 12 25" src="https://user-images.githubusercontent.com/33171451/132995466-e8a8f027-85af-465d-9ead-4342d9f7a0c9.png">

