import React from 'react'
import ReactDom from 'react-dom'
import Compound from './Compound'
import './style'

const Application = () => <div>
  <h1>React Advanced Patterns</h1>
  <Compound onToggle={(state) => console.log('Toggle', state)}>
    <Compound.On>Enabled.</Compound.On>
    <Compound.Button />
    <Compound.Off>Disabled.</Compound.Off>
  </Compound>
</div>

const root = document.getElementById('root')
ReactDom.render(<Application />, root)