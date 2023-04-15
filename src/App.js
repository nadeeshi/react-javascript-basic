import './App.css';
import { SplitScreen } from './SplitScreen/SplitScreen';
import { SmallPersonListItem } from './Lists/Person/SmallPersonListItem';
import { RegularList } from './Lists/RegularList';
import { LargePersonListItem } from './Lists/Person/LargePersonListItem';

const people = [{
  name: 'Nadee Sansari',
  age: 28,
  hairColor: 'black',
  hobbies: ['dancing', 'reading', 'movie watching']
}, {
  name: 'Shan Kumar',
  age: 48,
  hairColor: 'brown',
  hobbies: ['bicycling', 'reading', 'swimming']
}, {
  name: 'Nilz Peter',
  age: 18,
  hairColor: 'white',
  hobbies: ['bicycling', 'video games', 'swimming']
}]

const LeftHandComponent = ({name}) => {
  return <>
            <h1 style={{backgroundColor: 'green'}}>{name} </h1>
            <p style={{color: 'purple'}}><b>Small List Item</b></p>
            <RegularList 
              items={people}
              resourceName="person"
              itemComponent={SmallPersonListItem}/>

            <br />
            <p style={{color: 'purple'}}><b>Large List Item</b></p>
            <RegularList 
              items={people}
              resourceName="person"
              itemComponent={LargePersonListItem}/>
          </>
         ;
}

const RightHandComponent = ({message}) => {
  return <p style={{backgroundColor: 'yellow'}}>{message}</p>
}

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Left Hand Title"/> 
        <RightHandComponent message="Right Hand Title"/>
    </SplitScreen>
  );
}

export default App;
