import { useState, useEffect } from 'react'
import './App.css';
import { useForm } from "react-hook-form"
import mockData from './mock.json';

interface Transation {
  id: string;
  amount: number;
  date: string;
}

function App() {
  const [transations, setTransations] = useState<Transation[]>([] as Transation[])
  const { register, reset, getValues} = useForm({
    defaultValues: {
      startDate: '',
      endDate: ''
    }
  })

  const { register: newTransionRegister} = useForm({
    defaultValues: {
      startDate: '',
      endDate: ''
    }
  })

  useEffect(()=> {
    const promise = new Promise(()=>{
      setTransations(mockData)
    })
    Promise.all([promise])
  }, [])

  const handleFilterDate = () => {
    const startDate = getValues("startDate")
    const endDate = getValues("endDate")

    const filteredTransations = transations.filter(transation => {

    })
  }

  const handleClearDate = () => {
    setTransations(mockData)
    reset()
  }

  const addTransation = () => {

  }

  return (
    <>
    <div style={{display: "flex", gap: 12, marginBottom: 24}}>
      <input type='date' {...register("startDate")}/>
      <input type='date' {...register("endDate")} />
      <button onClick={handleFilterDate}>Filter by Date</button>
      <button onClick={handleClearDate}>Clear date</button>
    </div>
    <div>
      <input type='date'/>
      <input placeholder='Amount' /> 
      <button onClick={addTransation}>Add transation</button>
    </div>
      <div>
        {transations.map((transation: Transation) => (
          <div key={transation.id}>
            <h3>Transation ID: {transation.id}</h3>
            <p>Amount: {transation.amount}</p>
            <p>Date: {transation.date}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
