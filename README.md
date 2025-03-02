- `src` -> Inside the src folder all the actual source code regrading the project will reside,this will not include any lind of of tests.

- `config` -> n this folder anything and everything regrading any configuration setup of library or module will be done .As for example ,setting `dotenv` so that we can use the environment variable anywhere in a cleaner fashion,this is done in the `server-config.js`. one more example can be setup logging library that can help you to prepare meaningful logs,son configuration for this library sholud also be done there.

- `routes`-> In this routes folder ,we register a route and the corresponding middlware and controllers to it.

- `middlewares` -> They are just going to intercept the incoming request where we can write our validators,authentication etc.

- `controllers` -> They are kind of the last middleware as post them you call you business layer to execute the business logic.In controllers we just recieve the incoming request and data and then pass it to the business layer nd once business layer return an output,we structure then API response in controller and send the ouput.

- `reposotories` -> This folder contain all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go there.

- `utils` ->Contains helper method error class etc.

# Project Setup

- Inside the `src/config` folder create a file named `config.json` execute the following command

```
npx sequalize init
```

- By use this command you will get `migration`,`seeders` and `config.json` folder

- If you are setting up your development environment ,then write the username you db ,password in your db. In dialect mentioned whatever db you are using ex- mysql,mariadb etc.

- If you are setting up the test ,production environment ,make sure that you replace the host with hosted db url.
