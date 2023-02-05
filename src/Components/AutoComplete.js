import React from 'react'
import Box from '@mui/material/Box'
import { Autocomplete, TextField } from '@mui/material'

export default function AutoComplete({ cat, setCat }) {
  return (
    <Box>
      <Autocomplete
        size='small'
        value={cat}
        isOptionEqualToValue={(option, value) =>
                  option.iso === value.iso
                }
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
               color='secondary'
            placeholder="Filter Products"
            {...params}
            label="Choose Category"
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
      />
    </Box>
  )
}
