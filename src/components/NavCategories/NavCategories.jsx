import CheckIcon from '@mui/icons-material/Check'
import Box from '@mui/joy/Box'
import Checkbox from '@mui/joy/Checkbox'
import Chip from '@mui/joy/Chip'

const NavCategories = ({ updateCategory, category }) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', padding: '0.5rem 0' }}>
      <Box>
        <Box
          role="group"
          aria-labelledby="fav-movie"
          sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
        >
          {[
            'Artist',
            'Album',
            'Track'
          ].map((name) => {
            const checked = category?.includes(name.toLowerCase()) || false
            return (
              <Chip
                key={name}
                variant={checked ? 'soft' : 'plain'}
                color={checked ? 'primary' : 'neutral'}
                startDecorator={
                  checked && <CheckIcon sx={{ zIndex: 1, pointerEvents: 'none' }} />
                }
              >
                <Checkbox
                  variant="outlined"
                  color='primary'
                  disableIcon
                  overlay
                  label={name}
                  checked={checked}
                  onChange={(event) => {
                    updateCategory((names) =>
                      !event.target.checked
                        ? names.filter((n) => n !== name.toLowerCase())
                        : [...names, name.toLowerCase()]
                    )
                  }}
                />
              </Chip>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default NavCategories
