import React from 'react';
import Dodo from '../images/dodo.png';
import dan from '../images/dan.jpg';
import Jej from '../images/jej.jpg';
import Joe from '../images/joe.jpg';
import King from '../images/king.jpg';
import { useState } from 'react';
import { IoLocationOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";


function Home() {
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
    <div className="flex flex-col h-screen">
      <div className="flex-grow flex justify-center items-center bg-neutral-200">
        <div className="flex flex-col justify-center items-center text-center md:mx-16 lg:mx-24 xl:mx-32">
          <h1 className="text-5xl font-bold mb-4 md:mb-6 lg:mb-8">SIBO Daniel</h1>
          <h2 className=" text-2xl mb-6 md:mb-8 lg:mb-10">I&apos;m a professional Full Stack Developer &amp; UI/UX Designer and electronics and telcommunication engineer</h2>
          <button className="rounded-full h-12 w-48 bg-gray-400 hover:bg-gray-500 text-white font-semibold tracking-wide transition duration-300 ease-in-out">
            <a href="/about">ABOUT ME</a>
          </button>
        </div>
        <div className="hidden lg:block w-1/2 mb-20">
          <img src={Dodo} alt="Dodo" className="object-cover h-full" />
        </div>
      </div>
      <section id="about" className="about bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="section-title text-center mb-8">
            <h2 className="text-3xl font-bold">ABOUT</h2>
            <hr className="w-1/12 my-8 mx-auto border-2 border-solid border-gray-400" />;
            <p className="text-lg text-gray-600">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
            <div className="lg:w-1/3">
              <img src={dan} className="w-full rounded-lg" alt="" />
            </div>
            <div className="lg:w-2/3 lg:pl-12 mt-8 lg:mt-0 space-y-5">
              <h3 className="text-3xl font-bold">Full Stack Developer &amp; UI/UX Designer</h3>
              <p className="text-lg text-gray-600 italic mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="flex flex-col lg:flex-row mt-4 text-lg text-gray-600">
                <div className="lg:w-1/2">
                  <ul>
                    <li><i className="bi bi-rounded-right"></i> <strong>Birthday:</strong> 12 November 1993</li>
                    <li><i className="bi bi-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                    <li><i className="bi bi-rounded-right"></i> <strong>Phone:</strong> +123 456 7890</li>
                    <li><i className="bi bi-rounded-right"></i> <strong>City:</strong> City : Kigali, RWANDA</li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <ul>
                    <li><i className="bi bi-rounded-right"></i> <strong>Age:</strong> 30</li>
                    <li><i className="bi bi-rounded-right"></i> <strong>Degree:</strong> Bacheol degree</li>
                    <li><i className="bi bi-rounded-right"></i> <strong>Email:</strong> Princedann@hotmail.com</li>
                    <li><i className="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-lg text-gray-600">Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills  bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="section-title text-center mb-8">
            <h2 className="text-3xl font-bold mb-5">SKILLS</h2>
            <hr className="w-1/12 my-8 mx-auto border-2 border-solid border-gray-400" />;
            <p className="text-lg text-gray-600">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-semibold">HTML</span>
                <span className="font-semibold">100%</span>
              </div>
              <div className="h-3 bg-blue-500 rounded-full">
                <div className="h-full bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex items-center justify-between">
                <span className="font-semibold">CSS</span>
                <span className="font-semibold">90%</span>
              </div>
              <div className="h-3 bg-blue-500 rounded-full">
                <div className="h-full bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-semibold">JavaScript</span>
                <span className="font-semibold">75%</span>
              </div>
              <div className="h-3 bg-blue-500 rounded-full">
                <div className="h-full bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-semibold">PHP</span>
                <span className="font-semibold">80%</span>
              </div>
              <div className="h-3 bg-blue-500 rounded-full">
                <div className="h-full bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-semibold">WordPress/CMS</span>
                <span className="font-semibold">90%</span>
              </div>
              <div className="h-3 bg-blue-500 rounded-full">
                <div className="h-full bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Photoshop</span>
                <span className="font-semibold">55%</span>
              </div>
              <div className="h-3 bg-blue-500 rounded-full">
                <div className="h-full bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="contact bg-gray-100">
        <div className="container mx-auto px-4 py-5">
          <div className="section-title text-center ">
            <h2 className="text-3xl font-bold  ">PORTFOLIO</h2>
            <hr className="w-1/12 my-8 mx-auto border-2 border-solid border-gray-400" />;
            <p className="text-lg text-gray-600">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

        </div>
        <div>
          <section className=" pt-10 pb-10 lg:pt-120 lg:pb-20">
            <div className="container mx-auto">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 md:w-1/2 xl:w-1/3 ">
                  <div className="mb-10 overflow-hidden duration-30 rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">

                    <img
                      src={Jej}
                      alt="image"
                      className="w-full h-64"
                    />
                    <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9 ">
                      <h3>
                        <a
                          href="https://movies-lac-six.vercel.app/"
                          className="text-dark text-black hover:text-primary mb-4 block text-xl font-semibold sm:text-22 md:text-xl lg:text-22 xl:text-xl 2xl:text-22"
                        >
                          Best creative website  & templates
                        </a>
                      </h3>
                      <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7">
                        Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.
                      </p>
                      <a
                        href="https://movies-lac-six.vercel.app/"
                        className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-400 px-7 hover:text-blue-500 dark:border-dark-3 dark:text-dark-6"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 xl:w-1/3 ">
                  <div className="mb-10 overflow-hidden duration-300  rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                    <img
                      src={Joe}
                      alt="image"
                      className="w-full h-64"
                    />
                    <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                      <h3>
                        <a
                          href="https://movies-lac-six.vercel.app/"
                          className="text-dark text-black hover:text-primary mb-4 block text-xl font-semibold sm:text-22 md:text-xl lg:text-22 xl:text-xl 2xl:text-22"
                        >
                          Best creative website  & templates
                        </a>
                      </h3>
                      <p className="text-base leading-relaxed text-body-color mb-7">
                        Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.
                      </p>
                      <a
                        href="https://movies-lac-six.vercel.app/"
                        className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary   border-gray-400 px-7 hover:text-blue-500 dark:border-dark-3 dark:text-dark-6"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                  <div className="mb-10 overflow-hidden duration-300  rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                    <img
                      src={King}
                      alt="image"
                      className="w-full h-64"
                    />
                    <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                      <h3>
                        <a
                          href="https://movies-lac-six.vercel.app/"
                          className="text-dark text-black hover:text-primary mb-4 block text-xl font-semibold sm:text-22 md:text-xl lg:text-22 xl:text-xl 2xl:text-22"
                        >
                          Creative Card Component designs graphic elements
                        </a>
                      </h3>
                      <p className="text-base leading-relaxed text-body-color mb-7">
                        Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.
                      </p>
                      <a
                        href="https://movies-lac-six.vercel.app/"
                        className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary   border-gray-400 px-7 hover:text-blue-500 dark:border-dark-3 dark:text-dark-6"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7974.839556264714!2d30.100807745019228!3d-1.9868108012787036!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca76558333ef3%3A0x12356cd0021f533a!2sIda%20Technology!5e0!3m2!1sen!2srw!4v1713167411460!5m2!1sen!2srw"
              title="Google Maps"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col lg:flex-row -mx-4 text-lg text-gray-600">
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
                <div className="mb-6 lg:mx-24">
                  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">Your Name</label>
                  <input
                    className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6 lg:mx-24">
                  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">Your Email</label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6 lg:mx-24">
                  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">Message</label>
                  <textarea
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

export default Home;
