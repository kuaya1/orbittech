// Enhanced location data following content strategy implementation

export interface LocationTestimonial {
  name: string;
  city: string;
  quote: string;
  speedBefore: number;
  speedAfter: number;
}

export interface LocationData {
  id: string;
  county: string;
  state: string;
  cities: string[];
  majorLandmarks: string[];
  drivingTimes: { from: string; time: string }[];
  testimonials: LocationTestimonial[];
  painPoints: string[];
  seoKeywords: string[];
}

export const loudounCountyData: LocationData = {
  id: 'loudoun-county-va',
  county: 'Loudoun County',
  state: 'VA',
  cities: [
    'Leesburg', 'Ashburn', 'Sterling', 'Purcellville', 'Middleburg',
    'Hamilton', 'Round Hill', 'Bluemont', 'Waterford', 'Lovettsville',
    'Hillsboro', 'Lincoln', 'Aldie', 'South Riding', 'Broadlands'
  ],
  majorLandmarks: [
    'Washington Dulles International Airport',
    'Leesburg Premium Outlets',
    'Morven Park',
    'Oatlands Historic House & Gardens',
    'Algonkian Regional Park'
  ],
  drivingTimes: [
    { from: 'Washington DC', time: '45 min' },
    { from: 'Arlington', time: '30 min' },
    { from: 'Frederick, MD', time: '25 min' },
    { from: 'Fairfax', time: '20 min' },
    { from: 'Reston', time: '15 min' }
  ],
  testimonials: [
    {
      name: 'Mike Rodriguez',
      city: 'Ashburn',
      quote: 'Finally have reliable internet for my home office. The installation team was professional and the speeds are incredible - 200+ Mbps consistently.',
      speedBefore: 12,
      speedAfter: 220
    },
    {
      name: 'Sarah Thompson',
      city: 'Purcellville',
      quote: 'Living in rural Loudoun County, our only option was slow DSL. Starlink has been a game-changer for our family and my kids\' online schooling.',
      speedBefore: 5,
      speedAfter: 180
    },
    {
      name: 'David Chen',
      city: 'Sterling',
      quote: 'The installation team handled everything perfectly, including routing cables around our solar panels. Professional service from start to finish.',
      speedBefore: 25,
      speedAfter: 195
    },
    {
      name: 'Jennifer Walsh',
      city: 'Leesburg',
      quote: 'Switched from Comcast to Starlink and couldn\'t be happier. More reliable service and better speeds for less money overall.',
      speedBefore: 30,
      speedAfter: 210
    },
    {
      name: 'Robert Kim',
      city: 'Middleburg',
      quote: 'Our equestrian facility needed reliable internet for security cameras and business operations. Starlink delivers exactly what we needed.',
      speedBefore: 8,
      speedAfter: 175
    }
  ],
  painPoints: [
    'Slow DSL speeds in rural areas',
    'Unreliable cable internet during peak hours',
    'Complete lack of broadband in horse country',
    'Expensive fiber installation for remote properties',
    'Data caps and throttling from traditional providers'
  ],
  seoKeywords: [
    'Starlink installation Loudoun County',
    'Starlink installer Leesburg',
    'Starlink setup Ashburn',
    'satellite internet Sterling VA',
    'Purcellville Starlink',
    'Middleburg internet installation',
    'Loudoun County internet service',
    'professional Starlink installation Virginia'
  ]
};

export const montgomeryCountyData: LocationData = {
  id: 'montgomery-county-md',
  county: 'Montgomery County',
  state: 'MD',
  cities: [
    'Rockville', 'Bethesda', 'Silver Spring', 'Germantown', 'Gaithersburg',
    'Potomac', 'Wheaton', 'Olney', 'Damascus', 'Poolesville',
    'Takoma Park', 'Kensington', 'Chevy Chase', 'Cabin John', 'Boyds'
  ],
  majorLandmarks: [
    'National Institutes of Health',
    'Walter Reed National Military Medical Center',
    'Great Falls Park',
    'Brookside Gardens',
    'C&O Canal National Historical Park'
  ],
  drivingTimes: [
    { from: 'Washington DC', time: '30 min' },
    { from: 'Baltimore', time: '45 min' },
    { from: 'Frederick', time: '20 min' },
    { from: 'Arlington, VA', time: '35 min' },
    { from: 'Annapolis', time: '50 min' }
  ],
  testimonials: [
    {
      name: 'Lisa Johnson',
      city: 'Bethesda',
      quote: 'Working from home as a consultant, I needed reliable internet. Starlink has been perfect - no more dropped video calls or slow uploads.',
      speedBefore: 20,
      speedAfter: 190
    },
    {
      name: 'Mark Williams',
      city: 'Potomac',
      quote: 'Our rural Potomac property finally has high-speed internet. The installation was seamless and the performance exceeds expectations.',
      speedBefore: 15,
      speedAfter: 205
    },
    {
      name: 'Dr. Amanda Foster',
      city: 'Rockville',
      quote: 'As a physician doing telemedicine, reliable internet is critical. Starlink provides the stability and speed I need for patient care.',
      speedBefore: 35,
      speedAfter: 185
    },
    {
      name: 'James Martinez',
      city: 'Damascus',
      quote: 'Living in rural Damascus, our internet options were limited. Starlink installation was professional and speeds are amazing.',
      speedBefore: 7,
      speedAfter: 170
    }
  ],
  painPoints: [
    'Expensive internet options in affluent areas',
    'Poor service in rural Damascus and Poolesville',
    'Inconsistent speeds during peak hours',
    'Limited choices for high-speed internet',
    'Frequent outages with traditional providers'
  ],
  seoKeywords: [
    'Starlink installation Montgomery County MD',
    'Starlink installer Bethesda',
    'Starlink setup Rockville',
    'satellite internet Potomac MD',
    'Germantown Starlink',
    'Damascus internet installation',
    'Montgomery County internet service',
    'professional Starlink installation Maryland'
  ]
};

export const fairfaxCountyData: LocationData = {
  id: 'fairfax-county-va',
  county: 'Fairfax County',
  state: 'VA',
  cities: [
    'Fairfax', 'Alexandria', 'Reston', 'Herndon', 'Vienna',
    'McLean', 'Great Falls', 'Falls Church', 'Burke', 'Springfield',
    'Annandale', 'Centreville', 'Chantilly', 'Oakton', 'Lorton'
  ],
  majorLandmarks: [
    'Tysons Corner',
    'Wolf Trap National Park',
    'Mount Vernon',
    'Fairfax County Courthouse',
    'Reston Town Center'
  ],
  drivingTimes: [
    { from: 'Washington DC', time: '25 min' },
    { from: 'Arlington', time: '15 min' },
    { from: 'Loudoun County', time: '20 min' },
    { from: 'Prince William County', time: '30 min' },
    { from: 'Maryland', time: '35 min' }
  ],
  testimonials: [
    {
      name: 'John Miller',
      city: 'Fairfax',
      quote: 'Professional installation, great communication, and my Starlink is working perfectly! The team was punctual and cleaned up after themselves.',
      speedBefore: 18,
      speedAfter: 215
    },
    {
      name: 'Susan Clark',
      city: 'Reston',
      quote: 'Upgraded from Verizon FiOS to get better upload speeds for my video editing business. Starlink delivers exactly what I needed.',
      speedBefore: 40,
      speedAfter: 200
    },
    {
      name: 'Michael Brown',
      city: 'Great Falls',
      quote: 'Our large property in Great Falls had dead zones with our old setup. Starlink with mesh WiFi gives us coverage everywhere.',
      speedBefore: 22,
      speedAfter: 185
    }
  ],
  painPoints: [
    'High cost of premium internet services',
    'Inconsistent performance in dense areas',
    'Limited upload speeds for business use',
    'Service interruptions during storms',
    'Lack of options for rural Great Falls area'
  ],
  seoKeywords: [
    'Starlink installation Fairfax County',
    'Starlink installer Fairfax VA',
    'Starlink setup Reston',
    'satellite internet Vienna VA',
    'McLean Starlink',
    'Great Falls internet installation',
    'Fairfax County internet service',
    'professional Starlink installation Northern Virginia'
  ]
};

export const allLocationsData = [
  loudounCountyData,
  montgomeryCountyData,
  fairfaxCountyData
];
