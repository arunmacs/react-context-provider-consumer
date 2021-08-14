import React from 'react'

// console.log('inContextCompo..changeLang')

const LanguageContext = React.createContext({
  activeLanguage: 'EN',
  changeLanguage: () => {},
})

export default LanguageContext
