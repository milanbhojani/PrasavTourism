import { useEffect,useState } from 'react';
import Main from './main.jsx';

function App() {
  const [isLoadershow, setIsLoadershow] = useState(true);
  // after load the page add script tag to the body and run the script
  
  useEffect(() => {
    console.log('App.js is running --Start');
 
   setTimeout(() => {
      console.log('App.js is running --execute after 3 seconds');
  const a = document.createElement('script');
  a.src = "./js/custom.js";
  //append in head
  document.head.appendChild(a);
  console.log('App.js is running --End');
  setIsLoadershow(false);
    }, 1000);
  
      
   
    
  },[])


  return (
    <div className="App">
      {
        isLoadershow?
        <div id="preloader">
          <div id="preloader-status">
              <img src="images/preloader.gif" alt="Preloader" />
          </div>
      </div>
        :
        null
      }
    
     <Main></Main>
    </div>
  );
}

export default App;
