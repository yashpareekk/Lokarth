import React from 'react';
import './GetMobileApp.css';

const assets = {
  badge: require('../../assets/Badge.png'),
  app: require('../../assets/App Store.png'),
  play: require('../../assets/Google Play.png'),
  phone1: require('../../assets/Vector.png'),
  phone2: require('../../assets/Vector2.png'),
  phone3: require('../../assets/Vector3.png'),
  tick: require('../../assets/check.png'),
  rectangle: require('../../assets/Rectangle 5.png'),
};

const GetMobileApp = () => {
  const points = ['No obligation', 'Free onboarding', '14 day free trial', 'Full features'];

  return (
    <div className='comp7'>
      <div className='badge'>
        <img src={assets.badge} alt='badge' />
      </div>
      <div className='h7_1'>
        <p>Get Convenient Access with Our Mobile App</p>
      </div>
      <div className='text7'>
        <p>Experience the ease of accessing our services anytime, anywhere – all at your fingertips. Download our free mobile app today to unlock a world of convenience and stay connected with us on the go.</p>
      </div>

      <div className='buttons7'>
        {['app', 'play'].map((store) => (
          <button key={store} className={`btn7_${store === 'app' ? '1' : '2'}`}>
            <img src={assets[store]} alt={`${store} store`} />
          </button>
        ))}
      </div>

      <div className='phones'>
        {[1, 2, 3].map((index) => (
          <div key={index} className={`phone${index}`}>
            <img src={assets[`phone${index}`]} alt={`phone${index}`} />
          </div>
        ))}
      </div>

      <div className='modal'>
        <div className='h7_3'>
          <p>Try out the world’s leading product tool for free today</p>
        </div>
        <div className='pointers'>
          <div className='grid7'>
            {points.map((point, index) => (
              <div key={index} className='pointers'>
                <div className='checkBox'>
                  <img className="img7_1" src={assets.rectangle} alt='rectangle' />
                  <img className="img7_2" src={assets.tick} alt='tick' />
                </div>
                <div className='text7_2'>
                  <p>{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='button7 '>
          <button>Sign up</button>
        </div>
      </div>

      <div className='lower-background'></div>
    </div>
  );
};

export default GetMobileApp;
