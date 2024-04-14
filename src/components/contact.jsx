import { useState } from 'react';
import { IoLocationOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
        // Clear form fields after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div>
            <section id="contact" className="contact bg-gray-100">
                <div className="container mx-auto px-4 py-12">
                    <div className="section-title text-center mb-8">
                        <h2 className="text-3xl font-bold mb-5">CONTACT</h2>
                        <hr className="w-1/12 my-8 mx-auto border-2 border-solid border-gray-400" />;
                        <p className="text-lg text-gray-600">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="w-full mb-10">
                        <iframe
                            className="w-full h-64"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                            title="Google Maps"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="flex flex-wrap -mx-4 text-lg text-gray-600">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="flex items-center mb-4">
                                <IoLocationOutline className="text-blue-500 mr-2" />
                                <div>
                                    <h4 className="font-bold text-lg">Location:</h4>
                                    <p className="text-gray-700">Address: KK 373 St, Kigali</p>
                                </div>
                            </div>

                            <div className="flex items-center mb-4">
                                <MdOutlineEmail className="text-blue-500 mr-2" />
                                <div>
                                    <h4 className="font-bold text-lg">Email:</h4>
                                    <p className="text-gray-700">princedann@hotmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <IoPhonePortraitOutline className="text-blue-500 mr-2" />
                                <div>
                                    <h4 className="font-bold text-lg">Call:</h4>
                                    <p className="text-gray-700">+250 788274537</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-2/3 px-4 mb-8">
                            <form onSubmit={handleSubmit} className=" ">
                                <div className="mb-6 mx-24">
                                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">Your Name</label>
                                    <input
                                        className="appearance-none border rounded-md w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-6 mx-24">
                                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">Your Email</label>
                                    <input
                                        className="appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-6 mx-24">
                                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">Message</label>
                                    <textarea
                                        className="appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="message"
                                        placeholder="Message"
                                        name="message"
                                        rows="6"
                                        value={message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className=" p-4 h-20 bg-slate-200 opacity-80 text-xl text-bold text-center text-black">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Daniel</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="">Daniel campany</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Contact;


