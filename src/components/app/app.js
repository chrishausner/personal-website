import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../home/home';
import Header from '../header/header';

function app() {
  return (
    <div className="App">
      <header>
        <div className="header">
          <p><Header /></p>
        </div>
        <div className="content">
          <p><Home /></p>
        </div>
      </header>
    </div>
  );
}

export default app;