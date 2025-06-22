import { supabase } from '@/lib/supabase';

export interface AIServiceResponse {
  success: boolean;
  response?: string;
  service?: string;
  error?: string;
}

export interface AIServiceRequest {
  message: string;
}

// Available AI services
export const AI_SERVICES = {
  REVENUE_OPTIMIZATION: 'revenue-optimization',
  INVENTORY_MANAGEMENT: 'inventory-management',
  GUEST_EXPERIENCE: 'guest-experience',
  MARKETING_AUTOMATION: 'marketing-automation',
  PREDICTIVE_ANALYTICS: 'predictive-analytics',
  SMART_CONCIERGE: 'smart-concierge'
} as const;

export type AIServiceType = typeof AI_SERVICES[keyof typeof AI_SERVICES];

// Generic function to call any AI service
export async function callAIService(
  serviceType: AIServiceType, 
  request: AIServiceRequest
): Promise<AIServiceResponse> {
  try {
    const { data, error } = await supabase.functions.invoke(serviceType, {
      body: request
    });

    if (error) {
      console.error(`Error calling ${serviceType}:`, error);
      return {
        success: false,
        error: error.message || 'An error occurred while processing your request'
      };
    }

    return data as AIServiceResponse;
  } catch (error) {
    console.error(`Network error calling ${serviceType}:`, error);
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.'
    };
  }
}

// Specific service functions for better type safety and easier usage
export const aiServices = {
  revenueOptimization: (message: string) => 
    callAIService(AI_SERVICES.REVENUE_OPTIMIZATION, { message }),
  
  inventoryManagement: (message: string) => 
    callAIService(AI_SERVICES.INVENTORY_MANAGEMENT, { message }),
  
  guestExperience: (message: string) => 
    callAIService(AI_SERVICES.GUEST_EXPERIENCE, { message }),
  
  marketingAutomation: (message: string) => 
    callAIService(AI_SERVICES.MARKETING_AUTOMATION, { message }),
  
  predictiveAnalytics: (message: string) => 
    callAIService(AI_SERVICES.PREDICTIVE_ANALYTICS, { message }),
  
  smartConcierge: (message: string) => 
    callAIService(AI_SERVICES.SMART_CONCIERGE, { message })
};

// Service metadata for UI display
export const AI_SERVICE_METADATA = {
  [AI_SERVICES.REVENUE_OPTIMIZATION]: {
    name: 'Revenue Optimization',
    description: 'Optimize pricing strategies and revenue streams',
    icon: '💰',
    color: 'bg-green-500'
  },
  [AI_SERVICES.INVENTORY_MANAGEMENT]: {
    name: 'Inventory Management',
    description: 'Streamline operations and reduce costs',
    icon: '📦',
    color: 'bg-blue-500'
  },
  [AI_SERVICES.GUEST_EXPERIENCE]: {
    name: 'Guest Experience',
    description: 'Enhance guest satisfaction and loyalty',
    icon: '⭐',
    color: 'bg-purple-500'
  },
  [AI_SERVICES.MARKETING_AUTOMATION]: {
    name: 'Marketing Automation',
    description: 'Automate marketing campaigns and outreach',
    icon: '📢',
    color: 'bg-orange-500'
  },
  [AI_SERVICES.PREDICTIVE_ANALYTICS]: {
    name: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions',
    icon: '📊',
    color: 'bg-indigo-500'
  },
  [AI_SERVICES.SMART_CONCIERGE]: {
    name: 'Smart Concierge',
    description: '24/7 automated guest assistance',
    icon: '🤖',
    color: 'bg-pink-500'
  }
} as const; 