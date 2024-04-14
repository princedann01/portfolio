
import dan from '../images/dan.jpg';


function About() {



    return (
        <div>
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

export default About;
