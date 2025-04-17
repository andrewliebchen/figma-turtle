/** @jsxImportSource theme-ui */
import { useState, useEffect } from 'react'
import { Box, Flex, Button, Text, Textarea } from 'theme-ui'
import { MaterialSymbol } from 'react-material-symbols'
import 'react-material-symbols/rounded'
import { sendChatMessage } from './services/openai'
import { listenTS } from './utils'
import type { ChatMessage } from '../shared/universals'

const SYSTEM_PROMPT = `You are an AI design assistant helping to create visual layouts in Figma. 
You can understand natural language descriptions and help translate them into visual designs. 
Be concise but friendly in your responses. Ask clarifying questions when needed.`;

export const Chat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'system', content: SYSTEM_PROMPT }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Listen for chat responses
    return listenTS('chat-response', (data) => {
      if (data.error) {
        console.error('[Chat] Error:', data.error)
      }
      setMessages(prev => [...prev, data.message])
      setIsLoading(false)
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: ChatMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      await sendChatMessage([...messages, userMessage])
    } catch (error) {
      console.error('[Chat] Error sending message:', error)
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Submit on Enter without Shift (Shift+Enter allows for new lines)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        height: '100%',
        bg: 'background',
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {messages.filter(m => m.role !== 'system').map((message, index) => (
          <Box
            key={index}
            sx={{
              alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '80%',
            }}
          >
            <Box
              sx={{
                p: 2,
                borderRadius: 'default',
                bg: message.role === 'user' ? 'primary' : 'muted',
                color: message.role === 'user' ? 'background' : 'text',
              }}
            >
              <Text>{message.content}</Text>
            </Box>
          </Box>
        ))}
        {isLoading && (
          <Box
            sx={{
              alignSelf: 'flex-start',
              p: 2,
              borderRadius: 'default',
              bg: 'muted',
            }}
          >
            <Text>Thinking...</Text>
          </Box>
        )}
      </Box>

      <Box sx={{ p: 3, borderTop: '1px solid', borderColor: 'muted' }}>
        <form onSubmit={handleSubmit}>
          <Flex sx={{ gap: 2 }}>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message... (Press Enter to send)"
              sx={{
                flex: 1,
                resize: 'none',
                minHeight: '60px',
                maxHeight: '120px',
              }}
            />
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              sx={{ alignSelf: 'flex-end', p: 2, minWidth: 'auto' }}
            >
              <MaterialSymbol icon="send" size={20} />
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  )
} 