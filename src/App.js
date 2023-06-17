import './App.css';
import { SplitScreen } from './SplitScreen/SplitScreen';
import { SmallPersonListItem } from './Lists/Person/SmallPersonListItem';
import { RegularList } from './Lists/RegularList';
import { LargePersonListItem } from './Lists/Person/LargePersonListItem';
import { SmallProductListItem } from './Lists/Products/SmallProductListItem';
import { LargeProductListItem } from './Lists/Products/LargeProductListItem';
import { NumberedList } from './Lists/NumberedList';
import { UncontrolledModal } from './Components/Modals/UncontrolledModal';
import { CurrentUserLoader } from './Components/Container/CurrentUserLoader';
import { UserInfo } from './Components/Container/UserInfo';
import { UserLoader } from './Components/Container/UserLoader';
import { ResourceLoader } from './Components/Container/ResourceLoader';
import { DataSourceLoader } from './Components/Container/DataSource';
import axios from 'axios';
import { UncontrolledForm } from './Components/Forms/UncontrolledForm';
import { ControlledForm } from './Components/Forms/ControlledForm';
import { ControlledModal } from './Components/Modals/ControlledModal';
import { useState } from 'react';
import { UncontrolledOnboardingFlow } from './Components/OnboardingFlows/UncontrolledOnboardingFlows';

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

const getServerData = url => async () => {
  const response = await axios.get('/users/123');
  return response.data;
}

const getLocalStorageData = key => () => {
  return localStorage.getItem(key);
}

const Text = ({message}) => <h1>{message}</h1>

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);


//Uncontrolled onboarding flows
const StepOne = ({ goToNext }) => (
  <>
  <h1>Step 1</h1>
  <button onClick={goToNext}>Next</button>
  </>
  );

const StepTwo = ({ goToNext }) => (
  <>
  <h1>Step 2</h1>
  <button onClick={goToNext}>Next</button>
  </>
  );
const StepThree = ({ goToNext }) => (
  <>
  <h1>Step 3</h1>
  <button onClick={goToNext}>Next</button>
  </>
  );

  return (
    <>
    <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="People Details"/> 
        <RightHandComponent message="Product Details"/>
    </SplitScreen>
    <UncontrolledModal>
        <LargeProductListItem product={products[0]}/>
    </UncontrolledModal>
    <CurrentUserLoader>
        <UserInfo />
    </CurrentUserLoader>
    <UserLoader userId={"124"}>
        <UserInfo />
    </UserLoader>

    <ResourceLoader resourceUrl="/users/123" resourceName="user">
        <UserInfo />
    </ResourceLoader>

    <DataSourceLoader getDataFunc={ getServerData('/users/123')} resourceName="user">
        <UserInfo />
    </DataSourceLoader>
   
    <DataSourceLoader getDataFunc={getLocalStorageData('message')} resourceName="message">
          <Text />
    </DataSourceLoader>

    <UncontrolledForm />

    <ControlledForm />

    <ControlledModal 
      shouldShow={shouldShowModal}
      onRequestClose={() => {
        alert('Are you sure?');
        setShouldShowModal(false);
      }}>
      <h1>Hello!</h1>
    </ControlledModal>
    <button onClick={() => setShouldShowModal(!shouldShowModal)}>{shouldShowModal ? 'Hide Modal' : 'Show Modal'}</button>
    
    
    {/** Uncontrolled onboarding flows */}
    <UncontrolledOnboardingFlow>
        <StepOne />
        <StepTwo />
        <StepThree />
    </UncontrolledOnboardingFlow>
    <br /><br />
    </>
  );
}

export default App;
