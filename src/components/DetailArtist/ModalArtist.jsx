import * as React from 'react'
import Button from '@mui/joy/Button'
import Stack from '@mui/joy/Stack'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import ModalDialog from '@mui/joy/ModalDialog'
import DetailArtist from './DetailArtist'

export default function LayoutModalDialog ({ name }) {
  const [layout, setLayout] = React.useState(undefined)

  return (
    <React.Fragment>
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            setLayout('center')
          }}
        >
          Ver Detalles
        </Button>
      </Stack>
      <Modal open={!!layout} onClose={() => setLayout(undefined)}>
        <ModalDialog layout={layout} >
          <ModalClose />
          <DetailArtist name={name}/>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  )
}
