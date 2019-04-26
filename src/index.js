import React from 'react'
import ReactDom from 'react-dom'
import Compound from './Compound'
import CompoundFlexible from './CompoundFlexible'
import './style'

const Application = () => <div>
  <h1>React Advanced Patterns</h1>
  <div className="item">
    <Compound onToggle={(state) => console.log('Toggle', state)}>
      <Compound.On>Enabled.</Compound.On>
      <Compound.Button />
      <Compound.Off>Disabled.</Compound.Off>
    </Compound>
  </div>

  <div className="item">
    <CompoundFlexible onToggle={(state) => console.log('Toggle', state)}>
      <CompoundFlexible.On>Enabled.</CompoundFlexible.On>
      <div>
        <CompoundFlexible.Button />
      </div>
      <CompoundFlexible.Off>Disabled.</CompoundFlexible.Off>
    </CompoundFlexible>
  </div>
  
</div>

const root = document.getElementById('root')
ReactDom.render(<Application />, root)