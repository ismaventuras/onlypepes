# Onlypepes

🆗 Build a Gallery of pepes
🆗 add user login
🆗 allow users to bookmark pepes
🆗 oauth login?
allow users to react to pepes
allow users to propose suggestion


## install
on server
- install nodejs (scripts/install-nodejs.hs)
- install postgresql
- run scripts/init-postgres.sh to create the db user
- run: npm rundb:data:init



## Project layout

|
|- app : nextjs app dir
|- pages : old nextjs dir, needed for API routes
|- prisma : prisma orm database management
|- public : nextjs public folder
|- types : .d.ts for external libraries