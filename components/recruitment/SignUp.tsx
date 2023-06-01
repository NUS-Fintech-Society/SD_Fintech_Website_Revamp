import MaxWidth from "@components/layout/MaxWidth";

const SignUp = () => {
    return (
        <MaxWidth>
            <div className="rounded-lg bg-[#EEF6FE]">
                <div className="p-10">
                    <div className="grid grid-flow-col grid-rows-4 gap-14 text-[#004C98]">
                        <div>
                            <h1 className="mb-1 text-2xl font-bold">Sign Up Now!</h1>
                            <h1 className="mb-3">Sign ups close on <time className="font-bold">10 Aug 2022 23:59</time></h1>
                            <a className="underline underline-offset-1"
                                href="https://forms.gle/3GhF99Qt1pbLEomV6">
                                https://forms.gle/3GhF99Qt1pbLEomV6
                            </a>
                        </div>
                        <div>
                            <h1 className="mb-1 text-2xl font-bold">Welcome Tea</h1>
                            <h1 className="mb-3">Missed our Welcome Tea? Watch the recordings here!</h1>
                            <a className="underline underline-offset-1"
                                href="https://drive.google.com/file/d/1OSCo00YSh07ZsptqTdQfMZdgenLuNrdG/view?usp=sharing">
                                https://drive.google.com/file/d/1OSCo00YSh07ZsptqTdQfMZdgenLuNrdG/view?usp=sharing
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-x-10 gap-y-0">
                            <div>
                            <h1 className="mb-1 text-2xl font-bold">FAQs</h1>
                            <h1 className="mb-3">Have questions? Take a look at our FAQs on recruitment <span className="font-bold">here</span></h1>
                            </div>
                            <div>
                            <h1 className="mb-1 text-2xl font-bold">Contact Us</h1>
                            <h1 className="mb-3">You could also contact us <span className="font-bold">here</span></h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </MaxWidth>
    );
};

export default SignUp