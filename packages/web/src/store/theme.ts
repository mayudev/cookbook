import { writable } from 'svelte/store'

export type ThemeMode = 'light' | 'dark'

function applyTheme(theme: ThemeMode, initial: boolean = false) {
  if (!initial) {
    localStorage.setItem('theme', theme)
    document.body.classList.add('trans')
    setTimeout(() => {
      document.body.classList.remove('trans')
    }, 400)
  }
  document.body.setAttribute('data-theme', theme)
}

function createTheme() {
  const { subscribe, update } = writable<ThemeMode>(
    (() => {
      const theme = localStorage.getItem('theme')
      if (theme === 'light' || theme === 'dark') {
        applyTheme(theme, true)
        return theme
      } else return 'light'
    })()
  )

  return {
    subscribe,
    switch: () => {
      update((theme) => {
        if (theme === 'light') {
          applyTheme('dark')
          return 'dark'
        } else {
          applyTheme('light')
          return 'light'
        }
      })
    },
  }
}

export const theme = createTheme()
