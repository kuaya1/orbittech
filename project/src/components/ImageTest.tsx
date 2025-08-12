const ImageTest = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Image Loading Test</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Hero Background Image:</h3>
        <img 
          src="/images/Whisk_e1f97057a5.jpg" 
          alt="Hero background test" 
          style={{ width: '300px', height: 'auto', border: '1px solid #ccc' }}
          onLoad={() => console.log('Hero image loaded successfully')}
          onError={(e) => console.error('Hero image failed to load:', e)}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Gallery Images:</h3>
        {[
          '/images/Gemini_Generated_Image_t7u8prt7u8prt7u8.png',
          '/images/Whisk_c8d18d14d2.jpg',
          '/images/Whisk_df20144b50.jpg',
          '/images/Whisk_du2n2qxzju.jpg'
        ].map((src, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <p>Image {index + 1}: {src}</p>
            <img 
              src={src}
              alt={`Gallery image ${index + 1}`}
              style={{ width: '200px', height: 'auto', border: '1px solid #ccc' }}
              onLoad={() => console.log(`Gallery image ${index + 1} loaded successfully`)}
              onError={(e) => console.error(`Gallery image ${index + 1} failed to load:`, e)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest;
