import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonials = ({ secondaryBg }) => {

    const testimonials = [
        {
            name: "Dana Gilmore",
            title: "Developer",
            review: "I reviewed and purchased a number of different WordPress Themes before settling on Wp Residence.",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonial.webp",
            rating: 4.5
        },
        {
            name: "Jessica Fowley",
            title: "Developer",
            review: "We hired the WP Estate team as our buyer agent because they are the perfect team for real estate projects.",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonial-1.webp",
            rating: 4.5
        },
        {
            name: "Virginia Wolf",
            title: "Developer",
            review: "The WP Estate team did an outstanding job helping me buy and create my first real estate website.",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonial1-1.webp",
            rating: 4.5
        },
        {
            name: "Sara Loreley",
            title: "Developer",
            review: "I reviewed and purchased a number of different WordPress Themes before settling on Wp Residence.",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonial5-1.webp",
            rating: 4.5
        },
        {
            name: "Lisa Simpson",
            title: "Developer",
            review: "We hired the WP Estate team as our buyer agent because they are the perfect team for real estate projects.",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonial4-1.webp",
            rating: 4.5
        },
        {
            name: "Susan Barkley",
            title: "Developer",
            review: "The WP Estate team did an outstanding job helping me buy and create my first real estate website.",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonials6-1.webp",
            rating: 4.5
        },
    ]

    return (
        <section className={`section ${secondaryBg ? 'bg-[var(--secondary-bg)]' : ''}`}>
            <div className="my-container">
                <SectionTitle heading={'Testimonials'} description={'Publish the best of your client testimonials and let the world know what a great agent or real estate agency you are. Testimonials build trust.'} />

                <div className='grid grid-cols-3 gap-8 mt-10'>
                    {
                        testimonials?.map(testimonial => <TestimonialCard testimonial={testimonial} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;