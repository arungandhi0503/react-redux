import './App.css';
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig);

function App() {
  return (
    <div className='container'>
      <Navbar />
      <div className="row justify-content-md-center">
        <div className='col-lg-6'>
          <AddTask />
          <TasksList />
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
