#Setup :
mongodb : v3.2.11
node : v6.11.1
npm : 3.10.10

#make sure node, npm & monodb are installed and mongodb is listening on port 27017

#navigate to project directory and run :

npm install
npm start

#Routes

#seed db
GET  /seed   

#get all orders

GET /orders

#Get orders by count e.g. customerAddress, orderdItem  

GET /orders/count?countBy=orderdItem

#Get orders by company name

GET /orders/company/:company

#Get orders by company address

GET /orders/address/:address

#Delete orders by orderId

DEL /orders/:orderId
