import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import Section from '../shared/Section';

interface LeadFormFields {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  serviceType: 'installation' | 'installation-plus-wifi';
  preferredDate: string;
  message?: string;
}

interface LeadFormProps {
  compact?: boolean;
}

const LeadForm: React.FC<LeadFormProps> = ({ compact = false }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger
  } = useForm<LeadFormFields>();

  const totalSteps = compact ? 2 : 3;
  const watchedFields = watch();

  const nextStep = async () => {
    let fieldsToValidate: (keyof LeadFormFields)[] = [];
    
    if (currentStep === 1) {
      fieldsToValidate = ['fullName', 'email', 'phone'];
    } else if (currentStep === 2) {
      fieldsToValidate = ['address', 'serviceType'];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: LeadFormFields) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would send data to your backend
      console.log('Form submitted:', data);
      
      // Track conversion event
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'lead_form_submit',
          form_type: compact ? 'compact_quote' : 'full_quote',
          service_selected: data.serviceType,
          value: data.serviceType === 'installation' ? 599 : 899
        });
      }
      
      // Redirect to thank you page
      navigate('/thank-you');
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  if (compact) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 border">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
          <p className="text-gray-600">Professional installation starting at $599</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {currentStep === 1 && (
            <>
              <div>
                <input
                  {...register('fullName', { required: 'Full name is required' })}
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('phone', { 
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[\+]?[(]?[\d\s\-\(\)]{10,}$/,
                      message: 'Please enter a valid phone number'
                    }
                  })}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('address', { required: 'Address is required' })}
                  type="text"
                  placeholder="Installation Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                )}
              </div>

              <Button 
                type="button" 
                onClick={nextStep}
                className="w-full"
                size="lg"
              >
                Continue
              </Button>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <select
                  {...register('serviceType', { required: 'Please select a service type' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select Installation Package</option>
                  <option value="installation">Professional Installation - $599</option>
                  <option value="installation-plus-wifi">Complete Coverage Package - $899</option>
                </select>
                {errors.serviceType && (
                  <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
                )}
              </div>

              <div className="flex gap-3">
                <Button 
                  type="button" 
                  variant="secondary"
                  onClick={prevStep}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1"
                  size="lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
                </Button>
              </div>
            </>
          )}
        </form>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-gray-600 mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progressPercentage)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  // Full form version for dedicated form page
  return (
    <Section>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Installation Quote</h2>
          <p className="text-xl text-gray-600">Professional Starlink installation with 2-year warranty</p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step <= currentStep 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`flex-1 h-1 mx-4 ${
                    step < currentStep ? 'bg-primary-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Contact Info</span>
            <span>Service Details</span>
            <span>Confirmation</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Step content would go here - similar to compact version but more detailed */}
            {/* Implementation truncated for brevity */}
          </form>
        </div>
      </div>
    </Section>
  );
};

export default LeadForm;
