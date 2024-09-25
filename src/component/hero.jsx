const HeroSection = () => {
    return (

        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="btn">
                    <button>Shop Now</button>
                    <button className="btn2"> Category</button>
                </div>
                <div className="shopping">Also Available On

                    <div className="img-icon">
                        <img src="/img/shops.png" alt="shop logo" />
                    </div>
                </div>

            </div>
            <div className="hero-img">
                <img src="/img/shoe_image.png" alt="image not found" width={570} height={500}/>
            </div>


        </main>




    )
};


export default HeroSection;
