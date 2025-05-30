import React from 'react';
import { testimonials } from '../mock/testimonials';
import TestimonialChatInteractive from '../components/TestimonialChatInteractive';

const TestimonialPage = () => {
return (
    <div className="container mx-auto px-4 py-12">
      <TestimonialChatInteractive 
        initialTestimonials={testimonials} 
        title="Comparte tu experiencia con Coldbrew"
      />
    </div>
  );
}
export default TestimonialPage;