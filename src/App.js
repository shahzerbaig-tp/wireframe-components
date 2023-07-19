import './App.css';
import Card from './Components/Card';

function App() {

  const styleCard = {
    height: '315px',
    width: '386px',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '2px',
    borderShadow:'20px',
    borderRadius: '2px',
    backgroundColor:'lightGrey',
  }
  const cardData1 =  {
      courseType: 'On-Demand',
      cardHeaderStyle: 'header-style',
      courseTitle: 'Algebra',
      courseHour: 60,
      courseEnrollmentDate: '2023-07-01',
      courseProgressStatus: 'Completed',
      coursePercentage: 75,
      courseCredit: 3,
  };
  const cardData2 =  {

      courseType: 'On-Demand',
      cardHeaderStyle: 'header-style',
      courseTitle: 'Algebra',
      courseHour: 60,
      courseEnrollmentDate: '2023-07-01',
      courseProgressStatus: 'In Progress',
      coursePercentage: 75,
      courseCredit: 3,

  };
  
  return (
    <div className="App">
      <Card styleCard={styleCard} cardData={cardData2} />
      <Card styleCard={styleCard} cardData={cardData1} />
    </div>
  );
}

export default App;
