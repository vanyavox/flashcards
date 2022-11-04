const React = require('react');
const Layout = require('./Layout');

module.exports = function Question({ title }) {
  return (
    //<Layout title={title}>
      <div className='container'>
        <h1>{title}</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <input type="text" placeholder='Ваш ответ' className='mb-2 mt-2'/><br/>
            <a href="#" className="btn btn-primary">Ответить!</a>
          </div> 
        </div>
      </div>
    //</Layout>
  );
};