const mongoose = require('mongoose');
const { Schema } = mongoose;


const quizSchema = new Schema({
  title:  {type: 'String', required: true}, // String is shorthand for {type: String}
  vote: {type: 'Number', required: true, default: 0},
});

module.exports = mongoose.model('Quiz', quizSchema) 
// 'Quiz' - nazwa modelu określona w strukturze danych bazy MongoDB
// nazwę modelu zawsze określamy z dużej litery, to konwencja, a nie wymóg składniowy
// w drugim parametrze przekazuję schemat quizSchema