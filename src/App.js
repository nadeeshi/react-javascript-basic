import logo from './logo.svg';
import './App.css';
import { SplitScreen } from './SplitScreen/SplitScreen';

const LeftHandComponent = ({name}) => {
  return <h1 style={{backgroundColor: 'green'}}>{name}</h1>;
}

const RightHandComponent = ({message}) => {
  return <p style={{backgroundColor: 'yellow'}}>{message}</p>
}

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Nadee Sansari"/> 
        <RightHandComponent message="Try your best"/>
    </SplitScreen>
  );
}

export default App;
