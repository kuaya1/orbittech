import React from 'react';
import { SEOMetadata } from '../SEO/SEOMetadata';
import LocationSchema from '../SEO/LocationSchema';
import OptimizedImage from '../OptimizedImage';
import { Star, Phone, MapPin, Clock, Shield, Award } from 'lucide-react';

/**
 * Washington, DC location page optimized for local SEO
 * Targets: "Starlink installation Washington DC", "satellite internet District of Columbia"
 */
export const WashingtonDCPage: React.FC = () => {
  const dcZipCodes = [
    '20001', '20002', '20003', '20004', '20005', '20006', '20007', '20008', '20009', '20010',
    '20011', '20012', '20015', '20016', '20017', '20018', '20019', '20020', '20022', '20024',
    '20026', '20027', '20029', '20030', '20032', '20033', '20035', '20036', '20037', '20038',
    '20039', '20040', '20041', '20042', '20043', '20044', '20045', '20047', '20049', '20050',
    '20052', '20053', '20055', '20056', '20057', '20058', '20059', '20060', '20061', '20062',
    '20063', '20064', '20065', '20066', '20067', '20068', '20069', '20070', '20071', '20073',
    '20074', '20075', '20076', '20077', '20078', '20080', '20081', '20082', '20090', '20091',
    '20201', '20202', '20203', '20204', '20206', '20207', '20208', '20210', '20211', '20212',
    '20213', '20214', '20215', '20216', '20217', '20218', '20219', '20220', '20221', '20222',
    '20223', '20224', '20226', '20227', '20228', '20229', '20230', '20232', '20233', '20235',
    '20237', '20238', '20239', '20240', '20241', '20242', '20244', '20245', '20250', '20251',
    '20252', '20254', '20260', '20261', '20262', '20265', '20266', '20268', '20270', '20277',
    '20289', '20299', '20301', '20303', '20306', '20307', '20310', '20314', '20317', '20318',
    '20319', '20330', '20340', '20350', '20355', '20370', '20372', '20373', '20374', '20375',
    '20376', '20380', '20390', '20391', '20392', '20393', '20394', '20395', '20398', '20401',
    '20402', '20403', '20404', '20405', '20406', '20407', '20408', '20410', '20411', '20412',
    '20413', '20414', '20415', '20416', '20417', '20418', '20419', '20420', '20421', '20422',
    '20423', '20424', '20425', '20426', '20427', '20428', '20429', '20431', '20433', '20434',
    '20435', '20436', '20437', '20439', '20440', '20441', '20442', '20444', '20447', '20451',
    '20453', '20456', '20460', '20463', '20468', '20469', '20470', '20472', '20500', '20501',
    '20502', '20503', '20504', '20505', '20506', '20507', '20508', '20509', '20510', '20511',
    '20515', '20520', '20521', '20522', '20523', '20524', '20525', '20526', '20527', '20528',
    '20529', '20530', '20531', '20533', '20534', '20535', '20536', '20537', '20538', '20539',
    '20540', '20541', '20542', '20543', '20544', '20546', '20547', '20548', '20549', '20551',
    '20552', '20553', '20554', '20555', '20557', '20559', '20560', '20565', '20566', '20570',
    '20571', '20572', '20573', '20575', '20576', '20577', '20578', '20579', '20580', '20581',
    '20585', '20586', '20590', '20591', '20593', '20594', '20597', '20599'
  ];

  return (
    <>
      <SEOMetadata 
        title="Starlink Installation Washington DC | Professional Satellite Internet Setup"
        description="Expert Starlink installation in Washington, DC. Professional satellite internet setup in Georgetown, Capitol Hill, Dupont Circle & more. Call The Orbit Tech at 571-999-6915."
        canonical="https://theorbittech.com/locations/washington-dc"
      />
      
      <LocationSchema 
        location="Washington" 
        state="DC" 
        zipCodes={dcZipCodes.slice(0, 30)} // Show first 30 zip codes
        serviceRadius={20}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-blue-400 font-medium">Washington, District of Columbia</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Premium Starlink Installation Service in Washington, DC
              </h1>
              
              <p className="text-xl mb-6 text-gray-300">
                Professional Starlink satellite internet installation throughout Washington, DC. 
                Serving Georgetown, Capitol Hill, Dupont Circle, Adams Morgan, and all DC neighborhoods.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-blue-400 mr-2" />
                  <span>5-Star Reviews</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>110+ Installations</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+1-571-999-6915"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (571) 999-6915
                </a>
                <a 
                  href="#quote"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 text-center"
                >
                  Get Free Quote
                </a>
              </div>
            </div>

            <div className="relative">
              <OptimizedImage
                src="/starlink-dish-installation.jpg"
                alt="Professional Starlink installation in Washington DC"
                width={600}
                height={400}
                priority={true}
                className="rounded-lg shadow-2xl"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-blue-600 rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">110+</div>
                  <div className="text-sm">DC Installs</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Starlink Installation Service Areas in Washington, DC
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Georgetown', 'Capitol Hill', 'Dupont Circle', 'Adams Morgan', 'Foggy Bottom', 'Penn Quarter',
              'Logan Circle', 'U Street', 'Shaw', 'Columbia Heights', 'Petworth', 'Brookland',
              'Cleveland Park', 'Woodley Park', 'Glover Park', 'Tenleytown', 'American University Park',
              'Friendship Heights', 'Chevy Chase', 'Spring Valley', 'Cathedral Heights', 'Massachusetts Heights',
              'Palisades', 'Burleith', 'Hillandale'
            ].map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <div className="font-medium text-sm">{area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Professional Starlink Installation in Washington, DC?
          </h2>
          <p className="text-xl mb-8 text-blue-200">
            Join 110+ satisfied customers in the District who chose The Orbit Tech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1-571-999-6915"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (571) 999-6915 Now
            </a>
            <a 
              href="#quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300 text-center"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default WashingtonDCPage;
