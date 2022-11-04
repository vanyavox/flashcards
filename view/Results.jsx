const React = require('react');


module.exports = function Results({ answers, count, username }) {
  return (
    <div className='container'>
      <h1>{username}, вы ответили верно на {count} вопросов</h1>
      <ul>
          {answers.map((ans) => 
            <li>
              <div className='text-dark'>Вопрос: {ans.name}</div>
              <div className='text-danger'> Ваш ответ: {ans.userAnswer}</div>
              <div className='text-success'>Правильный ответ: {ans.answer}</div>
            </li>)}
        </ul>

        <a href="/">Главная</a>
    </div>
  );
};