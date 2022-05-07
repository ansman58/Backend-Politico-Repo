const express = require("express");
const uuid = require("uuid")
const router = express.Router();
const office = require('../../source/office');

// gets all office
router.get('/', (req, res) => res.json(office));

// get single office
router.get('/:id', (req, res) => {
  const found = office.some(office => office.id === parseInt(req.params.id))

  if (found) {
    res.json(office.filter(office => office.id === parseInt(req.params.id)));
  } else{
    res.status(400).json({ msg: `No office with id of ${req.params.id}`});
  }
}); 

// create office (post is often used to add item to data)
router.post('/', (req, res) => {
  const newOffice = {
     id: uuid.v4(),
     name: req.body.name,
     email: req.body.email,
     status:"active"
  }

  if(!newOffice.name || !newOffice.email) {
    return res.status(400).json({ msg: `Please include a name and an email`})
  }
  office.push(newOffice);
  res.json(office);
})

// update office
router.put('/:id', (req, res) => {
  const found = office.some(office => office.id === parseInt(req.params.id))

  if(found) {
    const updateOffice = req.body;
    office.forEach(office => {
      if(office.id === parseInt(req.params.id)) {
        office.name = updateOffice.name? updateOffice.name : office.name;
        office.type = updateOffice.type ? updateOffice.type : office.type;

        res.json({ msg: 'Office Updated', office })
      }
    })
  }else {
    res.status(400).json({ msg: `Oops! No member with the id of ${req.params.id}` })
  }
});

// delete office
router.delete('/:id', (req, res) => {
  const check = office.some(office => office.id === parseInt(req.params.id))

  if (check) {
    res.json({ msg: `Office deleted`, office:  office.filter(element => element.id !== parseInt(req.params.id))
    })
  }else {
    res.status(400).json({ msg: `No office with the id of ${req.params.id}` })
  }
});

module.exports = router;