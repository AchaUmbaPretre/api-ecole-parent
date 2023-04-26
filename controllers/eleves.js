import { db } from "../connect.js"

export const getAllEleves = async (req,res) =>{
    const q = "SELECT * FROM eleves"
    db.query(q, (error, data)=>{
        if(error) return res.status(404).json('il ya rien')
        return res.status(200).json(data)
    })
}

export const getEleves = async (req, res) =>{
    const q = "SELECT * FROM eleves WHERE nom = ?";
    db.query(q, [req.body.nom], (error, data) => {
        if(error) return res.status(404).json('il ya rien')
        return res.status(200).json(data)
    })
}

export const postEleves = async (req, res) =>{
    const q = "INSERT INTO eleves(`nom`,`postnom`,`prenom`,`dateDeNaissance`,`lieuDeNaissance`,`filier`,`anneeScolaire`,`sexe`) VALUES (?)"

    const VALUES = [
        req.body.nom,
        req.body.postnom,
        req.body.prenom,
        req.body.dateDeNaissance,
        req.body.lieuDeNaissance,
        req.body.filier,
        req.body.anneeScolaire,
        req.body.sexe
    ]

    db.query(q, [VALUES], (error, data) => {
        if(error) return res.status(404).json("l'operation n'est pas reussie..")
        return res.status(200).json('operation reussie.....')
    })
}