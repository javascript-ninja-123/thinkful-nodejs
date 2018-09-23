const router = require('express').Router();
const {saveData,getData,deleteData,updateData} = require('../controller/crud');

router.get('/', (req,res) => {
  res.status(200).send({message:"hello world"})
})


router.post('/crud', saveData)
//get all data
router.get('/crud', getData)
//get data by id
router.get('/crud/:id', getData)
//delete data by id
router.delete('/crud/:id', deleteData)
//delete all data
router.delete('/crud', deleteData)

//update data by id
router.patch('/crud/:id', updateData)



module.exports = router
