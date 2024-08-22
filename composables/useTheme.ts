import { useTheme as vuetifyUseTheme } from 'vuetify'

export const useTheme = () => {
    
  const theme = vuetifyUseTheme()

  // Function to load theme from local storage
  const loadTheme = () => {
    const storedTheme = localStorage.getItem('theme_store')
    if (storedTheme) {
      theme.global.name.value = storedTheme
    }
  }

  // Function to toggle theme
  const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme';
    // set to local storage
    localStorage.setItem('theme_store', theme.global.name.value)
  }

  return {
    theme,
    loadTheme,
    toggleTheme,
  }
}
