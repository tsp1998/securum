Steps to run Project

to run this project on local machine first we have to setup this project

requirements
nodejs => https://nodejs.org/en/
mongodb => https://www.mongodb.com/try/download/community
command prompt => to run project
chrome (any other browser) => https://www.google.com/chrome/?brand=CHBD&gclid=EAIaIQobChMIwIvRqpHr6wIVi4JLBR0nQgy7EAAYASAAEgI0cfD_BwE&gclsrc=aw.ds

1. first go to root folder i.e. securum and open command propmt / terminal at this path
2. run command `yarn` or `npm install` and wait for sometime it will all node dependencies required for project
3. then after Successful installation of dependencies you can run commands such as follow
    `start` => to start server => local url = http://localhost:5000/
    `client` => to start client in development mode  => local url = http://localhost:3000/
    `server` => to start server if you prefer
    `dev:client` => to start client in development mode
    `dev:server` => to start server in development mode
    `dev` => to start client and server both in development mode
    `build` => to create build of client after creation of => after server will server client at = http://localhost:5000/

4. setup dev.js file
    create dev.js file in server/config folder and paste all this below code in dev.js file
    
    require("dotenv").config(); 

    module.exports = {
      MONGO_URL: "mongodb://localhost:27017/securum",
      JWT_SECRET: "$securum$secret$%%dgsv1763$$",
    };

5. .env file  => at root folder create .env file in securum folder
    #.env
    GENERATE_SOURCEMAP=false

    MONGO_URL_LOCAL=mongodb://localhost:27017/securum
    MONGO_URL=`mongodb atlat connect string`

    JWT_SECRET=`secret string`
    FILE_SERVER_SECRET=`SECURUM_HUB_FILE_SERVER_SECRET`

4. you are ready to go


Project Run Steps in Short:
1. open command propmt => run `mongod` command (mongodb should be installed) if there is error create `data` folder in C drive and create `db` folder in that C://data folder
2. open command propmt in securum folder => run `yarn` or `npm install` if installed ignore
3. after that run command `yarn build` or `npm run build` in same command propmt wait for build
4. after build run command npm start in same command prompt
5. you are almost done
6. open chrome browser enter url http://localhost:5000
7. done
8. if you want to run both client and server seperate open 2 command prompt in securum foldrr
9. in one run command `yarn client` or `npm run client` 
10. in second run command `yarn server` or `npm run server` 
11. done


Steps to get started with Securum
1. click on profile icon (mobile) or Sign In Button(Laptop)
2. Then Click on Sign Up
3. You can create two types of accounts user and miner
4. if u choose user then after registration sign in to system
5. click on profile Button(Laptop) or profile icon(mobile)
6. on profile page you will get card to initilize account
7. turn of internet
8. click on initilize account
9. copy the public and private keys and store at secure place 
10. then click on proceed don't turn on internet
11. after you get button of finish turn on internet and then click on finish
12. your account Successful created and you can use this public and private keys to send securum coins or to recieve
13. don't share private key with anyone 
14. when you initilize your account a transaction of 10 coins get initilized to your account as bonus. you will recieve this when some miner mines block
15. About transaction : in same card of account You have to insert reciever public key and your private key which you have recieved at installation of account and enter amount and transaction fee(optional)
16. this is how you can create transaction and when the block mined your transaction will be added to mined block

Miner's setup Steps
1. click on profile icon (mobile) or Sign In Button(Laptop)
2. Then Click on Sign Up
3. You can create two types of accounts user and miner
4. if u choose miner then after registration sign in to system
5. click on profile Button(Laptop) or profile icon(mobile)
6. on profile page you will get button of `get your blockchain`
7. click on this and you will recieve a copy of blockchain
8. this blockchain is initial level new blockchain
9. in order to sync with longest and verified blockchain in securum system you have to click on consensus button
10. after that you will have longest and verified blockchain of securum system from other trusted miners
11. you are ready to go
12. whenever there is new transaction you will see it in transactions Table on profile page
13. you can select pending transaction and mine them into block by clicking Mine Button at top of Table
14. when you mine block securum will generate 12.5 securum coins for your work and you will get it as reward
15. you can also sync blockchain at any time by clicking consensus

you will find any future changes and updates at https://securum.herokuapp.com/