import { model, Schema } from "mongoose";

//define eñ esquema de la coleccion 
const MascotaSchema =  new Schema({ 
    nombre:{
        type: String,
        require: [true, 'nombre is required'],
        unique: true,
        minlength: [4,'Min 4 caracters'],
        maxlength: [10, 'Max 10 caracters']
    },
    documento:{
        type: Number,
        require: [true, 'documento is required']
    },
    especie:{
        type: String,
        require: [true ,'especie is required'],
        minlength:[3,'Min 4 caracthers']

    },
    color:{
        type: String,
        require: [true ,'color  is required'],
    },
    raza:{
        type: String,
        require: [true ,'string is required'],
    },
    precio:{
        type: Number,
        require: [true ,'precio is required'],
    }
})

// creamos una coleccion y la exporto
export default model('Mascota', MascotaSchema, 'mascota' )  