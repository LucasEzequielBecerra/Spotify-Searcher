import { Input, Card, CardCover, CardContent, Typography } from '@mui/joy'
import { Search } from '@mui/icons-material'

const Searcher = () => {
  function handleChange (e) {

  }
  return (
    <Input onChange={e => handleChange(e)} placeholder='Search' startDecorator={<Search />}>Searcher</Input>
  )
}

export default Searcher
