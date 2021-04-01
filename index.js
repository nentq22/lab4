var express = require('express');
var expressHBS = require('express-handlebars');

var app =express();
app.listen(process.env.PORT);
app.use(express.static('css_new'));

app.engine('.handlebars', expressHBS());

app.set('view engine','.handlebars');
app.get('', function (req,res){
    res.render('index'); //file name
});
// đợi tôi tý dc
//ok đc
// móa nó ko lên css cay thật
//tôi xem đang không hiểu đc đang àm gì luôn :)
// để tôi fixx lại đc
//ok đc