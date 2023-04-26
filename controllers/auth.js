export const register = (req, res) =>{
    q = "SELECT FROM users WHERE username = ?";

    db.query(q, [req.body.username], (error, data)=>{
        if(error) return res.status(500).json(error)

        if(data.lenght) return res.status(409).json('le nom existe deja')
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        const Values = [ req.body.username, req.body.email, hashedPassword, req.body.name ]

        const q = "INSERT INTO users(`username`,`email`,`password`,`name`) VALUE (?)";

        db.query(q, [Values], (error, data) => {
        if(error) return res.status(500).json(error)
        return res.status(200).json('utilisateur a ete cree avec succes')

    });
});
}

export const login = (req, res) =>{
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (error,data) => {
        if(error) return res.status(500).json(error)
        if(data.lenght === 0) return res.status(404).json('Ce compte n"existe pas')

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].id);
        if(!checkPassword) res.status(404).json('Entrer un bon mot de passe ou un bon nom')
    })
}

export const logout = (req, res) =>{

}