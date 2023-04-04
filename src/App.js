import './App.css';
import Productlist from './components/ProductList';

function App() {

  return (
    <div className="App">
      <Productlist products={[{name:"Watch", price:"Rs 33,995", imageUrl:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91sHbYZvz+L._UL1500_.jpg"},
      {name:"Car", price:"$ 2,50,000", imageUrl:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200709122144_Lamborghini_Sian_Roadster_rear-3.jpg&w=700&q=90&c=1"},
      {name:"Phone",price:"Rs 1,89,000",imageUrl:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/610pghkO81L._SX679_.jpg"}]}/>    
    </div>
  );
}

export default App;
