import { VvalidURL } from "./CheckerURL";
export {handleFormSubmit};
import axios from "axios";

//varibles
const inputURL = document.getElementById('inputURL');
const formSection = document.getElementById('form-section');
const confide = document.getElementById('confidence');
const subjectiv = document.getElementById('subjectivity');
const agree = document.getElementById('agreement');
const iro = document.getElementById('irony');
const mod = document.getElementById('model');
const score = document.getElementById('score_tag');
const resultSec =document.getElementById("results-section")



const handleFormSubmit =async (event) =>{
  event.preventDefault();

  const {data} = await axios.post('http://localhost:8097/', formSection, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log(inputURL.value);
  const inputValue = inputURL.value;
  // valid url will return the data
  // empty url and invalid url will display alert error
  if(VvalidURL(inputValue)){
     const {example}=data;
     console.log(data);
     return displaydataresulat(example),displayResult;
  }
  else if(inputValue == ""){
    alert("You can't submit empty value. Please, Enter a valid URL");
    return hideResult;
  }
  else{
    alert("Invalid URL !!This is Not URL !! Or you can`t analyse this Url. Please Enter a valid  URL")
    return hideResult;
  }
}

const hideResult = resultSec.querySelectorAll("div").forEach(elemnt =>{
  elemnt.style.display ='none';
});

const displayResult = resultSec.querySelectorAll("div").forEach(elemnt =>{
  elemnt.style.display ='block';
});

const displaydataresulat = (example)=>{
  confide.innerHTML = `Confidence:  ${example.confidence}`;
  agree.innerHTML= `Agreement:   ${example.agreement}`;
  score.innerHTML = `Score_tag:   ${example.score_tag}`;
  subjectiv.innerHTML = `Subjectivity:   ${example.subjectivity}`;
  mod.innerHTML = `model:   ${example.model}`;
  iro.innerHTML = `Irony:  ${example.irony}`;
}
