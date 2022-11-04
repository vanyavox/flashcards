const React = require('react');
const Layout = require('./Layout');

module.exports = function Question({ title, cards }) {
  return (
    <Layout title={title}>
      <div className='container cards'>
        {cards.map( card => <div className="card mb-2 mt-2"  key={card.id} id={card.id}>
          <div className="card-body">
            <h5 className="card-title">{card.name}</h5>
              <input type="text" placeholder='Ваш ответ' className='mb-2 mt-2 input'/><br/>
            <a href="#" className="btn btn-primary answer">Ответить!</a>
          </div>
        </div>)}
    </div>
    <div className="container mx-auto d-flex justify-content-between">
      <button type="submit" className="btn btn-success btn-lg send">Отправить</button>
      <br/>
      <a href="/">К выбору темы</a>
    </div>
    </Layout>
  );
};