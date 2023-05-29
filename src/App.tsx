import style from './App.module.scss';
import Home from './pages/Home/Home';

function App(): React.ReactElement {
  return (
    <div className={style.pageWrapper}>
      <Home />
    </div>
  );
}

export default App;
