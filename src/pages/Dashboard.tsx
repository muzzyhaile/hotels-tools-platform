import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/contexts/AuthContext'
import { 
  DollarSign, 
  Package, 
  Star, 
  Megaphone, 
  TrendingUp, 
  Bot,
  LogOut,
  Settings,
  Loader2
} from 'lucide-react'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { aiServices, AI_SERVICE_METADATA, AI_SERVICES } from '@/services/aiServices'

const Dashboard = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [serviceLoading, setServiceLoading] = useState<string | null>(null)

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

  const handleServiceClick = async (serviceId: string) => {
    setServiceLoading(serviceId)
    try {
      let result
      const testMessage = "Hello! I need help with my hotel operations. Can you provide some general advice?"
      
      switch (serviceId) {
        case AI_SERVICES.REVENUE_OPTIMIZATION:
          result = await aiServices.revenueOptimization(testMessage)
          break
        case AI_SERVICES.INVENTORY_MANAGEMENT:
          result = await aiServices.inventoryManagement(testMessage)
          break
        case AI_SERVICES.GUEST_EXPERIENCE:
          result = await aiServices.guestExperience(testMessage)
          break
        default:
          toast.info('This service is coming soon!')
          return
      }

      if (result.success) {
        toast.success(`${result.service} responded successfully!`)
        // Here you could open a chat interface or modal with the response
        console.log('AI Response:', result.response)
      } else {
        toast.error(result.error || 'Service temporarily unavailable')
      }
    } catch (error) {
      toast.error('Failed to connect to AI service')
    } finally {
      setServiceLoading(null)
    }
  }

  const hotelAIServices = [
    {
      id: AI_SERVICES.REVENUE_OPTIMIZATION,
      title: 'Revenue Optimization',
      description: 'AI-powered pricing strategies and revenue management',
      icon: DollarSign,
      status: 'Active',
      color: 'bg-green-500'
    },
    {
      id: AI_SERVICES.INVENTORY_MANAGEMENT,
      title: 'Inventory Management',
      description: 'Smart inventory tracking and supply chain optimization',
      icon: Package,
      status: 'Active',
      color: 'bg-blue-500'
    },
    {
      id: AI_SERVICES.GUEST_EXPERIENCE,
      title: 'Guest Experience',
      description: 'Enhance guest satisfaction with AI insights',
      icon: Star,
      status: 'Active',
      color: 'bg-purple-500'
    },
    {
      id: AI_SERVICES.MARKETING_AUTOMATION,
      title: 'Marketing Automation',
      description: 'Automated marketing campaigns and guest outreach',
      icon: Megaphone,
      status: 'Coming Soon',
      color: 'bg-orange-500'
    },
    {
      id: AI_SERVICES.PREDICTIVE_ANALYTICS,
      title: 'Predictive Analytics',
      description: 'Forecast demand and optimize operations',
      icon: TrendingUp,
      status: 'Coming Soon',
      color: 'bg-indigo-500'
    },
    {
      id: AI_SERVICES.SMART_CONCIERGE,
      title: 'Smart Concierge',
      description: '24/7 AI-powered guest assistance and recommendations',
      icon: Bot,
      status: 'Coming Soon',
      color: 'bg-pink-500'
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
          <h2 className="text-3xl font-bold text-foreground mb-2">AI Dashboard</h2>
          <p className="text-lg text-muted-foreground">
            Powerful AI services to transform your hotel operations
          </p>
        </div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotelAIServices.map((service) => {
            const Icon = service.icon
            const isLoading = serviceLoading === service.id
            const isActive = service.status === 'Active'
            
            return (
              <Card key={service.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-lg ${service.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge 
                      variant={isActive ? "default" : "secondary"} 
                      className="text-xs"
                    >
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
                    disabled={!isActive || isLoading}
                    onClick={() => handleServiceClick(service.id)}
                  >
                    {isLoading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                    {isLoading 
                      ? 'Connecting...' 
                      : isActive 
                        ? 'Launch Service' 
                        : 'Coming Soon'
                    }
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Service Status */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">Service Status</CardTitle>
            <CardDescription>
              Current status of your AI services and integrations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-sm text-green-700">Active Services</div>
              </div>
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-sm text-blue-700">Coming Soon</div>
              </div>
              <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                <div className="text-2xl font-bold text-purple-600">OpenAI</div>
                <div className="text-sm text-purple-700">AI Provider</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Getting Started Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Getting Started</CardTitle>
            <CardDescription>
              Start using AI to enhance your hotel operations:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">1. Try Active Services</h4>
                <p className="text-sm text-muted-foreground">
                  Click "Launch Service" on Revenue Optimization, Inventory Management, or Guest Experience to test the AI.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2. Ask Specific Questions</h4>
                <p className="text-sm text-muted-foreground">
                  Each AI service is specialized for different hotel operations - ask relevant questions for best results.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">3. Monitor Performance</h4>
                <p className="text-sm text-muted-foreground">
                  Track how AI recommendations impact your hotel's efficiency and guest satisfaction.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">4. More Services Coming</h4>
                <p className="text-sm text-muted-foreground">
                  Marketing Automation, Predictive Analytics, and Smart Concierge services launching soon.
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