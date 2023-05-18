import { Input } from '@mui/joy'
import { Search } from '@mui/icons-material'

const Searcher = () => {
  const searcherHandler = e => {
    console.log(e.target.value)
  }

  return (
    <Input onInput={e => searcherHandler(e)} placeholder='Search' startDecorator={<Search />}>Searcher</Input>
  )
}

export default Searcher
