import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/contexts/AuthContext'
import { 
  Brain, 
  MessageSquare, 
  FileText, 
  BarChart3, 
  Users, 
  Star,
  LogOut,
  Settings
} from 'lucide-react'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleSignOut = async () => {
    setLoading(true)
    try {
      await signOut()
      toast.success('Signed out successfully')
      navigate('/')
    } catch (error) {
      toast.error('Error signing out')
    } finally {
      setLoading(false)
    }
  }

  const aiServices = [
    {
      id: 'chatbot',
      title: 'AI Chatbot Assistant',
      description: 'Intelligent customer service bot for your hotel website',
      icon: MessageSquare,
      status: 'Coming Soon',
      color: 'bg-blue-500'
    },
    {
      id: 'content',
      title: 'Content Generator',
      description: 'Generate compelling hotel descriptions and marketing content',
      icon: FileText,
      status: 'Coming Soon',
      color: 'bg-green-500'
    },
    {
      id: 'analytics',
      title: 'Smart Analytics',
      description: 'AI-powered insights into your hotel performance and guest behavior',
      icon: BarChart3,
      status: 'Coming Soon',
      color: 'bg-purple-500'
    },
    {
      id: 'guest-insights',
      title: 'Guest Insights',
      description: 'Understand your guests better with AI-driven analysis',
      icon: Users,
      status: 'Coming Soon',
      color: 'bg-orange-500'
    },
    {
      id: 'review-analyzer',
      title: 'Review Analyzer',
      description: 'Analyze and respond to guest reviews with AI assistance',
      icon: Star,
      status: 'Coming Soon',
      color: 'bg-red-500'
    },
    {
      id: 'ai-concierge',
      title: 'AI Concierge',
      description: 'Virtual concierge service for guest recommendations',
      icon: Brain,
      status: 'Coming Soon',
      color: 'bg-indigo-500'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-2xl font-bold text-gradient">Hotels.tools</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Welcome, {user?.email}
              </span>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={handleSignOut} disabled={loading}>
                <LogOut className="h-4 w-4 mr-2" />
                {loading ? 'Signing out...' : 'Sign out'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard</h2>
          <p className="text-lg text-muted-foreground">
            Access powerful AI tools to enhance your hotel's digital presence
          </p>
        </div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiServices.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-lg ${service.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full" 
                    disabled={service.status === 'Coming Soon'}
                    onClick={() => {
                      if (service.status === 'Coming Soon') {
                        toast.info('This feature is coming soon!')
                      }
                    }}
                  >
                    {service.status === 'Coming Soon' ? 'Coming Soon' : 'Launch Tool'}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Getting Started Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">Getting Started</CardTitle>
            <CardDescription>
              Welcome to Hotels.tools! Here's how to make the most of our AI-powered platform:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">1. Explore AI Services</h4>
                <p className="text-sm text-muted-foreground">
                  Browse through our collection of AI tools designed specifically for hotels.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2. Customize Your Setup</h4>
                <p className="text-sm text-muted-foreground">
                  Tailor each AI service to match your hotel's unique brand and requirements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">3. Monitor Performance</h4>
                <p className="text-sm text-muted-foreground">
                  Track the impact of AI tools on your guest satisfaction and operational efficiency.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">4. Get Support</h4>
                <p className="text-sm text-muted-foreground">
                  Our team is here to help you maximize the value of our AI solutions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default Dashboard 