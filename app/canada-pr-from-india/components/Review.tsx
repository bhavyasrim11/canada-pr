import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { Star, Quote, ExternalLink } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  initial: string;
  color: string;
}

const reviews: Review[] = [
  { id: 1, name: "Anand Kumar", date: "2 days ago", rating: 5, text: "Got my Canada PR ITA in record time! VJC Overseas is the best for Express Entry processing. Their documentation team is flawless.", initial: "A", color: "bg-blue-600" },
  { id: 2, name: "Sneha Reddy", date: "1 week ago", rating: 5, text: "Excellent guidance for Ontario PNP. They made the complex Canada PR process look so simple. 5 stars to the entire VJC team!", initial: "S", color: "bg-purple-600" },
  { id: 3, name: "Rahul Verma", date: "3 weeks ago", rating: 5, text: "If you are looking for Canada PR, look no further. Transparent counseling and very professional approach to CRS score improvement.", initial: "R", color: "bg-green-600" },
  { id: 4, name: "Priya Dharshini", date: "1 month ago", rating: 5, text: "The most reliable consultancy for Canada immigration. They helped me with my WES assessment and provincial nomination smoothly.", initial: "P", color: "bg-orange-600" },
  { id: 5, name: "Vikram Singh", date: "1 month ago", rating: 5, text: "Finally landed in Toronto! Huge thanks to VJC Overseas for their end-to-end support in my Canada PR journey. Highly recommended!", initial: "V", color: "bg-red-500" },
  { id: 6, name: "Meera Iyer", date: "2 months ago", rating: 5, text: "Best experience ever. Their knowledge about Canada immigration laws and PR pathways is unmatched. Simply the best in the business!", initial: "M", color: "bg-pink-600" },
];

const GOOGLE_REVIEW_URL = "https://www.google.com/search?q=VJC+Overseas+Reviews";

const ReviewSlider: React.FC = () => {
  
  const handleReviewClick = () => {
    window.open(GOOGLE_REVIEW_URL, '_blank');
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 font-sans">
      {/* Premium Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100">
        <div className="flex items-center gap-6">
          <div className="p-2 bg-gray-50 rounded-xl">
            <Image src="/vjclogo.png" alt="VJC Overseas" width={64} height={64} className="h-16 w-auto object-contain" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">VJC Overseas</h2>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-2xl font-black text-orange-500">4.8</span>
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-400 border-l pl-3 border-gray-200">
                1,118 Google Reviews
              </span>
            </div>
          </div>
        </div>
        
        <a 
          href={GOOGLE_REVIEW_URL}
          target="_blank" 
          rel="noreferrer"
          className="mt-6 md:mt-0 flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full font-semibold text-gray-700 hover:bg-gray-50 transition-all shadow-sm active:scale-95"
        >
          <Image src="/google.jpg" width={20} height={20} className="w-5" alt="G" />
          Write a Review
        </a>
      </div>

      {/* Smooth Slider */}
      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          320: { slidesPerView: 1.1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 }
        }}
        className="pb-16"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="max-w-[400px]">
            <div 
              onClick={handleReviewClick}
              className="group cursor-pointer bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-100"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute -top-2 -right-2 text-gray-50 w-24 h-24 rotate-12 transition-colors group-hover:text-blue-50" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`${review.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 leading-none">{review.name}</h4>
                      <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                    </div>
                  </div>
                  <Image src="/google.jpg" width={20} height={20} className="w-5" alt="Google" />
                </div>

                <div className="flex text-orange-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed text-[15px] italic mb-8 flex-grow">
                  &quot;{review.text}&quot;
                </p>

                {/* Know More Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                   <span className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:gap-3 transition-all">
                    Know More <ExternalLink size={14} />
                  </span>
                  <span className="text-[10px] text-gray-400 font-black uppercase tracking-tighter">Canada PR Verified</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;