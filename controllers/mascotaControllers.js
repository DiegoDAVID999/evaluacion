import Mascota from "../models/mascotas.js"

//consultar en la base de datos - trae la informacion y la devuelve en una respuesta
export async function getMascotas(req, res) {
    try {
        const mascotas = await Mascota.find()
        res.json(mascotas)
    } catch (error) {
        res.status(500).json({error})
        
    }
}

//Hacer la insersion:post
export async function postMascotas(req, res){
    const body = req.body //obtiene la informacion desde postman o del formulario
    try {
        const mascotas = new Mascota(body)//crear el objeto
        //operaciones aqui
        await mascotas.save()//crear vehiculo en mongo 
        res.status(201).json('Mascota created successfully')
    } catch (error) {
        res.status(500).json(error)
    }
}

//actualizar: put
export async function putMascota(req, res) {
    const {nombre, documento , especie, color, raza, precio } = req.body //destructuring data from body
    try {
        //busca donde quiere cambiar primerament(plate) y luego los campos a cambiar {color, model}
        await Mascota.findOneAndUpdate({documento:documento}, {nombre:nombre , especie:especie, color:color, raza:raza, precio:precio})
        res.status(200).json('Mascota update succesfully')
    } catch (error) {                            
        res.status(500).json(error)
    }
}

export async function deleteMascota(req, res){
    const _id = req.params.id // obtener el id desde postman o desde algun formulario
    try {
        await Mascota.findByIdAndDelete({_id:_id})
        res.json('Mascota delete succesfully')
    } catch (error) {
        res.status(404).json('Mascota don´t found')
    }
}

// Buscar empleado por documento
export async function getMascotaDocumento(req, res) {
    const { documento } = req.params; // Obtener el documento desde los parámetros de la ruta
    try {
        const mascota = await Mascota.findOne({ documento: documento });
        if (!mascota) {
            return res.status(404).json({ message: 'Mascota no encontrada' });
        }
        res.json(mascota);
    } catch (error) {
        res.status(500).json({ error });
    }
}
