import express from 'express'
import 'dotenv/config'
import dbConection from '../dataBase/config.js'
import { getMascotas, postMascotas, putMascota, deleteMascota, getMascotaDocumento} from '../controllers/mascotaControllers.js'

export default class Server{
    constructor(){
        this.app = express()
        this.listen()
        this.dbConnect()
        this.pathMascota = '/api/mascota' //link publico de la api
        this.route()
    }

    //escuchar el servidor y especificar el puerto
    listen(){ 
        this.app.listen(process.env.PORT, ()=> {
            console.log(`Server is running in PORT ${process.env.PORT}`)
        })
    }

    async dbConnect(){
        await dbConection()
    }

    route(){
        this.app.use(express.json()) //convertir data a json
        this.app.get(this.pathMascota, getMascotas)
        this.app.get(this.pathMascota+'/:documento', getMascotaDocumento);
        this.app.post(this.pathMascota, postMascotas)
        this.app.put(this.pathMascota, putMascota)
        this.app.delete(this.pathMascota+'/:id', deleteMascota)
    }
}