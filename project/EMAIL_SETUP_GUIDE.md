# EmailJS Setup Guide for Orbittec Contact Form

## Current Setup Status
Your contact form in `src/components/Contact.tsx` is already configured with EmailJS. Here's what you need to verify:

## 1. EmailJS Account Configuration

### Service Configuration
- **Service ID**: `service_ujrkxyh` (already configured)
- **Template ID**: `template_orbittec` (already configured)
- **Public Key**: `cZxddkmZep5G_h86H` (already configured)

### Email Template Setup
Your EmailJS template should be configured to send emails TO: `contact@theorbittech.com`

## 2. Template Variables
The form sends these variables to your EmailJS template:
- `{{to_email}}` - Set to "contact@theorbittech.com"
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{phone}}` - Customer's phone number
- `{{address}}` - Installation address
- `{{service_type}}` - Type of service (residential/business/mobile)
- `{{message}}` - Additional message
- `{{preferred_date}}` - Preferred installation date
- `{{preferred_time}}` - Preferred time window

## 3. EmailJS Template Example
Here's what your EmailJS template should look like:

```
Subject: New Starlink Installation Request - {{service_type}}

Hello Orbittec Team,

You have received a new consultation request:

Customer Information:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Service Type: {{service_type}}

Installation Details:
- Address: {{address}}
- Preferred Date: {{preferred_date}}
- Preferred Time: {{preferred_time}}

Additional Message:
{{message}}

Please contact the customer within 24-48 hours.

Best regards,
Orbittec Website
```

## 4. Verification Steps

1. **Check EmailJS Dashboard**: 
   - Go to https://dashboard.emailjs.com/
   - Verify your service is connected to Gmail
   - Check that your template exists and is configured correctly

2. **Test the Form**:
   - Submit a test request through your website
   - Check if email arrives at contact@theorbittech.com
   - Verify all form data is included

3. **Gmail Settings**:
   - Check spam folder for test emails
   - Add EmailJS to your trusted senders
   - Ensure Gmail filters aren't blocking the emails

## 5. Troubleshooting

If emails aren't arriving:

1. **Check EmailJS Logs**:
   - Go to your EmailJS dashboard
   - Check the "Logs" section for failed sends

2. **Verify Template**:
   - Ensure `{{to_email}}` is set to "contact@theorbittech.com"
   - Check all variable names match exactly

3. **Gmail Issues**:
   - Check spam/junk folder
   - Verify Gmail account is active
   - Check Gmail storage isn't full

## 6. Current Form Features

Your contact form already includes:
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ EmailJS integration
- ✅ Fallback contact information
- ✅ Mobile-responsive design

## 7. Alternative Contact Methods

The form also displays backup contact methods:
- Phone: (571) 999-6915
- Email: contact@theorbittech.com

## Next Steps

1. Log into your EmailJS account
2. Verify the template is sending to contact@theorbittech.com
3. Test the form with a real submission
4. Check your Gmail inbox and spam folder

The form is production-ready and should be working correctly with these settings!
