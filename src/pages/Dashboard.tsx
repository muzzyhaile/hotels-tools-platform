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
  MessageCircle
} from 'lucide-react'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { AI_SERVICES, AIServiceType } from '@/services/aiServices'
import AIServiceModal from '@/components/AIServiceModal'

const Dashboard = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [selectedService, setSelectedService] = useState<{
    id: AIServiceType;
    title: string;
    description: string;
    color: string;
  } | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  const handleServiceClick = (service: typeof hotelAIServices[0]) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const hotelAIServices = [
    {
      id: AI_SERVICES.REVENUE_OPTIMIZATION,
      title: 'Revenue Optimization',
      description: 'AI-powered pricing strategies, dynamic pricing, and revenue management insights',
      icon: DollarSign,
      status: 'Active',
      color: 'bg-green-500'
    },
    {
      id: AI_SERVICES.INVENTORY_MANAGEMENT,
      title: 'Inventory Management',
      description: 'Smart inventory tracking, supply chain optimization, and cost reduction strategies',
      icon: Package,
      status: 'Active',
      color: 'bg-blue-500'
    },
    {
      id: AI_SERVICES.GUEST_EXPERIENCE,
      title: 'Guest Experience',
      description: 'Enhance guest satisfaction with personalized recommendations and service improvements',
      icon: Star,
      status: 'Active',
      color: 'bg-purple-500'
    },
    {
      id: AI_SERVICES.MARKETING_AUTOMATION,
      title: 'Marketing Automation',
      description: 'Automated marketing campaigns and targeted guest outreach strategies',
      icon: Megaphone,
      status: 'Active',
      color: 'bg-orange-500'
    },
    {
      id: AI_SERVICES.PREDICTIVE_ANALYTICS,
      title: 'Predictive Analytics',
      description: 'Forecast demand, occupancy rates, and optimize operational planning',
      icon: TrendingUp,
      status: 'Active',
      color: 'bg-indigo-500'
    },
    {
      id: AI_SERVICES.SMART_CONCIERGE,
      title: 'Smart Concierge',
      description: '24/7 AI-powered guest assistance and personalized local recommendations',
      icon: Bot,
      status: 'Active',
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
            Powerful AI services to transform your hotel operations. Click on any active service to start a conversation!
          </p>
        </div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotelAIServices.map((service) => {
            const Icon = service.icon
            
            return (
              <Card key={service.id} className="hover:shadow-lg transition-all duration-200 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-lg ${service.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="default" className="text-xs">
                      Active
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
                    onClick={() => handleServiceClick(service)}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats/Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Active Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">6</div>
              <p className="text-sm text-muted-foreground">AI services ready to use</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Chat Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">∞</div>
              <p className="text-sm text-muted-foreground">Unlimited conversations available</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Get Started</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                Click on any service to start getting AI-powered insights for your hotel operations.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                View Help Guide
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* AI Service Modal */}
      <AIServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </div>
  )
}

export default Dashboard 