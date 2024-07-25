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

# Setting the MODEL in MVC

- Model is the **proxy** for a database. To set up the Model, I need:
  1.  The mongoose library (npm install mongoose@8.0.02)
