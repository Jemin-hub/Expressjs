// write an express js to defined one json array  of three objects having proparties name and age sort tgis object acocrding to age if user 
// reqesut sortd name in url then all name along with age shold be printed  acoording to desendin goder of age also dispaly thi vslue 
// on sort page and display json object ao home page 
const express = require('express');
const app = express();

// Define a JSON array of three objects
const persons = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 }
];

// Home page: display the JSON object (unsorted)
app.get('/', (req, res) => {
  res.json(persons);
});
app.get('/next',(req,res)=>{
    const sorty=persons.sort((a,b)=>b.age-a.age);
    res.send(sorty)
})
const PORT = 6001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});