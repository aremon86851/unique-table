import logo from './logo.svg';
import './App.css';
import { useEffect, useState, Link } from 'react';
import sorticon from './dots.svg'

function App() {
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    fetch('tableData.json')
      .then(res => res.json())
      .then(data => setTableData(data))
  }, [])
  const sortingData = (col, sort) => {
    if (sort === 'ASC') {
      const shorted = [...tableData].sort((a, b) =>
        a[col] > b[col] ? 1 : -1
      );
      setTableData(shorted)
    }
    if (sort === 'DSC') {
      const shorted = [...tableData].sort((a, b) =>
        a[col] < b[col] ? 1 : -1
      );
      setTableData(shorted)
    }

  }

  return (
    <div className="App max-w-5xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            {/* Table Heading */}
            <tr>

              <th className='normal-case'>
                <p className='border-r-2 border-gray-400'>
                  Id</p>
              </th>
              <th className='normal-case'><span className='flex justify-between items-center border-r-2 border-gray-400'>
                First Name <span >
                  <div className="dropdown">
                    <img className='h-3 w-3' tabIndex={0} src={sorticon} alt="" />
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      <li disabled="true"><p className=' text-xs pointer-events-none opacity-75'>Unsort</p></li>
                      <li><p className=' text-xs' onClick={() => sortingData("id", "ASC")}>Sort by ASC</p></li>
                      <li><p className=' text-xs' onClick={() => sortingData("id", "DSC")}>Sort by DESC</p></li>
                    </ul>
                  </div>
                </span>
              </span>
              </th>
              <th className='normal-case'>
                <p className=' border-r-2 border-gray-400'>Last name</p>
              </th>
              <th className='normal-case'>
                <p className=' border-r-2 border-gray-400'>Email</p>
              </th>
              <th className='normal-case'>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* table data */}
            {
              tableData.map(data => <tr key={data.id}>
                <th>
                  {data.id}
                </th>
                <td>
                  {data.first_name}
                </td>
                <td>
                  {data.last_name}
                </td>
                <td>
                  {data.email}
                </td>
                {
                  data.status === true ? <td className='text-green-800' >true</td> : <td className='text-red-600'>false</td>
                }
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
