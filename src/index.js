import React from 'react'
import ReactDom from 'react-dom'
import './style'

const Application = () => <div>React Advanced Patterns</div>

const root = document.getElementById('root')
ReactDom.render(<Application />, root)