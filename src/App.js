import './App.css';
import { SplitScreen } from './SplitScreen/SplitScreen';
import { SmallPersonListItem } from './Lists/Person/SmallPersonListItem';
import { RegularList } from './Lists/RegularList';
import { LargePersonListItem } from './Lists/Person/LargePersonListItem';
import { SmallProductListItem } from './Lists/Products/SmallProductListItem';
import { LargeProductListItem } from './Lists/Products/LargeProductListItem';
import { NumberedList } from './Lists/NumberedList';
import { Modal } from './Components/Modals/Modal';
import { CurrentUserLoader } from './Components/Container/CurrentUserLoader';
import { UserInfo } from './Components/Container/UserInfo';

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
}];

const products = [{
  name: 'Piano',
  price: '$450',
  description: 'Used Piano, with great condition',
  rating: 7.8,
}, {
  name: 'Iphone 14',
  price: '$200',
  description: 'Used Iphone, with great condition',
  rating: 5.8,
}, {
  name: 'TV',
  price: '$150',
  description: 'Used TV, with great condition',
  rating: 3.8,
}];

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
            <NumberedList 
              items={people}
              resourceName="person"
              itemComponent={LargePersonListItem}/>
            
          </>
         ;
}

const RightHandComponent = ({message}) => {
  return <>
      <p style={{backgroundColor: 'yellow'}}>{message}</p>
      <p style={{color: 'purple'}}><b>Small Product Item</b></p>
      <NumberedList 
                  items={products}
                  resourceName="product"
                  itemComponent={SmallProductListItem}/>
      
      <br />
      <p style={{color: 'purple'}}><b>Large Product Item</b></p>
      <RegularList 
                  items={products}
                  resourceName="product"
                  itemComponent={LargeProductListItem}/>
    </>
}

function App() {
  return (
    <>
    <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="People Details"/> 
        <RightHandComponent message="Product Details"/>
    </SplitScreen>
    <Modal>
        <LargeProductListItem product={products[0]}/>
    </Modal>
    <CurrentUserLoader>
        <UserInfo />
    </CurrentUserLoader>
    </>
    

  );
}

export default App;
