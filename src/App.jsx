import { useEffect, useState } from "react";
import "./app.css"
import QuizBox from "./components/qnaBox";
import Timer from "./components/Timer";
import Start from "./components/Start";
import End from "./components/End";

function App() {
  const [questionId,setQuestionId] = useState(1);
  const [stop,setStop] = useState(false);
  const [score,setScore] = useState("₹ 0");
  const [userName,setUserName] = useState(null);

  const moneyPyramid = [
    {id:1,amount:"₹ 1,000"},
    {id:2,amount:"₹ 2,000"},
    {id:3,amount:"₹ 3,000"},
    {id:4,amount:"₹ 5,000"},
    {id:5,amount:"₹ 10,000"},
    {id:6,amount:"₹ 20,000"},
    {id:7,amount:"₹ 50,000"},
    {id:8,amount:"₹ 1,60,000"},
    {id:9,amount:"₹ 3,20,000"},
    {id:10,amount:"₹ 6,40,000"},
    {id:11,amount:"₹ 12,50,000"},
    {id:12,amount:"₹ 25,00,000"},
    {id:13,amount:"₹ 50,00,000"},
    {id:14,amount:"₹ 1 Crore"},
  ].reverse();

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "At which place on earth are there days & nights of equal length always?",
      answers: [
        {
          text: "Equator",
          correct: true,
        },
        {
          text: "Poles",
          correct: false,
        },
        {
          text: "Prime Meridian",
          correct: false,
        },
        {
          text: "Nowhere",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who, in 1978, became the first person to be born in the continent of Antarctica?",
      answers: [
        {
          text: "James Weddell",
          correct: false,
        },
        {
          text: "Charles Wilkes",
          correct: false,
        },
        {
          text: "Emilio Palma",
          correct: true,
        },
        {
          text: "Nathaniel Palmer",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who is the first woman to successfully climb K2, the worlds second highest mountain peak?",
      answers: [
        {
          text: "Junko Tabei",
          correct: false,
        },
        {
          text: "Wanda Rutkiewicz",
          correct: true,
        },
        {
          text: "Tamae Watanabe",
          correct: false,
        },
        {
          text: "Chantal Mauduit",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which was the first mountain peak above 8,000 metres in height to be summited by humans?",
      answers: [
        {
          text: "Annapurna",
          correct: true,
        },
        {
          text: "Lhotse",
          correct: false,
        },
        {
          text: "Kanchenjunga",
          correct: false,
        },
        {
          text: "Makalu",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "According to the Padma Purana, which king had to live as a tiger for a hundred years due to a deer's curse?",
      answers: [
        {
          text: "Kshemadhurti",
          correct: false,
        },
        {
          text: "Dharmadatta",
          correct: false,
        },
        {
          text: "Mitadhvaja",
          correct: false,
        },
        {
          text: "Prabhanjana",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Who was the first Indian director of the Indian Institute of Science, Bangalore, the brainchild of Jamshedji Nusserwanji Tata?",
      answers: [
        {
          text: "Dorabji Tata",
          correct: false,
        },
        {
          text: "CV Raman",
          correct: true,
        },
        {
          text: "Homi Jehangir Bhabha",
          correct: false,
        },
        {
          text: "Satish Dhawan",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which of these scientists does not have a chemical element on the periodic table named after him?",
      answers: [
        {
          text: "Albert Einstein",
          correct: false,
        },
        {
          text: "Alfred Nobel",
          correct: false,
        },
        {
          text: "Thomas Edison",
          correct: true,
        },
        {
          text: "Enrico Fermi",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Where in Singapore did Netaji Subhash Chandra Bose make the first proclamation of an Azad Hind government?",
      answers: [
        {
          text: "Cathay Cinema Hall",
          correct: true,
        },
        {
          text: "Fort Canning Park",
          correct: false,
        },
        {
          text: "National University of Singapore",
          correct: false,
        },
        {
          text: "National Gallery of Singapore",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which novel, made into a TV series by Mira Nair in 2020, revolves around the lives of four Indian families -- the Mehras, the Kapoors, the Khans and the Chatterjis?",
      answers: [
        {
          text: "The Great Indian Novel",
          correct: false,
        },
        {
          text: "A Suitable Boy",
          correct: true,
        },
        {
          text: "A Fine Balance",
          correct: false,
        },
        {
          text: "The Golden Gate",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which colonial power ended its involvement in India by selling the rights of the Nicobar Islands to the British on October 18, 1868?",
      answers: [
        {
          text: "Belgium",
          correct: false,
        },
        {
          text: "Italy",
          correct: false,
        },
        {
          text: "Denmark",
          correct: true,
        },
        {
          text: "France",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which poet in the court of Mughal Ruler Bahadur Shah Zafar wrote the Dastan-e-Ghadar, a personal account of the 1857 revolt?",
      answers: [
        {
          text: "Mir Taqi Mir",
          correct: false,
        },
        {
          text: "Mohammad Ibrahim Zauq",
          correct: false,
        },
        {
          text: "Zahir Dehlvi",
          correct: true,
        },
        {
          text: "Abul-Qasim Ferdowsi",
          correct: false,
        },
      ],
    }
  ];

  useEffect(()=>{
      questionId>1 && setScore(moneyPyramid.find((money)=> money.id === questionId-1).amount);
  },[moneyPyramid,questionId]);

  return (
    <div className="app">
      {userName ? <> 
        { stop ? <End score={score} setQid={setQuestionId} setStop={setStop}/> : (
          <>
            <div className="main">
              <div className="top">
                <div className="timer">
                  <Timer 
                    setStop={setStop}
                    questionNum={questionId}
                  />
                </div>
              </div>
              <div className="bottom">
                  <QuizBox data={data} 
                  setTime={setStop}
                  qId={questionId} 
                  setQId={setQuestionId} 
                  />
              </div>
            </div>
            <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map(money => (
                <li className = {(money.id === questionId) ? "moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListNumber">{money.id}</span>
                  <span className="moneyListAmount">{money.amount}</span>
                </li>
              ))}
            </ul>
            </div>
          </>
        )}
      </> : <Start setUserName= {setUserName} />}
    </div>
  );
}

export default App;
