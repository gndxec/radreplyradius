const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM radreply', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO radreply set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('servicio en radreply creado!')
        })
    })
})

routes.delete('/:username', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM radreply WHERE username = ?', [req.params.username], (err, rows)=>{
            if(err) return res.send(err)

            res.send('usuario eliminado excluded!')
        })
    })
})

routes.put('/:username', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE radreply set ? WHERE username = ?', [req.body, req.params.username], (err, rows)=>{
            if(err) return res.send(err)

            res.send(` Actualizado `)

            
        })
    })
})

module.exports = routes