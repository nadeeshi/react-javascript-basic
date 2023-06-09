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
import { ControlledOnboardingFlow } from './Components/OnboardingFlows/ControlledOnboardingFlows';
import { printProps } from './Components/HighOrderComponents/printProps';
import { withUser } from './Components/HighOrderComponents/withUser';
import { UserInfoForm } from './Components/HighOrderComponents/userInfoForm';
import { ProductInfo } from './Components/Container/ProductInfo';
import { RecursiveComponent } from './FunctionalProgramming/RecursiveComponent';
import { BigSuccessButton, DangerButton } from './FunctionalProgramming/composition';
import { BigSuccessButton1, DangerButton1 } from './FunctionalProgramming/partiallyApply';

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
  productId: '1234',
  name: 'Piano',
  price: '$450',
  description: 'Used Piano, with great condition',
  rating: 7.8,
}, {
  productId: '1235',
  name: 'Iphone 14',
  price: '$200',
  description: 'Used Iphone, with great condition',
  rating: 5.8,
}, {
  productId: '12341',
  name: 'TV',
  price: '$150',
  description: 'Used TV, with great condition',
  rating: 3.8,
}];

//Recursive components
const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: 'Hello',
    },
    b3: {
      b31: {
        message: 'Hi',
      },
      b32: {
        message: 'Hi',
      }
    }
  },
  c: {
    c1: 2,
    c2: 3,
  }
}

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
  <button onClick={() => goToNext({ name: 'Nilz piter' })}>Next</button>
  </>
  );

const StepTwo = ({ goToNext }) => (
  <>
  <h1>Step 2</h1>
  <button onClick={() => goToNext({ age: 89 })}>Next</button>
  </>
  );
const StepThree = ({ goToNext }) => (
  <>
  <h1>Step 3</h1>
  <p>Congratulations! you qualify for our Senior discount </p>
  <button onClick={() => goToNext({})}>Next</button>
  </>
  );

  const StepFour = ({ goToNext }) => (
    <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button>
    </>
    );  


  //Controlled onboarding flows
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = stepData => {
    setOnboardingData({...onboardingData, ...stepData});
    setCurrentIndex(currentIndex + 1);
  }

  //Printing props with HOCs
  const UserInfoWrapped = printProps(UserInfo);

  //Loading data with HOCs
  const UserInfoWithLoader = withUser(UserInfo, '123');

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
    <UncontrolledOnboardingFlow onFinish={data => {
      console.log(data);
      alert('Onboarding complete');
    }}>
        <StepOne />
        <StepTwo />
        <StepThree />
    </UncontrolledOnboardingFlow>
    <br /><br />

    {/** Controlled onboarding flows */}
    <ControlledOnboardingFlow 
    currentIndex={currentIndex}
    onNext={onNext}
    >
        <StepOne />
        <StepTwo />
        { onboardingData.age >= 64 && (<StepThree />)}
        <StepFour />
    </ControlledOnboardingFlow>

    {/** Printing props with HOCs */}
    <UserInfoWrapped a={1} b="Hello" c={{name: 'John Sigh'}} />

    {/** Loading data with HOCs */}
    <UserInfoWithLoader />

    {/** creating forms data with HOCs */}
    <UserInfoForm />

    {/** useCurrentUser hook */}
    <UserInfo />

    {/** useUser hook */}
    <UserInfo userId="123" />
    <UserInfo userId="124" />

    {/** useUser hook */}
    <ProductInfo productId="1234" />

    {/** Recursive component */}
    <RecursiveComponent data={nestedObject} />

    {/** component composition */}
    <DangerButton text="don't do it!" />
    <BigSuccessButton text="Yes!!!" />

    {/** partially applied components */}
    <DangerButton1 text="don't do it!" />
    <BigSuccessButton1 text="Yes!!!" />
    <br /><br />
    </>
  );
}

export default App;
