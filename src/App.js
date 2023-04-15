import logo from './logo.svg';
import './App.css';
import { SplitScreen } from './SplitScreen/SplitScreen';

const LeftHandComponent = () => {
  return <h1>Left Component!</h1>;
}

const RightHandComponent = () => {
  return <p>Right Component!</p>
}

function App() {
  return (
    <SplitScreen left={LeftHandComponent} right={RightHandComponent}>

    </SplitScreen>
  );
}

export default App;
