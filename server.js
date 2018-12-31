const express = require('express');
const hbs = require('hbs');

let app = express();

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
})

// app.use((req,res,next)=>{
//     console.log(req);
//     res.render('maintenance')
// })

hbs.registerHelper('screamIt',(message)=>{
    return message.toUpperCase()
})

app.get('/', (req, res) => {
    res.render('home',{
        welcomeMessage:'welcome to my website'
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        welcomeMessage:'welcome to my website'
    })
});

app.get('/bad', (req, res) => {
    res.json({
        error: 'SOMETHING WENT WRONG'
    })
});

app.listen(8080, () => {
    console.log('THE SERVER IS LIVE')
})