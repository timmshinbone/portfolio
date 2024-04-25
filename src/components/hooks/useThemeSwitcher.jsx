import React, {useEffect, useState} from 'react'

const useThemeSwitcher = () => {
    const preferDarkQuery = "({'prefers-color-scheme': 'dark'})"
    const [mode, setMode] = useState('')

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery)
        // console.log('the mediaQuery', mediaQuery)
        const userPref = window.localStorage.getItem('theme')

        const handleChange = () => {
            // console.log('mediaQuery in handleChange', mediaQuery)
            // console.log('user pref in handleChange', userPref)
            if(userPref) {
                let check = userPref === 'dark' ? 'dark' : 'light'
                // console.log('MQ -> -> check in if', check)
                // console.log('IF - - LS - getitem - theme', window.localStorage.getItem('theme'))
                setMode(check)
                if(check === 'dark') {
                    document.documentElement.classList.add('dark')
                    window.localStorage.setItem('theme', 'dark')
                } else {
                    document.documentElement.classList.remove('dark')
                    window.localStorage.setItem('theme', 'light')
                }
            } else {
                // console.log('ELSE - -  LS - getitem - theme', window.localStorage.getItem('theme'))
                let check = mediaQuery.matches ? 'dark' : 'light'
                // console.log('MQ -> -> check in else', check)
                setMode(check)
                if(check === 'dark') {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
            }
        }

        handleChange()

        mediaQuery.addEventListener('change', handleChange)

        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    // console.log('first rend mode', mode)

    // console.log('mode if ran', mode)
    useEffect(() => {
        // console.log('this is mode in UE #2', mode)
        if (mode) {
            if(mode === 'dark') {
                // console.log('this is mode in UE #2 - IF', mode)
                window.localStorage.setItem('theme', 'dark')
                document.documentElement.classList.add('dark')
            } else {
                // console.log('this is mode in UE #2 - IF', mode)
                window.localStorage.setItem('theme', 'light')
                document.documentElement.classList.remove('dark')
            }
        }
    }, [mode])
    
    return [mode, setMode]
}

export default useThemeSwitcher