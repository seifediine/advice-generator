import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './Card.css'

const Card = () => {
  const [slip, setSlip] = useState({})

  useEffect(() => {
    axios.get('https://api.adviceslip.com/advice').then((res) => {
      console.log(res)
      const { slip } = res.data
      setSlip(slip)
    })
  }, [setSlip])

  const reGenerate = async () => {
    const res = await axios.get('https://api.adviceslip.com/advice')
    setSlip(res.data.slip)
  }

  return (
    <div className='card'>
      <p className='advice-number'>advice #{slip.id}</p>
      <p className='advice-text'>{slip.advice}</p>
      <img
        className='divider'
        src='./images/pattern-divider-desktop.svg'
        alt='divider'
      />

      <button className='dice' onClick={reGenerate}>
        <img src='./images/icon-dice.svg' alt='dice' />
      </button>
    </div>
  )
}

export default Card
