"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import NavBar from '../../components/NavBar'
import Footer from '../../components/footer/Footer'
import Booking from '../../components/Booking'

const PrivacyPolicy = () => {
    const [modal, setModal] = useState<boolean>(false);

    return (
        <div className="relative min-h-screen bg-white text-[#4B4D4C] flex flex-col selection:bg-primary/20">
            <NavBar setModal={setModal} />

            <main className="grow relative w-full overflow-hidden flex flex-col items-center">
                {/* Background Image - Decorative Tree */}
                <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none flex items-center justify-center">
                    <Image
                        src="/assets/images/tree.png"
                        alt=""
                        width={1200}
                        height={1200}
                        className="object-contain"
                    />
                </div>

                <div className="relative z-10 container mx-auto px-6 py-12 md:py-20 max-w-7xl flex flex-col items-center">
                    {/* Header Section */}
                    <div className="text-center space-y-4 mb-8">
                        <h1 className="text-5xl md:text-6xl font-serif leading-tight">
                            <span className="text-primary">Privacy</span> Policy
                        </h1>
                        <div className="flex justify-center pt-2">
                            <Image
                                src="/assets/images/breaker.png"
                                alt="divider"
                                width={800}
                                height={24}
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full max-w-4xl space-y-12 text-sm md:text-base leading-relaxed mt-10">

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold font-sans">1. Primark Realtors</h2>
                            <p>
                                We are an authorized channel partner of Mahindra Blossom by Mahindra Lifespaces.
                                <br />
                                We value your privacy and are committed to protecting your personal information.
                                <br />
                                We collect limited data—such as your name, contact details, and property preferences—to provide personalized real estate solutions and improve our services.
                                <br />
                                Your data may be shared with trusted partners (like builders, legal advisors, or financial institutions) only for service-related purposes. We never sell or misuse your information.
                                <br />
                                All data is stored securely and used in compliance with applicable privacy laws. By engaging with us, you consent to our data practices.
                                <br />
                                For any queries or to manage your data, please contact us at yasir.mg@gmail.com
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold font-sans">2. Personal Data We Collect</h2>
                            <p>
                                We collect the minimum information necessary to operate our website, communicate with visitors, and deliver our services.
                                <br />
                                Data you provide directly:
                                <br />
                                • Name
                                <br />
                                • Email address
                                <br />
                                • Phone number
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold font-sans">3. How We Collect Personal Data</h2>
                            <p>
                                We collect information through:
                                <br />
                                • Contact forms
                                <br />
                                • Email communication
                                <br />
                                • Basic analytics services
                                <br />
                                • Advertising performance and measurement tools
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold font-sans">4. Contact Us</h2>
                            <p>
                                For questions, data requests, or concerns related to privacy, contact: yasir.mg@gmail.com
                            </p>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />

            {modal && <Booking setModal={setModal} />}
        </div>
    )
}

export default PrivacyPolicy

