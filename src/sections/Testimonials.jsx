import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
    {
        quote:
            "Thomas built a robust and scalable lottery web application with a strong focus on performance, security, and reliability. His technical expertise and attention to detail ensured the platform could handle growth without compromising user experience.",
        author: "Zerihun Fikadu",
        role: "Founder and CEO of Ethio Dream Draw.",
        avater: "/t1.jpg",
    },
    {
        quote:
            "Thomas developed my personal portfolio into a stunning, high-performance platform that is both robust and fully SEO-optimized. It features a seamless user experience, fast load times, and a modern design that effectively showcases my skills and projects, leaving a lasting impression on visitors.",
        author: "Biruk Eshetu",
        role: "Private Client.",
        avater: "/t1.jpg",
    },
    {
        quote:
            "Thomas combines exceptional development expertise with innovative ideas, delivering projects that are both creative and technically robust. On top of that, his IT support skills are outstanding, ensuring seamless system operations and reliable technical solutions.",
        author: "Dessie Fikir",
        role: "Work Partner",
        avater: "/t1.jpg",
    },
    {
        quote:
            "Working with Thomas was a great experience. He built a robust, scalable web application that was easy to use, secure, and designed to grow with user needs.",
        author: "Amanuel Kassahun",
        role: "Work Colleague.",
        avater: "/t1.jpg",
    },
];


export const Testimonials = () => {

    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
    };

    const previous = () => {
        setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2
            w-200 h-200 bg-primary/5
            rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">

                {/** Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm
                font-medium tracking-wider uppercase animate-fade-in">
                        Results That Speak
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6
                    animate-fade-in animation-delay-100 text-secondary-foreground">
                        Voices from people{" "}
                        <span className="font-serif italic
                        font-normal text-white">
                            who matter.
                        </span>
                    </h2>

                </div>

                {/** Testimonial Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/** Main Testimonial */}
                        <div className="glass p-8 rounded-3xl md:p-12 glow-border animation-fade-in animation-delay-200">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <Quote className="w-6 h-6 text-primary-foreground" />
                            </div>

                            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">"{testimonials[activeIdx].quote}"</blockquote>

                            <div className="flex items-center gap-4">
                                <img src={testimonials[activeIdx].avater}
                                    alt={testimonials[activeIdx].author}
                                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20" />

                                <div>
                                    <div className="font-semibold">{testimonials[activeIdx].author}</div>
                                    <div className="text-sm text-muted-foreground">{testimonials[activeIdx].role}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/** Testimonials Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button onClick={previous} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                            <ChevronLeft />
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((_, idx) => (
                                <button 
                                onClick={() => setActiveIdx(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />
                            ))}
                        </div>

                        <button onClick={next} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                            <ChevronRight />
                        </button>
                    </div>

                </div>

            </div>

        </section>
    )
}