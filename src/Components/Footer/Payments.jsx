import React from 'react'
import './payments.scss'

const Payments = () => {
  return (
    <>
    <div className='payments_main'>

      <div className='pay1_qes'>How do I pay for a Shopper purchase?</div>
        <div className='pay1_ans'>Shopper offers you multiple payment methods. Whatever your online mode of payment, you can rest assured that Shopper's trusted payment gateway partners use secure encryption technology to keep your transaction details confidential at all times.<br/><br/>You may use Internet Banking, Gift Card, Cash on Delivery and Wallet to make your purchase.<br/><br/>Shopper also accepts payments made using Visa, MasterCard, Maestro and American Express credit/debit cards in India and 21 other countries.</div><br/>
      
      <div className='pay2_qes'>Are there any hidden charges (Octroi or Sales Tax) when I make a purchase on Shopper?</div>
        <div className='pay2_ans'>There are NO hidden charges when you make a purchase on Shopper. The prices listed for all the items are final and all-inclusive. The price you see on the product page is exactly what you pay.<br/><br/>Delivery charges may be extra depending on the seller policy. Please check individual seller for the same. In case of seller WS Retail, the ₹50 delivery charge is waived off on orders worth ₹500 and over.</div><br/>
      
      <div className='pay3_qes'>What is Cash on Delivery?</div>
        <div className='pay3_ans'>If you are not comfortable making an online payment on Shopper.com, you can opt for the Cash on Delivery (C-o-D) payment method instead. With C-o-D you can pay in cash at the time of actual delivery of the product at your doorstep, without requiring you to make any advance payment online.<br/><br/>The maximum order value for a Cash on Delivery (C-o-D) payment is ₹50,000. It is strictly a cash-only payment method. Gift Cards or store credit cannot be used for C-o-D orders. Foreign currency cannot be used to make a C-o-D payment. Only Indian Rupees accepted.</div><br/>
     
      <div className='pay4_qes'>How do I pay using a credit/debit card?</div>
        <div className='pay4_ans'>We accept payments made by credit/debit cards issued in India and 21 other countries.</div><br/>
      <div className='pay1_par_qes'>Credit cards</div>
        <div className='pay1_par_ans'>We accept payments made using Visa, MasterCard and American Express credit cards.<br/><br/>To pay using your credit card at checkout, you will need your card number, expiry date, three-digit CVV number (found on the backside of your card). After entering these details, you will be redirected to the bank's page for entering the online 3D Secure password.</div>
      <div className='pay2_par_qes'>Debit cards</div>
        <div className='pay2_par_ans'>We accept payments made using Visa, MasterCard and Maestro debit cards.<br/><br/>To pay using your debit card at checkout, you will need your card number, expiry date (optional for Maestro cards), three-digit CVV number (optional for Maestro cards). You will then be redirected to your bank's secure page for entering your online password (issued by your bank) to complete the payment.<br/><br/>Internationally issued credit/debit cards cannot be used for Flyte, Wallet and eGV payments/top-ups.</div><br/>
      
      <div className='pay5_qes'>Is it safe to use my credit/debit card on Shopper?</div>
        <div className='pay5_ans'>Your online transaction on Shopper is secure with the highest levels of transaction security currently available on the Internet. Shopper uses 256-bit encryption technology to protect your card information while securely transmitting it to the respective banks for payment processing.<br/><br/>All credit card and debit card payments on Shopper are processed through secure and trusted payment gateways managed by leading banks. Banks now use the 3D Secure password service for online transactions, providing an additional layer of security through identity verification.</div><br/>

      <div className='pay6_qes'>What steps does Shopper take to prevent card fraud?</div>
        <div className='pay6_ans'>Shopper realizes the importance of a strong fraud detection and resolution capability. We and our online payments partners monitor transactions continuously for suspicious activity and flag potentially fraudulent transactions for manual verification by our team.<br/><br/>In the rarest of rare cases, when our team is unable to rule out the possibility of fraud categorically, the transaction is kept on hold, and the customer is requested to provide identity documents. The ID documents help us ensure that the purchases were indeed made by a genuine card holder. We apologise for any inconvenience that may be caused to customers and request them to bear with us in the larger interest of ensuring a safe and secure environment for online transactions.</div><br/>

      <div className='pay7_qes'>What is a 3D Secure password?</div>
        <div className='pay7_ans'>The 3D Secure password is implemented by VISA and MasterCard in partnership with card issuing banks under the "Verified by VISA" and "Mastercard SecureCode" services, respectively.<br/><br/>The 3D Secure password adds an additional layer of security through identity verification for your online credit/debit card transactions. This password, which is created by you, is known only to you. This ensures that only you can use your card for online purchases.</div><br/>
      
      <div className='pay8_qes'>How can I get the 3D Secure password for my credit/debit card?</div>
        <div className='pay8_ans pay9_ans'>You can register for the 3D Secure password for your credit/debit card by visiting your bank's website. The registration links for some of the banks have been provided below for easy reference:
            <table className='pay_bank'>
              <thead>
              <tr>
              <th>State Bank of India</th>
              <th>ICICI Bank</th>
              <th>HDFC Bank</th>
              <th>Punjab National Bank</th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td>Axis Bank</td>
              <td>Corporation Bank</td>
              <td>Andhra Bank</td>
              <td>Bank of Baroda</td>
              </tr>
              <tr>
              <td>Standard Chartered India</td>
              <td>Union Bank of India</td>
              <td>Central Bank of India</td>
              <td>Citibank</td>
              </tr>
              <tr>
              <td>Deutsche Bank</td>
              <td>Dhanlakshmi Bank</td>
              <td>IDBI Bank</td>
              <td>Canara Bank</td>
              </tr>
              <tr>
              <td>IndusInd Bank</td>
              <td>Federal Bank</td>
              <td>Kotak Mahindra Ban</td>
              <td>Karur Vysya Bank</td>
              </tr>
              <tr>
              <td>Oriental Bank of Commerce</td>
              <td>South Indian Bank</td>
              <td>Vijaya Bank</td>
              <td>-</td>
              </tr>
              </tbody>
            </table>
        </div><br/>

      <div className='pay9_qes'>Can I use my bank's Internet Banking feature to make a payment?</div>
         <div className='pay9_ans'>Yes. Shopper offers you the convenience of using your bank's Internet Banking service to make a payment towards your order. With this you can directly transfer funds from your bank account, while conducting a highly secure transaction.<br/><br/>We accept payment through Internet Banking for the following banks:
          <table className='pay_bank'>
                <thead>
                <tr>
                <th>ABN Amro Bank</th>
                <th>Axis Bank</th>
                <th>Allahabad Bank</th>
                <th>Andhra Bank</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>Bank of Bahrain and Kuwait</td>
                <td>Bank of Baroda</td>
                <td>Bank of India</td>
                <td>Bank of Maharashtra</td>
                </tr>
                <tr>
                <td>Bank of Rajasthan</td>
                <td>Central Bank of India</td>
                <td>Citibank</td>
                <td>City Union Bank</td>
                </tr>
                <tr>
                <td>Corporation Bank</td>
                <td>Deutsche Bank</td>
                <td>Development Credit Bank</td>
                <td>Dhanlaxmi Bank</td>
                </tr>
                <tr>
                <td>Federal Bank</td>
                <td>HDFC Bank</td>
                <td>ICICI Bank</td>
                <td>IDBI Bank</td>
                </tr>
                <tr>
                <td>ING Vysya Bank</td>
                <td>Indian Overseas Bank</td>
                <td>Indian Bank</td>
                <td>IndusInd Bank</td>
                </tr>
                <tr>
                <td>Jammu & Kashmir Bank</td>
                <td>Karnataka Bank</td>
                <td>Karur Vysya Bank</td>
                <td>Kotak Mahindra Bank</td>
                </tr>
                <tr>
                <td>Lakshmi Vilas Bank</td>
                <td>Oriental Bank of Commerce</td>
                <td>Punjab National Bank</td>
                <td>Royal Bank of Scotland</td>
                </tr>
                <tr>
                <td>South Indian Bank</td>
                <td>Standard Chartered Bank</td>
                <td>State Bank of Hyderabad</td>
                <td>State Bank of India</td>
                </tr>
                <tr>
                <td>State Bank of Mysore</td>
                <td>State Bank of Travancore</td>
                <td>Syndicate Bank</td>
                <td>Tamilnad Mercantile Bank</td>
                </tr>
                <tr>
                <td>Union Bank of India</td>
                <td>United Bank of India</td>
                <td>Vijaya Bank</td>
                <td>YES Bank</td>
                </tr>
                </tbody>
              </table>
          </div><br/>
        <div className='pay10_qes'>Can I make a credit/debit card or Internet Banking payment on Shopper through my mobile?</div>
          <div className='pay10_ans'>Yes, you can make credit card payments through the Shopper mobile site and application. Shopper uses 256-bit encryption technology to protect your card information while securely transmitting it to the secure and trusted payment gateways managed by leading banks.</div><br/>

        <div className='pay11_qes'>How does 'Instant Cashback' work?</div>
          <div className='pay11_ans'>The 'Cashback' offer is instant and exclusive to Shopper.com. You only pay the final price you see in your shopping cart.</div><br/>

        <div className='pay12_qes'>How do I place a Cash on Delivery (C-o-D) order?</div>
          <div className='pay12__ans'>All items that have the "Cash on Delivery Available" icon are valid for order by Cash on Delivery.<br/><br/>Add the item(s) to your cart and proceed to checkout. When prompted to choose a payment option, select "Pay By Cash on Delivery". Enter the CAPTCHA text as shown, for validation.<br/><br/>Once verified and confirmed, your order will be processed for shipment in the time specified, from the date of confirmation. You will be required to make a cash-only payment to our courier partner at the time of delivery of your order to complete the payment.<br/><br/>Terms & Conditions:
          <ul>
            <li>The maximum order value for C-o-D is ₹50,000</li>
            <li>Gift Cards or Store Credit cannot be used for C-o-D orders</li>
            <li>Cash-only payment at the time of delivery.</li></ul>
          </div><br/>
        
        <div className='pay13_qes'>What is Shopper's credit card EMI option?</div>
          <div className='pay13_ans'>With Shopper's credit card EMI option, you can choose to pay in easy installments of 3, 6, 9, 12, 18*, or 24 months* with credit cards from the following banks:
          <ul>
            <li>HDFC</li>
            <li>Citi</li>
            <li>ICIC</li>
            <li>Kotak</li>
            <li>Axis</li>
            <li>Induslnd</li>
            <li>SBI</li>
            <li>Standard Chartered</li>
            <li>HSBC</li>
          </ul><br/>*18 & 24 months EMI options are available from select banks only. Please refer to the table below for more details:
          <div className='pay9_ans'>
              <table>
                <thead>
                <tr>
                <th><strong>Banks</strong></th>
                <th><strong>Supports 18 & 24 months tenure</strong></th>
                <th><strong>Minimum order value to avail 18 & 24 months EMI options</strong></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>HDFC</td>
                <td>Yes</td>
                <td>₹ 10,000</td>
                </tr>
                <tr>
                <td>Citi</td>
                <td>Yes</td>
                <td>₹ 10,000</td>
                </tr>
                <tr>
                <td>ICICI</td>
                <td>Yes</td>
                <td>₹ 10,000</td>
                </tr>
                <tr>
                <td>Kotak</td>
                <td>Yes</td>
                <td>₹ 4,000</td>
                </tr>
                <tr>
                <td>Axis</td>
                <td>Yes</td>
                <td>₹ 4,000</td>
                </tr>
                <tr>
                <td>IndusInd</td>
                <td>Yes</td>
                <td>₹ 4,000</td>
                </tr>
                <tr>
                <td>SBI</td>
                <td>No</td>
                <td>NA</td>
                </tr>
                <tr>
                <td>Standard Chartered</td>
                <td>Yes</td>
                <td>₹ 4,000</td>
                </tr>
                <tr>
                <td>HSBC</td>
                <td>No</td>
                <td>NA</td>
                </tr>
                </tbody>
              </table>
              </div>
              <br/><br/>There is NO processing fee charged for availing Shopper's EMI payment option. On return or exchange, interest charged by the bank till that time will not be refunded by Shopper.<br/><br/>You may check with the respective bank/issuer on how a cancellation, refund or pre-closure could affect the EMI terms, and what interest charges would be levied on you for the same.<br/><br/>
              <span className='exam_multi'>Example and Calculations</span><br/><br/>The table below shows a representative rendering of EMI plans for a Rs 20,000 purchase on Shopper paid using the EMI payment plan
                <div className='pay9_ans'>
                <table>
                  <thead>
                  <tr>
                  <th><strong>Tenure (months)</strong></th>
                  <th><strong>Loan amount</strong></th>
                  <th><strong>Monthly installment</strong></th>
                  <th><strong>Bank interest rate</strong></th>
                  <th><strong>Total effective price you pay</strong></th>
                  <th><strong>Interest paid to Bank</strong></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td>3</td>
                  <td>Rs 20,000</td>
                  <td>Rs 6,800.44</td>
                  <td>12.00%</td>
                  <td>Rs. 20,401.33</td>
                  <td>Rs. 401.33</td>
                  </tr>
                  <tr>
                  <td>6</td>
                  <td>Rs 20,000</td>
                  <td>Rs 3,450.97</td>
                  <td>12.00%</td>
                  <td>Rs 20,705.80</td>
                  <td>Rs. 705.80</td>
                  </tr>
                  <tr>
                  <td>9</td>
                  <td>Rs 20,000</td>
                  <td>Rs 2,344.32</td>
                  <td>13.00%</td>
                  <td>Rs 21,098.89</td>
                  <td>Rs. 1,098.89</td>
                  </tr>
                  <tr>
                  <td>12</td>
                  <td>Rs 20,000</td>
                  <td>Rs 1,786.35</td>
                  <td>13.00%</td>
                  <td>Rs 21,436.15</td>
                  <td>Rs. 1,436.15</td>
                  </tr>
                  </tbody>
                  </table>
                  </div>
          </div><br/>

    <div className='pay13_qes'>How do I make a payment using Shopper's credit card EMI option?</div>
      <div className='pay13_ans'>Once you've added the desired items to your Shopper shopping cart, proceed with your order as usual by entering your address. When you're prompted to choose a payment mode for your order, select 'EMI' & follow these simple steps:<br/><br/>
        <ul>
          <li>Choose your credit-card issuing bank you wish to pay from</li>

          <li>Select the EMI plan of your preference</li>

          <li>Enter your credit card details</li>

          <li>Click 'Save and Pay'</li>
        </ul><br/><br/>
        Please note that the full amount will be charged on your card the day of the transaction.</div>

</div>
    </>
  )
}

export default Payments
