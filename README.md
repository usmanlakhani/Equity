### Purpose of this project

To learn REACT w/ Node.js

Development tools used:

1. VS Code
2. Docker for running mongodb
3. ESLINT
4. Jest
5. Prettify
6. Mongoose
7. In Memory Mongoose Testing module

---

# The Setup

1. Downloaded Docker
2. Downloaded Nodejs
3. Used vite 5.0 to scaffold the project (npm create vite@5.0.0 .)
4. Installed Prettify to help with stylistic linting
   > npm install --save-dev prettier@3.1.0 eslint@8.54.0 eslint-plugin-react@7.33.2 eslint-config-prettier@9.0.0 eslint-plugin-jsx-a11y@6.8.0
5. Once Prettier has a configuration file (.prettierrc.json), configure the VS Code extension for it
   - I had to download the Prettier plug in through VS Code marketplace. The ==npm install== did not work
   - To confirm Prettier got configured properly, open the .prettierrc.json file, add space before one of the entries and press save. You should see the space removed.
6. Eslint was configured
7. Husky was configured
   > npm install --save-dev husky@8.0.3 lint-staged@15.1.0

---

# Clean up before moving onto the fun parts

- Removed vite.config.js
- Removed index.html
- Changed the env variable in eslintrc.json to focus on node
- Before proceeding, uninstall some plugins
  > npm uninstall --save-dev vite @types/react @types/react-dom @vitejs/plugin-react eslint-plugin-jsx-a11y eslint-plugin-react
- Remove **dev, preview** and **build** scripts from package.json

---

# The App Arch

![App Arch](https://github.com/usmanlakhani/Equity/blob/main/images/app-arch.png)

---

# Setting the MODEL in MVC (in src/db folder)

- Model is the **proxy** for a database. To set up the Model, I need:

  - The mongoose library (npm install mongoose@8.0.02)

- Wrote the code to set up the basic connection to a MongoDB container

  > file name is src/db/init.js

- In the image below, the following things are happening:
  - We are creating a connection using **const connection = mongoose.connect(the url to the database)**
  - We are then putting the connection _object_ into a variable called _connection_
  - The _return_ statement passes this _connection object_ to who ever calls the **initDatabase()** function

![initDatabase](https://github.com/usmanlakhani/Equity/blob/main/images/initDatabase.png)

- The first MODEL we make is a SET. The MODEL will be a representation of **a** set of some exercise

![Set Data Model](https://github.com/usmanlakhani/Equity/blob/main/images/Set-Model.png)

- The model is declared in a PUBLIC module. We can **import** the module using
  > _import { Set } from ./src/db/models/set.js_
- Added lines of code to the quicktest.js file to test if the Set was being saved to the database
- Kicked off test using **node src/quicktest.js**

![Test Set Data Model](https://github.com/usmanlakhani/Equity/blob/main/images/Test_Set_Model.png)
