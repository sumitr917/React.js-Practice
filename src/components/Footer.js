import React from 'react'

export default function Footer() {
  return (
    <div className='bg-dark text-light'>
      <div className='row footer'>
        <div className='col-md-4'>
          <ul>
            <li>
              <p>
                Contact Us
              </p>
            </li>
            <li>
              <p>
                Locations
              </p>
            </li>
            <li>
              <p>
                Business
              </p>
            </li>
            <li>
              <p>
                Terms & Conditions
              </p>
            </li>
          </ul>
        </div>
        <div className='col-md-4'>
        <ul>
            <li>
              <p>
                Vastra API
              </p>
            </li>
            <li>
              <p>
                Vastra UI
              </p>
            </li>
            <li>
              <p>
                GitHub
              </p>
            </li>
            <li>
              <p>
                Developers
              </p>
            </li>
          </ul>
        </div>
        <div className='col-md-4'>
        <ul>
            <li>
              <p>
                Instagram
              </p>
            </li>
            <li>
              <p>
                Facebook
              </p>
            </li>
            <li>
              <p>
                Twitter
              </p>
            </li>
            <li>
              <p>
                WhatsApp
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='brand-footer-text'>
        <span>&copy; vastra developers pvt. ltd.</span>
      </div>

    </div>
  )
}
