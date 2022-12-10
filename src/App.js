import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    fetch('tableData.json')
      .then(res => res.json())
      .then(data => setTableData(data))
    console.log(tableData)
  }, [])
  return (
    <div className="App max-w-5xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {
              tableData.map(data => <>
                <tr>
                  <th>{data.id}</th>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
              </>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
