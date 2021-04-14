import '../index.css';
import Home from '../home/home'
import Header from '../header/header'

function app() {
  return (
    <div className="App">
      <div className="header">
        <p><Header /></p>
      </div>
      <div className="content">
        <p><Home /></p>
      </div>
    </div>
  );
}

export default app;