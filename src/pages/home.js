import React from 'react';

const Home = () => {
    return (
        <main>
        <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
            <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                <div className="col-lg-8 align-self-end">
                    <h1 className="text-white font-weight-bold">Welcome to Light Hazzles Farm</h1>
                    <hr className="divider" />
                </div>
            </div>
        </div>
    </header>
    {/* <!-- About--> */}
    <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8 text-center">
                    <h2 className="text-white mt-0">We've got what you need!</h2>
                    <hr className="divider divider-light" />
                    <ul className="text-white-75 mb-4">
                        <li className="pb-1">Friendly family run yard</li>
                        <li className="pb-1">Light and airy American style barn stables</li>
                        <li className="pb-1">60 X 40 flood light ménage</li>
                        <li className="pb-1">Morning feeds on request</li>
                        <li className="pb-1">All year turnout, 24/7 from May to end of October</li>
                        <li className="pb-1">Open 24 hours / 7 Days a week & Secure access gate system</li>
                        <li className="pb-1">Hay / Haylage supplied on site</li>
                        <li className="pb-1">Straw / Pellets for Bedding supplied on site</li>
                        <li className="pb-1">Own Instructor, Farrier, Dentist & Vets welcome</li>
                        <li className="pb-1">Plenty of off-road hacking</li>
                        <li className="pb-1">Trailer parking & Toilet facilities</li>
                        <li className="pb-1">Extra container storage available on request</li>
                    </ul>
                    <a className="btn btn-light btn-xl" href="#services">Get Started!</a>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Gallery --> */}
    <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
            src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.15752-9/247975905_4389372621099472_4701503517392322368_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=UQaiwEri2zAAX_0zxgY&_nc_ht=scontent-lhr8-1.xx&oh=575c8a0803b1f83c2dc062c7d11f0547&oe=61AE837A"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
            />
            <img
            src="https://scontent-lhr8-2.xx.fbcdn.net/v/t1.15752-9/245908735_581542683093699_7489246674214791225_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=pz86DuVjrB4AX8ZsCpb&_nc_ht=scontent-lhr8-2.xx&oh=a6f124d7d2b35df04cf8bc5c5f0c0bf2&oe=61B0B72E"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
            />
        </div>
        <div class="col-lg-4 mb-4 mb-lg-0">
            <img
            src="https://scontent-lhr8-2.xx.fbcdn.net/v/t1.15752-9/247401417_3986649801435542_6895063839277993783_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=bCGaDXrXN7sAX_vzT-p&_nc_ht=scontent-lhr8-2.xx&oh=25cdb26012e03f2cd17542fe73c3ad2a&oe=61AFB531"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
            />
            <img
            src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.15752-9/241202370_387596142893784_563153949974267922_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=IuboO1gkHlEAX-HE7wC&_nc_ht=scontent-lhr8-1.xx&oh=ea8fa2024abbb05b723c0ac90e2cce3e&oe=618AC14D"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
            />
        </div>
        <div class="col-lg-4 mb-4 mb-lg-0">
            <img
            src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.15752-9/247471700_419478576209978_1407192363813738927_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=cbOi36czBZcAX_zuJP2&_nc_ht=scontent-lhr8-1.xx&oh=457920bf08d756e7f7260a0600e4e3a4&oe=61AFB5E9"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
            />
            <img
            src="https://scontent-lhr8-2.xx.fbcdn.net/v/t1.15752-9/246423847_571545254073864_1083614776768047464_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=rpIQE-ej_3IAX-U5Ha2&_nc_ht=scontent-lhr8-2.xx&oh=7b37bf50b4e8778c26c2905bc0b0456b&oe=61B0E4F9"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
            />
        </div>
    </div>
    </main>
    )
}
export default Home;