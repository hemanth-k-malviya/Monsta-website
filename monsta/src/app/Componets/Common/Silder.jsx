'use client'
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'; // icons

const images = [
    "./images/imgi_34_541928cd-e696-4c09-9f1c-bc9d7127c451-1671388153.jpg",
    "./images/imgi_35_add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062 (1).jpg",
    "./images/imgi_36_648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg",
];
export default function Silder() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    return (
        <>
            <div className=" h-[500px] w-full m-auto py-3 px-4 relative group">
                {/* The Image */}
                <div
                    style={{ backgroundImage: `url(${images[currentIndex]})` }}
                    className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
                    </div>

                {/* Left Arrow */}
                <div
                    className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition"
                    onClick={prevSlide}>
                    <ChevronLeft size={30} />
                </div>

                {/* Right Arrow */}
                <div
                    className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition"
                    onClick={nextSlide} >
                    <ChevronRight size={30} />
                </div>

                {/* Dots at bottom
                <div className="flex top-4 justify-center py-2">
                    {images.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => setCurrentIndex(slideIndex)}
                            className={`text-2xl cursor-pointer mx-1 ${currentIndex === slideIndex ? 'text-blue-500' : 'text-gray-300'}`}
                        >
                            •
                        </div>
                    ))}
                </div> */}
            </div>
        </>
    )
}
