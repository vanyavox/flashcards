const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title, topicList }) {
  return (
    <Layout title={title}>
      <div className='container'>
        <h1>{title}
        </h1>
        <input type='text' name='userName' id='userName' placeholder='Введите имя'></input>
        <button className='btn btn-primary' id='ok'>Да</button>
        <ul id='questions' className='d-flex flex-row'>
          {topicList.map(topic => 
            <li key={topic.id} id={topic.id} className='questionCard'>
              {<a href={`/quiz/${topic.id}`}>{topic.name}</a>}
            </li>)}
        </ul>
      </div>
    </Layout>
  );
};