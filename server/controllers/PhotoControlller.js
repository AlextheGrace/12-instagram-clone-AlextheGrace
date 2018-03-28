


app.get('/photos', (req, res) => {
    Photo.find({}, (err, photos) => {
     if(err){
         return res.status(500).send("error occured on server");
     }
     else {
         res.status(200).send(photos);
     }   
    }); 
 });
 
 app.get('photos/:photoId', (req, res) => {
     Photo.findById(req.params.photoId, (err, photo) => {
      if(err){
          return res.status(500).send("error occured on server");
      }
      else {
          res.status(200).send(photo);
      }   
     }); 
  });
 