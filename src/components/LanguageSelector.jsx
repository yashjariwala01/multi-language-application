import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Languages =[
    {code:'en',lang:'English'},
    {code:'hi',lang:'Hindi'},
    {code:'fr',lang:'French'},
    {code:'ar',lang:'Arabic'}
]

const LanguageSelector = () => {
    const {i18n} = useTranslation();
     

    const changeLanguage=(lng)=>{
        i18n.changeLanguage(lng);
    }
  return (
    <div className='flex justify-center items-center gap-2'>
      {
        Languages.map(lng=>(
            <button className={`${lng.code === i18n.language? 'bg-green-400':'bg-blue-300'} `} key={lng.code} value={Languages} onClick={(e)=>changeLanguage(lng.code)} >{lng.lang}</button>
        ))
      }
    </div>
  )
}

export default LanguageSelector
