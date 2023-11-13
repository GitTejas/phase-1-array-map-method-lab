const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function (title){
    const titles = title.split(" ")
    let result = ""
    for (let i=0; i<titles.length; i++) {
      titles[i] = titles[i][0].toUpperCase() + titles[i].substr(1)
      result += words[i]+ " "

      return result.slice(0,-1)
    }
  })
}

///////////////////////////////////////////////////////
const titleCased = () => 
{
  return tutorials.map(word => {
    const words = word.split(" ");
     let result = "";
     for (let i = 0; i < words.length; i++) {
       words[i] = words[i][0].toUpperCase() + words[i].substr(1);
       result += words[i]+" "                                   };
     
     return result.slice(0,-1);
 });
}
