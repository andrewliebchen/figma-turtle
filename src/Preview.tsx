/** @jsxImportSource theme-ui */
import { Box, Flex, Text, Button } from 'theme-ui'
import { MaterialSymbol } from 'react-material-symbols'
import 'react-material-symbols/rounded'

export const Preview = () => {
  const handleRefresh = () => {
    console.log('Refresh button clicked')
  }

  const handleGenerate = () => {
    console.log('Generate button clicked')
  }

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        height: '100%',
        bg: 'background',
        borderLeft: '1px solid',
        borderColor: 'muted',
      }}
    >
      <Flex
        sx={{
          p: 3,
          borderBottom: '1px solid',
          borderColor: 'muted',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 2,
        }}
      >
        <Button variant="secondary" sx={{ p: 1, minWidth: 'auto' }} onClick={handleRefresh}>
          <MaterialSymbol icon="refresh" size={20} />
        </Button>
        <Button variant="primary" sx={{ p: 1, minWidth: 'auto' }} onClick={handleGenerate} disabled>
          <MaterialSymbol icon="auto_awesome" size={20} />
        </Button>
      </Flex>
      
      <Box
        sx={{
          flex: 1,
          p: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bg: 'muted',
        }}
      >
        <Text sx={{ color: 'secondary' }}>Preview will appear here</Text>
      </Box>
    </Flex>
  )
} 