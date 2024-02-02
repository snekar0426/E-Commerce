import React from 'react'
import './DescriptionBox.scss'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Review (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location.
             Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</p>
            <p>
            If selling is your dream, it can come true in a few simple steps. 
            Once you are ready to offer your products, you register as a seller on an e-commerce marketplace and subsequently focus on optimizing your product page.
            But, one critical aspect of this journey is the e-commerce product listing page.
            This is where you can pull a trick out of the hat by being smart with the way you position your products in listings. 
            It has been noted that a good product listing page almost always impresses prospective buyers enough to make the purchases. 
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
