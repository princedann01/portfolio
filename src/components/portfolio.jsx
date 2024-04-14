
import Jej from '../images/jej.jpg';
import Joe from '../images/joe.jpg';
import King from '../images/king.jpg';




function Portfolio() {


    return (

        <div>
            <section className="contact bg-gray-100">
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

export default Portfolio;
