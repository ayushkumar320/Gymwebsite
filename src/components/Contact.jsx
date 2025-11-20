import React from 'react';

const Contact = () => {
    const address = "BFC Bengaluru Fitness Club · Tatanagar, Devinagar, Bengaluru, Karnataka 560092";
    const mapLink = "https://maps.app.goo.gl/9UrpCRn1fRKuaB1v7";
    const whatsappNumber = "919876543210"; // Placeholder, replace if known

    return (
        <div className="w-full min-h-screen bg-white pt-24 pb-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 uppercase tracking-tight">
                    Contact Us
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="space-y-8">
                            {/* Address */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <span className="text-2xl">📍</span> Location
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {address}
                                </p>
                                <a
                                    href={mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 text-green-600 font-semibold hover:text-green-700 hover:underline"
                                >
                                    View on Google Maps →
                                </a>
                            </div>

                            {/* Hours */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <span className="text-2xl">🕒</span> Opening Hours
                                </h3>
                                <div className="space-y-2 text-gray-600">
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span>Monday - Saturday</span>
                                        <span className="font-medium">5:30 AM - 10:00 PM</span>
                                    </div>
                                    <div className="flex justify-between pt-2">
                                        <span>Sunday</span>
                                        <span className="font-medium">6:00 AM - 12:00 PM</span>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Button */}
                            <div className="pt-4">
                                <a
                                    href={`https://wa.me/${whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-3 bg-green-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                    </svg>
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="h-full min-h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.756135644989!2d77.5758841!3d13.0550173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae172ec529c96b%3A0x89e1871d5101ea2!2sBFC%20Bengaluru%20Fitness%20Club!5e0!3m2!1sen!2sin!4v1732121000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
