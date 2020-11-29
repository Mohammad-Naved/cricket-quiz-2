var readlineSync = require('readline-sync');
const chalk = require('chalk');

let data=[{
  question:"Who was the captain of Mumbai Indians in IPL 2012?",
  option1:"Rohit Sharma",
  option2:"Sachin Tendulkar",
  option3:"Harbhajan Singh",
  answer:"Harbhajan Singh"
},
{
  question:"How Many times chennai has won ipl?",
  option1:"Three time",
  option2:"Five Time",
  option3:"six time",
  answer:"Cooking"
},
{
  question:".Who won the man of the match award in the IPL 2008 final?",
  option1:"Sohail Tanvir",
  option2:"Yusuf Pathan",
  option3:"MS Dhoni",
  answer:"Yusuf Pathan"
},
{
  question:"How many finals has Mahendra Singh Dhoni played in the IPL?",
  option1:"Eight",
  option2:"Six",
  option3:"nine",
  answer:"Eight"
},
{
  question:"Which cricketer has scored the fastest hundred in the IPL?",
  option1:"Virat Kohli",
  option2:"AB de Villiers",
  option3:"Chris Gayle",
  answer:"Chris Gayle"
},
{
  question:"How many number of hat-tricks have taken place in the IPL?",
  option1:"Eight",
  option2:"Seventeen",
  option3:"twelve",
  answer:"Seventeen"
}];

let userScoreRecord=[];

function Game(){
let userName=readlineSync.question(chalk.bgYellowBright("What is your name ?"));
let status=readlineSync.question(chalk.red("Do you like to play a small quiz related to IPL? [yes/no]"));
status.toLowerCase() === "yes" ? console.log(chalk.blue(`Welcome ${userName}! Let's Start the Quiz`)) : console.log(chalk.yellow("See you Again !"));
let score=0;
let i=0;
if(status.toLowerCase() === "yes")
{
  data.map((item) =>{
  let ansRecord=readlineSync.question(chalk.yellow(`${++i}.${item.question}\n${item.option1}\n${item.option2}\n${item.option3}\n`));
  if(item.answer.toLowerCase() === ansRecord.toLowerCase()){
    score+=1;
  }

})
console.log("Your Score= "+score)
}
}


while(true){
  Game();
  let continueQuiz=readlineSync.question(chalk.red("Do You like to Play Again.. \n"));
  if(continueQuiz.toLowerCase() === "yes"){
    continue;
  }else{
    console.log(chalk.blue("GOODBYE!      Thank you"));
    if(userScoreRecord.length >0){
      highestScore();
    }
    break;
  }
}