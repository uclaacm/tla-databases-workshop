import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './index.js'
import DeleteImage from './delete.svg'

const breedChoices = [
  'Beagle',
  'Bulldog',
  'Chihuahua',
  'Dachshund',
  'French Bulldog',
  'German Shepherd',
  'Golden Retriever',
  'Labrador Retriever',
  'Poodle',
  'Siberian Husky',
]

function App() {
  const [data, setData] = useState([])
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState(breedChoices[0]);
  const [errors, setErrors] = useState([])

  function handleValidation() {
    let isValid = true;
    let err = []
    // name
    console.log(name)
    if (!name) {
      isValid = false;
      err.push("Name cannot be empty");
    }
    // age
    if (!age) {
      isValid = false;
      err.push("Age cannot be empty");
    }
    else if (age < 0) {
      isValid = false;
      err.push("Age must be greater than 0");
    }
    // breed
    if (!breed) {
      isValid = false;
      err.push("Breed cannot be empty")
    }

    setErrors(err);
    return isValid;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (handleValidation()) {
      // TODO: add a new row in the database with name, age, and breed
      setErrors([])
    }
  }

  function handleDelete(event) {
    // TODO: delete selected row from the database (selected id is stored in event.target.dataset.id)
  }

  useEffect(() => {
    const fetchDoggos = async () => {
      // TODO: fetch data from the Firestore Database to display on the web page
    }
    fetchDoggos()
  }, [])

  return (
    <div>
      <h1 className='content-title'>NoSQL Doggos</h1>
      <div className='content-adder'>
        <form onSubmit={handleSubmit}>
          <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Breed</th>
            </tr>
            <tr>
              <td>
                <input type='text' onChange={(event) => setName(event.target.value)} />
              </td>
              <td>
                <input type='text' onChange={(event) => setAge(event.target.value)} />
              </td>
              <td>
                <select onChange={(event) => setBreed(event.target.value)}>
                  {breedChoices.map((b) =>
                    <option value={b}>{b}</option>
                  )}
                </select>
              </td>
            </tr>
          </table>
          {
            errors.length !== 0 ?
              <div>
                <h4 className='errors-title'>Oops, your submission had errors.</h4>
                <ul className="errors">
                  {errors.map((err) => <li>{err}</li>)}
                </ul>
              </div>
              : <></>
          }
          <input type='submit' value="Add Row" />
        </form>
      </div>
      <div className='content-card-list'>
        {data.length !== 0 ?
          <table>
            <tr>
              <th>UID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Breed</th>
              <th></th>
            </tr>
            {
              data.map((d) =>
                <tr>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.age}</td>
                  <td>{d.breed}</td>
                  <td>
                    <input
                      type='image'
                      src={DeleteImage}
                      alt='Delete alert'
                      width="20px"
                      className='delete_button'
                      data-id={d.id}
                      onClick={handleDelete}
                    ></input>
                  </td>
                </tr>
              )
            }
          </table>
          :
          <p className="notice">No data found.</p>
        }
      </div>
    </div>
  );
}

export default App;
