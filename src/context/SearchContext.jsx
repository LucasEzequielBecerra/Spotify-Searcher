import { createContext } from 'react'
import useSearcher from '../Hooks/useSearcher'

const SearchContext = createContext([])

const SearchProvider = ({ children }) => {
  const searchProps = useSearcher()
  return (
    <SearchContext.Provider value={searchProps}>{children}</SearchContext.Provider>
  )
}

export { SearchContext, SearchProvider }
