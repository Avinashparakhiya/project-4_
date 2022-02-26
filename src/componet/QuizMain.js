import React,{Component} from 'react';
import Question from './Question';
import './QuizMain.css';
import Answer from './Answer';
import SubmitReview from './SubmitReview';

export default class QuizMain extends Component{
    state  = {
      quiestions: {
          1: "Which among the following was the first Indian woman who went into space ?",
          2: "Who was the first Indian to go to space ?",
          3: "Who among the following was the first man to climb Mount Everest without supplemental oxygen ?",
          4: "Who built the Jama Masjid ?",
          5: " Who wrote the Indian National Anthem ?",
          6: " Who was the first Indian Scientist to win a Nobel Prize ?",
          7: "Who is the first Indian to win a Nobel Prize ?",
          8: "Who was the first Indian woman to win the Miss World Title ?",
          9: "Who was the first President of India ? ",
          10: "Who was the first Indian to win the Booker Prize ?",
        },
        answers: {
          1: {
            1: "Kalpana Chawla",
            2: "Sunita Williams",
            3: " Koneru Humpy",
            4: "None of the above",
          },
          2:{
              1:"Vikram Ambalal",
              2:"Ravish Malhotra",
              3:"Rakesh Sharma",
              4:"Nagapathi Bhat"
          },
          3: {
              1: "Junko Tabei",
              2: "Reinhold Messner",
              3: " Duncan Chessell",
              4: "Phu Dorji",
            },
            4:{
                1:"Jahangir",
                2:"Akbar",
                3:"Imam Bukhari",
                4:"Shah Jahan"
            },
            5: {
              1: "Bakim Chandra Chatterji",
              2: "Rabindranath Tagore",
              3: "Swami Vivekanand",
              4: "None of the above",
            },
            6:{
                1:"C.V Raman",
                2:"Amartya Sen",
                3:"Hargobind Khorana",
                4:"Subramanian Chrandrashekar"
            },
            7: {
              1: "Rabindranath Tagore",
              2: "CV Raman",
              3: "Mother Theresa",
              4: "None of the above",
            },
            8:{
                1:"Aishwarya Rai",
                2:"Sushmita Sen",
                3:"Reita Faria",
                4:"Diya Mirza"
            },
            9:{
                1:"Abdul Kalam",
                2:"Lal Bahadur Shastri",
                3:"Dr. Rajendra Prasad",
                4:"Zakir Hussain"
            },
            10:{
              1:"Dhan Gopal Mukerji",
              2:"Nirad C. Chaudhuri",
              3:"Arundhati Roy",
              4:"Aravind Adiga"
          },
        },
        correctAnswers:{
            1:"1",
            2:"3",
            3:"4",
            4:"4",
            5:"2",
            6:"1",
            7:"1",
            8:"3",
            9:"3",
            10:"3"
        },
        correctAnswer:0,
        clickedAnswer: 0,
        step:1,
        score:0 
      };
      checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
      let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
      return(
          <div className="Content">
              {step <= Object.keys(quiestions).length ? 
                  (<>
                      <Question
                          question={quiestions[step]}
                      />
                      <Answer
                          answer={answers[step]}
                          step={step}
                          checkAnswer={this.checkAnswer}
                          correctAnswer={correctAnswer}
                          clickedAnswer={clickedAnswer}
                      />
                      <button
                      className="NextStep"
                      disabled={
                          clickedAnswer && Object.keys(quiestions).length >= step
                          ? false : true
                      }
                      onClick={() => this.nextStep(step)}>Next</button>
                  </>) : (
                      <div className="finalPage">
                          <h1>You have completed the quiz!</h1>
                          <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                          <p>Thank you!</p>
                          <div className="pinfo">Write your feedback.<SubmitReview/></div>
                      </div>
                  )
              }
          </div>
      );
  }
}