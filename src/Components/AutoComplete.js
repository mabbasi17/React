import React from 'react'
import Box from '@mui/material/Box'
import { Autocomplete, TextField } from '@mui/material'

export default function AutoComplete({ cat, setCat }) {
  return (
    <Box>
      <Autocomplete
        value={cat}
        onChange={(event, newValue) => {
          setCat(newValue.value)
        }}
        sx={{ width: '300px', background: '$eee' }}
        options={[
          { label: 'epyx', value: 'epyx' },
          { label: 'iCAST', value: 'iCAST' },
        ]}
        renderInput={(params) => (
          <TextField
            placeholder="Filter Products"
            {...params}
            label="Choose a product"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
    </Box>
  )
}
