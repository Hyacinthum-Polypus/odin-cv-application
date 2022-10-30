import logo from './logo.svg';
import './App.css';
import GeneralOverview from './components/generalOverview';
import EducationOverview from './components/educationOverview';
import WorkOverview from './components/workOverview';

function App() {
  return (
    <div>
      <GeneralOverview />
      <EducationOverview />
      <WorkOverview />
    </div>
  );
}

export default App;
