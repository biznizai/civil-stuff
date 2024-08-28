"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, HardHat, Laptop, Menu, MessageSquare, Moon, Paintbrush, Send, Sun } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useEffect, useRef, useState } from 'react'

import BillOfQuantities from './components/BillOfQuantities'
import { Button } from "@/components/ui/button"
import Construction from './components/Construction'
import Contract from './components/Contract'
import Design from './components/Design'
import { Input } from "@/components/ui/input"
import Planning from './components/Planning'
import { ScrollArea } from "@/components/ui/scroll-area"
import { useTheme } from "next-themes"

type Message = {
  role: 'user' | 'ai'
  content: string
}

const mockAIResponse = (query: string) => {
  const responses = [
    "For a strong residential foundation, start with a soil test to determine the best foundation type for your area.",
    "To maximize energy efficiency in homes, consider installing double-pane windows and adding extra insulation in the attic and walls.",
    "When designing the roof for a residential unit, factor in local weather patterns and choose materials like asphalt shingles or metal roofing accordingly.",
    "Ensure proper ventilation in residential buildings by installing a balanced HVAC system and strategically placed windows for natural airflow.",
    "For residential plumbing, plan your water supply and drainage systems carefully, considering the layout of bathrooms, kitchen, and laundry areas."
  ]
  return responses[Math.floor(Math.random() * responses.length)]
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const { setTheme, theme } = useTheme()
  const [currentPage, setCurrentPage] = useState('chat')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages(prev => [...prev, { role: 'user', content: input }])
      setInput('')
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'ai', content: mockAIResponse(input) }])
      }, 1000)
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const navItems = [
    { icon: MessageSquare, label: 'Chat', page: 'chat' },
    { icon: ClipboardList, label: 'Planning', page: 'planning' },
    { icon: Paintbrush, label: 'Design', page: 'design' },
    { icon: HardHat, label: 'Construction', page: 'construction' },
    { icon: Laptop, label: 'Bill of Quantities', page: 'billOfQuantities' },
    { icon: Laptop, label: 'Contract', page: 'contract' }, // New item
  ]

  const renderPage = () => {
    switch (currentPage) {
      case 'chat':
        return (
          <Card className="flex-grow m-4 overflow-hidden flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-center">Residential Construction Assistant</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden">
              <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                    <div className={`flex items-start max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                        <AvatarFallback>{message.role === 'user' ? 'U' : 'AI'}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500">{message.role === 'user' ? 'You' : 'AI'}</div>
                        <div className="text-sm">{message.content}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                <Input
                  type="text"
                  placeholder="e.g., What are the key steps in planning a residential construction project?"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  className="flex-grow"
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </CardFooter>
          </Card>
        )
      case 'planning':
        return <Planning />
      case 'design':
        return <Design />
      case 'construction':
        return <Construction />
      case 'billOfQuantities':
        return <BillOfQuantities />
      case 'contract': // New case
        return <Contract />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-background border-b">
        <div className="flex justify-between items-center p-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="justify-start"
                    onClick={() => {
                      setCurrentPage(item.page)
                      setIsOpen(false)
                    }}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <h1 className="text-xl font-bold">Residential Construction AI</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                {theme === 'dark' ? (
                  <Moon className="h-[1.2rem] w-[1.2rem]" />
                ) : theme === 'light' ? (
                  <Sun className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                  <Laptop className="h-[1.2rem] w-[1.2rem]" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <Laptop className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <div className="flex flex-grow overflow-hidden">
        <nav className="hidden lg:flex flex-col w-[240px] p-4 border-r">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="justify-start mb-2"
              onClick={() => setCurrentPage(item.page)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>
        {renderPage()}
      </div>
    </div>
  )
}