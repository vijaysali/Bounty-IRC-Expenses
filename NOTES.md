### EXPENSE MANAGEMENT TOOL

#### TECH STACK USED.
* nodejs - Expressjs
* Database - Postgresql

### SETUP
* Fork the repository
* Install the above dependencies.
* Create database called `expense_tracker` and update the credentials in config.json.
* Install sequelizer (from npm or yarn) and run this `node_modules/.bin/sequelize db:migrate`

### PROJECT STRUCTURE

```
├── app.js
├── bin
│   └── www
├── config
│   └── config.json
├── migrations
│   ├── 20180715205550-create-user.js
│   └── 20180716161509-create-transaction.js
├── models
│   ├── index.js
│   ├── transaction.js
│   └── user.js
├── README.md
├── routes
│   ├── index.js
│   ├── transactions.js
│   └── users.js

```

### DESIGN
* User model: which stores username or slack handle. User has many transactions.
* Transaction: which stores details about transaction made. Transaction belongs to user.


# TODO
* Needs to add slack integration.
* Test cases to be updated.
* Handle proper exceptions.
