# Heroku deploy
## Helmet for security
`npm install helmet` 

```
// Include helmet
const helmet = require('helmet');
app.use(helmet());
```

## Initialize git repository
`git init`

`git add .`

`git commit -m "initial commit"` 

## Login and push
`heroku login` 

`heroku create`

`git push heroku master`

## Basic commands
`heroku open`

`heroku logs --tail`
