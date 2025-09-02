// Google Analytics 4 Event Tracking Utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Custom event types for better TypeScript support
export type AnalyticsEvent = 
  | 'navigation_click'
  | 'external_link_click'
  | 'contact_interaction'
  | 'project_view'
  | 'social_link_click'
  | 'section_scroll'
  | 'form_interaction';

export interface EventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

// Main tracking function
export const trackEvent = (eventName: AnalyticsEvent, parameters: EventParams = {}) => {
  // Only track in production or when gtag is available
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', eventName, {
        event_category: parameters.event_category || 'engagement',
        event_label: parameters.event_label,
        value: parameters.value,
        ...parameters.custom_parameters
      });
    } catch (error) {
      console.warn('Analytics tracking error:', error);
    }
  }
};

// Specific tracking functions for common events
export const trackNavigation = (sectionName: string, fromSection?: string) => {
  trackEvent('navigation_click', {
    event_category: 'navigation',
    event_label: sectionName,
    custom_parameters: {
      destination_section: sectionName,
      source_section: fromSection,
      navigation_type: 'internal'
    }
  });
};

export const trackExternalLink = (url: string, linkType: 'project' | 'social' | 'other') => {
  trackEvent('external_link_click', {
    event_category: 'external_links',
    event_label: url,
    custom_parameters: {
      link_type: linkType,
      destination_url: url
    }
  });
};

export const trackContactInteraction = (action: 'dialog_open' | 'form_submit' | 'email_click') => {
  trackEvent('contact_interaction', {
    event_category: 'contact',
    event_label: action,
    custom_parameters: {
      interaction_type: action
    }
  });
};

export const trackProjectView = (projectName: string, action: 'view' | 'demo_click' | 'github_click') => {
  trackEvent('project_view', {
    event_category: 'projects',
    event_label: `${projectName}_${action}`,
    custom_parameters: {
      project_name: projectName,
      action_type: action
    }
  });
};

export const trackSectionScroll = (sectionName: string, scrollDepth: number) => {
  trackEvent('section_scroll', {
    event_category: 'scroll_tracking',
    event_label: sectionName,
    value: scrollDepth,
    custom_parameters: {
      section_name: sectionName,
      scroll_depth: scrollDepth
    }
  });
};

// Enhanced page view tracking with custom parameters
export const trackPageView = (pageName: string, additionalParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('config', 'G-NXW7C6FCW8', {
        page_title: pageName,
        page_location: window.location.href,
        ...additionalParams
      });
    } catch (error) {
      console.warn('Page view tracking error:', error);
    }
  }
};

// Performance tracking
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (perfData) {
          trackEvent('navigation_click', {
            event_category: 'performance',
            event_label: 'page_load_time',
            value: Math.round(perfData.loadEventEnd - perfData.fetchStart),
            custom_parameters: {
              dom_content_loaded: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
              first_byte: Math.round(perfData.responseStart - perfData.fetchStart)
            }
          });
        }
      }, 1000);
    });
  }
};