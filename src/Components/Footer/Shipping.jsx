import React from 'react'
import './shipping.scss'

const shipping = () => {
  return (
    <>
    <div className='shipping_image'><article class="gallery">
      <img src='logistic.png' alt='logistic'/>
      <img src="ship1.png" alt="ship1" />
      <img src="ship2.jpeg" alt="ship2" />
      <img src="ship3.jpeg" alt="ship3" />
      <img src="ship4.jpg" alt="ship4" />
      <img src="ship5.jpeg" alt="ship5" />
      <img src="ship6.jpeg" alt="ship6" />
      <img src="ship7.jpeg" alt="ship7" />
    </article></div>
    
<div className='ship_main'>
    <div className='first_qes'>What are the delivery charges?</div>
        <div className='first_ans'>
        Delivery charge varies with each Seller.<br/><br/>
        Sellers incur relatively higher shipping costs on low value items. In such cases, charging a nominal delivery charge helps them offset logistics costs.Please check your order summary to understand the delivery charges for individual products.
        <br/><br/>For Products listed as Flipkart Plus, a Rs 40 charge for delivery per item may be applied if the order value is less than Rs 500. While, orders of Rs 500 or above are delivered free.</div><br/>

  <div className='second_qes'>Why does the delivery date not correspond to the delivery timeline of X-Y business days?</div>
    <div className='second_ans'>
        It is possible that the Seller or our courier partners have a holiday between the day your placed your order and the date of delivery, which is based on the timelines shown on the product page. In this case, we add a day to the estimated date. Some courier partners and Sellers do not work on Sundays and this is factored in to the delivery dates.</div><br/>

  <div className='third_qes'>What is the estimated delivery time?</div>
  <div className='third_ans'>Sellers generally procure and ship the items within the time specified on the product page. Business days exclude public holidays and Sundays.<br/>
        <br/>Estimated delivery time depends on the following factors:</div>
    <div className='third_par'>
      <ul>
        <li>The Seller offering the product</li>
        <li>Product's availability with the Seller</li>
        <li>The destination to which you want the order shipped to and location of the Seller.</li></ul></div><br/>

  <div className='four_qes'>Are there any hidden costs (sales tax, octroi etc) on items sold by Sellers on Flipkart?</div>
  <div className='four_ans'>There are NO hidden charges when you make a purchase on Flipkart. List prices are final and all-inclusive. The price you see on the product page is exactly what you would pay.<br/>
    <br/>Delivery charges are not hidden charges and are charged (if at all) extra depending on the Seller's shipping policy.</div><br/>

  <div className='five_qes'>Why does the estimated delivery time vary for each seller?</div>
<div className='five_ans'>You have probably noticed varying estimated delivery times for sellers of the product you are interested in. Delivery times are influenced by product availability, geographic location of the Seller, your shipping destination and the courier partner's time-to-deliver in your location.<br/><br/>
    Please enter your default pin code on the product page (you don't have to enter it every single time) to know more accurate delivery times on the product page itself.</div><br/>

<div className='six_qes'>Seller does not/cannot ship to my area. Why?</div>
<div className='six_ans'>Please enter your pincode on the product page (you don't have to enter it every single time) to know whether the product can be delivered to your location.<br/><br/>
If you haven't provided your pincode until the checkout stage, the pincode in your shipping address will be used to check for serviceability.<br/><br/>
Whether your location can be serviced or not depends on</div>
<div className='six_par'>
  <ul>
  <li>Whether the Seller ships to your location</li>
<li>Legal restrictions, if any, in shipping particular products to your location</li>
<li>The availability of reliable courier partners in your location</li></ul><br/>
At times Sellers prefer not to ship to certain locations. This is entirely at their discretion.</div><br/>

<div className='seven_qes'>Why is the CoD option not offered in my location?</div>
<div className='seven_ans'>Availability of CoD depends on the ability of our courier partner servicing your location to accept cash as payment at the time of delivery.<br/><br/>
Our courier partners have limits on the cash amount payable on delivery depending on the destination and your order value might have exceeded this limit. Please enter your pin code on the product page to check if CoD is available in your location.</div><br/>

<div className='eight_qes'>I need to return an item, how do I arrange for a pick-up?</div>
<div className='eight_ans'>Returns are easy. Contact Us to initiate a return. You will receive a call explaining the process, once you have initiated a return.<br/><br/>
Wherever possible Ekart Logistics will facilitate the pick-up of the item. In case, the pick-up cannot be arranged through Ekart, you can return the item through a third-party courier service. Return fees are borne by the Seller.</div><br/>

<div className='nine_qes'>I did not receive my order but got a delivery confirmation SMS/Email.</div>
<div className='nine_ans'>In case the product was not delivered and you received a delivery confirmation email/SMS, report the issue within 7 days from the date of delivery confirmation for the seller to investigate.</div><br/>

<div className='ten_qes'>What do the different tags like "In Stock", "Available" mean?<br/><br/>'In Stock'</div>
<div className='ten_ans'>For items listed as "In Stock", Sellers will mention the delivery time based on your location pincode (usually 2-3 business days, 4-5 business days or 4-6 business days in areas where standard courier service is available). For other areas, orders will be sent by Registered Post through the Indian Postal Service which may take 1-2 weeks depending on the location.</div><br/>
<div className='ten_par_qes'>'Available'</div>
<div className='ten_par_ans'>The Seller might not have the item in stock but can procure it when an order is placed for the item. The delivery time will depend on the estimated procurement time and the estimated shipping time to your location.</div><br/>
<div className='ten_par1_qes'>'Preorder' or 'Forthcoming'</div>
<div className='ten_par1_ans'>Such items are expected to be released soon and can be pre-booked for you. The item will be shipped to you on the day of it's official release launch and will reach you in 2 to 6 business days. The Preorder duration varies from item to item. Once known, release time and date is mentioned. (Eg. 5th May, August 3rd week)</div><br/>
<div className='ten_par2_qes'>'Out of Stock'</div>
<div className='ten_par2_ans'>Currently, the item is not available for sale. Use the 'Notify Me' feature to know once it is available for purchase.</div><br/>
<div className='ten_par3_qes'>'Imported'</div>
<div className='ten_par3_ans'>Sometimes, items have to be sourced by Sellers from outside India. These items are mentioned as 'Imported' on the product page and can take at least 10 days or more to be delivered to you.</div><br/>
<div className='ten_par4_qes'>'Back In Stock Soon'</div>
<div className='ten_par4_ans'>The item is popular and is sold out. You can however 'book' an order for the product and it will be shipped according to the timelines mentioned by the Seller.</div><br/>
<div className='ten_par5_qes'>'Temporarily Unavailable'</div>
<div className='ten_par5_ans'>The product is currently out of stock and is not available for purchase. The product could to be in stock soon. Use the 'Notify Me' feature to know when it is available for purchase.</div><br/>
<div className='ten_par6_qes'>'Permanently Discontinued'</div>
<div className='ten_par6_ans'>This product is no longer available because it is obsolete and/or its production has been discontinued.</div><br/>
<div className='ten_par7_qes'>'Out of Print'</div>
<div className='ten_par7_ans'>This product is not available because it is no longer being published and has been permanently discontinued.</div><br/>

<div className='eleven_qes'>Does Flipkart deliver internationally?</div>
<div className='eleven_ans'>As of now, Flipkart doesn't deliver items internationally.<br/><br/>
You will be able to make your purchases on our site from anywhere in the world with credit/debit cards issued in India and 21 other countries, but please ensure the delivery address is in India.</div>

</div>

</>
  )
}

export default shipping