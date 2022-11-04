const React = require('react');


module.exports = function Results({ answers, count }) {
  return (
    <div className='container'>
      <h1>Вы ответили верно на {count} вопросов</h1>
      <ul>
          {answers.map((ans) => 
            <li>
              Вопрос: {ans.name}
              <br/>
              Ваш ответ: {ans.userAnswer}
              <br/>
              Правильный ответ: {ans.answer}
            </li>)}
        </ul>
        {/* {answers.map((ans) => {
          <div>
            <div>{ans.name}</div>
            <div>{ans.userAnswer}</div>
            <div>{ans.answer}</div>
            </div>
        })} */}
      {/* <ul id='questions' className='d-flex flex-row'>
          {topicList.map(topic => 
            <li key={topic.id} id={topic.id} className='questionCard'>
              {<a href={`/quiz/${topic.id}`}>{topic.name}</a>}
            </li>)}
        </ul> */}
        <a href="/">Главная</a>
    </div>
  );
};