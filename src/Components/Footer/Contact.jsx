import React from 'react'
import './contact.scss'
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
    <div className='contact_write_main'>

<div className='contact_main'><div id='contact_main'>Contact Us</div>
    <div className='contact_us'>
      <div className='contact_des'>We want you to be entirely happy with your Shopper items but please do get in touch if you have any questions at all.<br/>We can take up to 24hrs/48hrs to response but we will get back to you ASAP. You can make a return via our ‘request a return page. To be aware that at busier times we can take up to 5 business days. </div>
    </div>

    <div className='social'>
    <div className='social_contact'>
      <div className='whatsapp_icon'><FaWhatsapp /></div>
      <div className='whatsapp_us'>WhatsApp Us</div>
      <div className='whatsapp_number'>Contact us at +634485 742227</div>
      <div className='available_time'>Available Monday-Friday 9:00am - 5:00pm</div>
    </div>
    <div className='email_us'>
      <div className='email_icon'><AiOutlineMail /></div>
      <div className='email_us'>Email Us</div>
      <div className='email_contact'>Email us at contact@shopper.com</div>
      <div className='available_time'>Available Monday-Friday 9:00am - 5:00pm</div>
    </div>
    </div>
    </div>

    <div className='write_to_us'><div id='write_to_us'>Write to us</div>
    <div className="wite_desc" id='write_desc'>If you cannot find what you are Looking for, you can contact us, we will get back to you shortly</div>

<form class="write_to_form">

  <div class="write_form">
    <input id="write_name" class="form-control" type="text"   required />
    <label for="write_name">Name<span class="gl-form-asterisk"></span></label>
  </div>
  
  <div class="write_form">
    <input id="write_number" class="form-control" type="text"  placeholder="" required />
    <label for="write_number">Email<span class="gl-form-asterisk"></span></label>
  </div>

  <div class="write_form">
    <input id="write_req" class="form-control" type="text"  placeholder="" required />
    <label for="write_req">Request<span class="gl-form-asterisk"></span></label>
  </div>

  <div class="write_form">
    <input id="write_description" class="form-control" type="text"  placeholder="" required />
    <label for="write_description">Description<span class="gl-form-asterisk"></span></label>
  </div>

  <div className='write_submit'>
    <button>Submit</button>
  </div>

  </form>
  </div>
</div>
  
    </>
  )
}

export default Contact
 