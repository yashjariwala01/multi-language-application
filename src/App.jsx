import { useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './components/LanguageSelector'

function App() {
    const { t } = useTranslation()
    const { line1, line2 } = t("description", {
        platform: "Linkedin"
    })

    return (
        <div className='flex flex-col gap-9 '>
            <LanguageSelector />
            <h1 className=''>{t('greeting')}</h1>
            <div className='flex flex-col gap-2 p-4 rounded-md'>
                <p className="text-gray-800 font-semibold">{line1}</p>
                <p className="text-gray-600">{line2}</p>
            </div>
        </div>
    )
}

export default App
