import React from 'react';
import Services from "../components/services";
import Gallery from "../components/gallery";

const Home = () => {
    return (
        <main>
        <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
            <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                <div className="col-lg-8">
                    <h1 className="text-white font-weight-bold">Welcome to Light Hazzles Farm</h1>
                    <hr className="divider" />
                </div>
            </div>
        </div>
    </header>
    <Services />
    <Gallery />
    </main>
    )
}
export default Home;