// Import the NotesList component from the 'components' directory
import NotesList from './components/NotesList';

// Define the main App component as a functional component
const App = () => {
   // The component returns a <div> element with a class name of 'container'
  // Inside this <div>, the NotesList component is rendered
  return (<div className='container'>
    <NotesList/>
  </div>
  );
};

// Export the App component as the default export from this module
export default App;