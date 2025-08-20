export interface Testimonial {
  name: string;
  city: string;
  rating: number;
  text: string;
  date: string;
  installationType: 'residential' | 'business';
  verified: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SpeedTestResult {
  location: string;
  downloadSpeed: number;
  uploadSpeed: number;
  latency: number;
  date: string;
}

export interface LocationData {
  county: string;
  state: 'VA' | 'MD';
  cities: Array<{
    name: string;
    zipCodes: string[];
    population?: number;
  }>;
  population: number;
  avgSpeed: number;
  installationCount: number;
  testimonials: Testimonial[];
  competitors: string[];
  faqs: FAQ[];
  landmarks: string[];
  speedTests: SpeedTestResult[];
  demographics?: {
    households: number;
    medianIncome: number;
    ruralPercentage: number;
  };
}
