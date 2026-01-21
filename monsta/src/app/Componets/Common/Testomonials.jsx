"use client";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

export default function Testomonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className="w-full bg-gray-50 py-8">
            <div className="w-full px-2">
                <h2 className="text-4xl font-bold text-center mb-12">What Our Custumers Say ?</h2>
                <div className="relative slider-container bg-white rounded-lg shadow-lg p-8">
                    <Slider {...settings}>
                        <div className="px-6 py-8">
                            <p className='text-[18px] text-gray-700 mb-6 leading-relaxed'>"These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!"</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 mr-4">
                                    <img src="/images/imgi_28_3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg" alt="" />
                                </div>
                                <div>
                                    <p className='font-bold text-[16px]'>John Doe</p>
                                    <p className='text-gray-500 text-[14px]'>CEO, Tech Company</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 py-8">
                            <p className='text-[18px] text-gray-700 mb-6 leading-relaxed'>"Amazing experience! The quality and attention to detail is outstanding. Highly recommend to anyone looking for professional service!"</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 mr-4">
                                    <img src="/images/imgi_27_35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png" alt="" />
                                </div>
                                <div>
                                    <p className='font-bold text-[16px]'>Jane Smith</p>
                                    <p className='text-gray-500 text-[14px]'>Founder, Design Studio</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 py-8">
                            <p className='text-[18px] text-gray-700 mb-6 leading-relaxed'>"Exceptional quality and customer support. They went above and beyond to meet our requirements. Will definitely work with them again!"</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 mr-4">
                                    <img src="/images/imgi_26_c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg" alt="" />
                                </div>
                                <div>
                                    <p className='font-bold text-[16px]'>Mike Johnson</p>
                                    <p className='text-gray-500 text-[14px]'>Product Manager</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
