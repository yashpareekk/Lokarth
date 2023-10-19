import React from 'react'
import "./Laptops.css"
import ellipse from "../../assets/Ellipse 3.png"
import happy from "../../assets/happy 1.png"
import laptop1 from "../../assets/laptop1.png"
import laptop2 from "../../assets/laptop2.png"
import laptop3 from "../../assets/laptop3.png"
import ellipse2 from "../../assets/Ellipse2.png"
import ellipse3 from "../../assets/Ellipse4.png"
import dottedLine from "../../assets/Vector 4.png"
const Laptops = () => {
    return (
        <div className='comp5'>
            <div className='content'>
                <div className='total5_1'>
                    <div className='text5'>
                        <div className='happy_text'>
                            <div className='logo5'>
                                <img className="img1" src={ellipse} alt='ellipse' />
                                <img className="img2" src={happy} alt='happy' />
                            </div>
                            <div className='smalltext'>
                                <p className='s1'>User Registration and Sign-In</p>
                                {/* <p className='s2'>Lorem Ipsum is simply dummy text</p> */}
                            </div>
                        </div>
                        <div className='h5_1'>
                            <p><span>Register and Experience</span> a Smooth Democratic Process</p>
                        </div>
                        <div className='h5_2'>
                            <p>As a user, the first step is to sign in and register on the Lokarth portal. This initial process is where you create your account, providing essential information to get started.</p>
                        </div>

                    </div>
                    <div className='laptop1'>
                        <img src={laptop1} alt='laptop1' />
                    </div>
                </div>
                <div className='total5_1'>
                    <div className='laptop1'>
                        <img src={laptop2} alt='laptop2' />
                    </div>
                    <div className='text5'>
                        <div className='happy_text'>
                            <div className='logo5'>
                                <img className="img1" src={ellipse2} alt='ellipse' />
                                <img className="img2" src={happy} alt='happy' />
                            </div>
                            <div className='smalltext'>
                                <p className='s1'>Fill Your Information</p>
                                {/* <p className='s2'>Lorem Ipsum is simply dummy text</p> */}
                            </div>
                        </div>
                        <div className='h5_1'>
                            <p><span>Complete Your Profile</span> for Active Participation</p>
                        </div>
                        <div className='h5_2'>
                            <p>After successfully registering, the next crucial step is to complete your profile. This involves filling in comprehensive details, including basic personal information, address, family particulars, party membership details, elected member information, and any social associations you may have. Once all these details are filled in, you can save and submit them to finalize your profile.</p>
                        </div>


                    </div>
                </div>

                <div className='total5_1'>
                    <div className='text5'>
                        <div className='happy_text'>
                            <div className='logo5'>
                                <img className="img1" src={ellipse3} alt='ellipse' />
                                <img className="img2" src={happy} alt='happy' />
                            </div>
                            <div className='smalltext'>
                                <p className='s1'>Check Your Events</p>
                                {/* <p className='s2'>Lorem Ipsum is simply dummy text</p> */}
                            </div>
                        </div>
                        <div className='h5_1'>
                            <p><span>Stay Informed</span> and Engaged with Upcoming Events</p>
                        </div>
                        <div className='h5_2'>
                            <p>In the dashboard area, you can conveniently access and review upcoming events scheduled for your area. This feature allows you to stay informed about local events and engagements that may be of interest to you.</p>
                        </div>

                    </div>
                    <div className='laptop1'>
                        <img src={laptop3} alt='laptop3' />
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Laptops

