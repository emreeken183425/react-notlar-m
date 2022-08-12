import {createStore } from 'redux'

import reducers from './index'

import React from 'react'

export default function configureStore(){
  return createStore(reducers)
}