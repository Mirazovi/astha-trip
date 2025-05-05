'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const stats = [
    { label: 'Years of Experience', value: 12 },
    { label: 'Destinations', value: 50 },
    { label: 'Happy Travelers', value: 10000 },
    { label: 'Customer Rating', value: 4.9, isDecimal: true },
];

const AboutSection = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const countRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    startCount();
                    setHasAnimated(true);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const startCount = () => {
        countRefs.current.forEach((el, i) => {
            if (!el) return;
            const target = stats[i].value;
            const isDecimal = stats[i].isDecimal;
            // let start = 0;
            const duration = 2000;
            const startTime = performance.now();

            const animate = (time: number) => {
                const elapsed = time - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const current = progress * target;
                el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current).toString();

                if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
        });
    };

    return (
        <section ref={sectionRef} className="py-20 bg-white text-gray-800 lg:w-[90%] mx-auto" id='aboutSection'>
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:h-[600px] lg:h-[500px]">
                {/* Left Image */}
                <div className="w-full h-full md:w-1/2">
                    <Image
                        width={600}
                        height={600}
                        src="/travel1.jpeg"
                        alt="About"
                        className="rounded-xl w-full  object-cover h-full"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 space-y-2">
                    <h2 className="text-4xl font-bold">About Astha Trip</h2>
                    <p>
                        Founded in 2010, Astha Trips has grown from a small local agency to a trusted name in
                        the global travel industry. Our mission is to create unforgettable travel experiences
                        that enrich lives and create lasting memories.
                    </p>
                    <p>
                        With a team of experienced travel consultants who have firsthand knowledge of
                        destinations worldwide, we craft personalized itineraries tailored to your preferences.
                    </p>
                    <p>
                        We believe that travel has the power to transform lives, broaden perspectives, and
                        create connections across cultures. That’s why we’re committed to responsible tourism
                        practices that respect local communities and environments.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mt-4">
                        {stats.map((stat, i) => (
                            <div key={i}>
                                <div
                                    ref={(el) => {
                                        if (el) countRefs.current[i] = el;
                                    }}
                                    className="text-3xl font-bold text-red-500"
                                >
                                    0
                                </div>
                                <p className="text-sm mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>


                    <button className="bg-red-500 text-white px-6 py-2 rounded-lg mt-2 hover:bg-red-600 transition">
                        Learn More About Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
