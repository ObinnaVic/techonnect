import './App.css';
import Data from "./Datas/TeamData"
import Team from "./components/Team"
import TeamProfile from "./components/TeamProfile"
import Service from './components/Service';
import ServiceContent from './components/ServiceContent';
import Data2 from './Datas/ServiceData';
function App() {
   const Teambody = Data.map((item) => {
    return < TeamProfile
      key={item.id}
      {...item}
      />
   })
  const ServiceBody = Data2.map((props) => {
    return < ServiceContent
      key={props.id}
      {...props}
      />
  })
  return (
    <div>
      
      <Team />
      <section className='teamProfile'> {Teambody}</section>
      <Service />
       <section className='servicemain'> {ServiceBody}</section>

    </div>
  );
}

export default App;
