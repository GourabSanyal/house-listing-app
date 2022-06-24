const http = require('http')

const server = http.createServer((req, res) =>{

const movies = [{ id: 1, name:'Avengers' }, { id:2, name:'Dr, Strange 2' }]

    if ( req.url === '/' ){
        res.write('Welcome to the server');
        res.end();
    }

    if ( req.url === '/api/movies') {
        res.write( JSON.stringify( movies ))
        res.end()
    }
})


server.listen( 3000, ()=>{
    console.log('server is listening at PORT 3000')
})

// const EventEmitter = require('events')

// const emitter = new EventEmitter()

// emitter.on('greeting', (args) =>{
//     console.log('This is a event class', args.name)
// })

// emitter.emit('greeting', { name: 'Boss' })