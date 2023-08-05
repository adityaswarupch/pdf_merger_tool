const express = require('express')
const path=require('path')
const multer=require('multer')
const upload=multer({ dest: 'uploads/' })
const {merged}=require('./mergepdf.js')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public/index.html'))
})

app.use('/static', express.static('public'))

app.post('/merge', upload.array('pdfs', 2),async(req,res,next)=>{
   //res.send({data:req.files})
   let d=await merged(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path));
   res.redirect(`http://localhost:3000/static/${d}.pdf`)

})



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})