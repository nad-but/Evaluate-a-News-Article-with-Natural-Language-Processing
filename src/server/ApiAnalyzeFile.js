const axi =require('axios');
const { response } = require('express');

const MeaningCloudAPI = "https://api.meaningcloud.com/sentiment-2.1";

const AnlyzAPI = async(inputurl,mykey)=>{
     const dataurl =`${MeaningCloudAPI}?key=${mykey}&url=${inputurl}&lang=en`;
     const apiAnlysis = await axi.get(dataurl)
     .then(res=>{
         return datainfo(res.data);
    });
    return apiAnlysis;
}

const datainfo =(data)=>
{
    const {confidence,score_tag,agreement,subjectivity,irony,model}=data;
    const example ={
        confidence,
        score_tag,
        agreement,
        subjectivity,
        irony,
        model,
        };
    const dataResult = {example};
    return dataResult;
}
module.exports= {AnlyzAPI}