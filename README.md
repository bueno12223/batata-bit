# Batatabit ![batata-logo](https://cript-conf.herokuapp.com/assets/batata.svg) 
Batatabit is a fiction company about crypts, you can create your account, deposit money, transfer to other users or pay whit your batata-card, also, you can create goals where you can save your money until complete your money objectives.

## backend
You can see more [here]( https://github.com/bueno12223/batata-bit-API)
Our use the public version [here] (https://batatabit-api.herokuapp.com)
## frontend
Has a landing page where you can log in o create your account, log in and sign up page, and the most important, the batata home, where you can save your money, do transactions o create goals.

when you log in send the data to the backend and if there is any error it will show it, if not get a token that is saved in a cookie, all the request does it have to has the cookie, if not, you would be logged out.

# designes
[Landing page]()
[log in]()
[home]()

## Installation :wrench:
Any pull request would be accepted, you should have nodemon global if you going to run this proyect in development mode, npm and config the enviroment variables.

```bash
npm i nodemon -g
```
## Available Scripts :file_folder:
# npm start
It search inside the 'src/server/public' to run it in the port that you have been asignated in the .env.

# npm run build
It build the proyect, use it only in production modem for development use 'npm run dev', create the files in 'src/server/public', webpack is config to delete and create the build whitout delete by yourself the data.

# npm run dev
Is the same that start, but when is in development mode it create the build in this moment, if is in production would use the files in 'src/server/public'.

## Contributing :busts_in_silhouette:
Aport to this proyect is open, there are many things that would be better and we hope your conntruibution.

## License
[ISC](https://opensource.org/licenses/ISC)