import * as React from 'react'
import Button from '@mui/joy/Button'
import Stack from '@mui/joy/Stack'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import ModalDialog from '@mui/joy/ModalDialog'

export default function LayoutModalDialog () {
  const [layout, setLayout] = React.useState(undefined)

  return (
    <React.Fragment>
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            setLayout('fullscreen')
          }}
        >
          Ver Detalles
        </Button>
      </Stack>
      <Modal open={!!layout} onClose={() => setLayout(undefined)}>
        <ModalDialog layout={layout} >
          <ModalClose />
          <div className='containerDetailArtist'>

          </div>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  )
}
