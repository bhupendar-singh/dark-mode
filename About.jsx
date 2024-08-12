import React from 'react';
import './Abour.css';
import BackgroundCarousel from './slider';

import image1 from '../images/background.png';
import image2 from '../images/1621277.jpg'
import Footer from './Footer';

function About() {
    const images = [
        image1,
        image2,
    ];
    return (
        <>
            <BackgroundCarousel images={images} />
            <div className='about'>
                <h1>Our History</h1>
                <div className='about-title'>

                    <p>Shree Durga founded in 1994 by Jeevraj Singh shekhawat in Ahmedabad,a small town in Gujarat with a single truck and a vision that was way ahead of its time. Shree Durga gradually expanded its services to jaipur, ajmer and kishangarh. From this humble beginning Shree Durga has today grown into a nationally renowned logistics and transport company which is also currently the largest fleet owner of commercial vehicles in Ahmedabad with a fleet of 100+ Vehicles.Now been joined by his brother Mr.Mahendra Singh Shekhawat who brings in newer strategies to further drive the growth of the Company.</p>

                    <p>Over the years, Shree Durga has pioneered in providing a safe and reliable delivery network in the field of parcel service. It has spread its operations to Courier Service, Priority Cargo & Transport.
                    </p>
                </div>
                <div data-animation="fadeInDown" class="infoblock banners-wrap type-2 style-2 type_3  animated fx-cols-5">
                    <div class="banner-item">
                        <div class="banner-inner">
                            <h5 class="banner-title">Knowing your business</h5>
                            <p>We first understand your product and apply the best logistic solution by utilizing our past experience in shipping similar or the same types of products..<em>. </em></p>



                        </div>

                    </div>




                    <div class="banner-item">

                        <div class="banner-inner">
                            <h5 class="banner-title">Adding value by cost saving</h5>


                            <p>It is not just about the freight rate, but about reducing the total cost of shipping your goods. We add value to your business by saving the logistics effort and cost for you.</p>



                        </div>

                    </div>




                    <div class="banner-item">

                        <div class="banner-inner">
                            <h5 class="banner-title">Being honest</h5>


                            <p>Whatever may be the scenario, stating the truth has been our policy with our clients. Our systems are based on transparency and visibility of the entire process. From freight invoice auditing, carrier relationship management, to a dedicated customer service representative for our shipper client, we believe in stating the truth under any circumstances!</p>



                        </div>

                    </div>




                    <div class="banner-item">

                        <div class="banner-inner">
                            <h5 class="banner-title">Customised solutions</h5>


                            <p>We will offer you tailor-made solutions suiting your shipping needs. This will give your products a competitive edge in a cut-throat competition era of today.</p>



                        </div>

                    </div>




                    <div class="banner-item">

                        <div class="banner-inner">
                            <h5 class="banner-title">Reliability</h5>
                            <p>Exports Companies like Lodha impex,shrikop exim are associated with us, speaking volumes about our reliability</p>
                        </div>

                    </div>





                </div>
<div className='about-footer'>
<Footer/>
</div>

            </div>
        </>
    );
}

export default About;
