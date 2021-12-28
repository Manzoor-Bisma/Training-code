var nodemailer= require('nodemailer')


    
    
    const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:"bisma.vibgyorweb@gmail.com",
        pass:"bismamanzoor1"
    }
})


const mailOptions={
    from:"bisma.vibgyorweb@gmail.com",
    to: "bismahmanxoor1@gmail.com",
    subject:'checking mail sent ',
    text:"Hello world from server side" 
}

transporter.sendMail(mailOptions, function(err,info){
    if(err){
        console.log(err)
    }
    else{
        console.log(' The msg has been send to your mail , please check your mail ', info.response)
    }
})



// module.exports={mail}