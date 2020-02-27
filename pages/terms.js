import React from 'react';
import Head from 'next/head'
import Navigation from '../components/nav'
import Layout from '../components/layout'
import Footer from '../components/footer'
import { Container, Row, Col } from 'react-bootstrap'
import '../components/termsPrivacy.css'

const Terms = () => {
    return (
        <Layout>
            <Head>
                <title>Virtual Agent Terms</title>
                <meta name="description" content="" />
            </Head>
            <Navigation />
            <header className='header-termsPrivacy position-relative h-100'>
                {/* <img className='header-home-img' src="/home-header.jpg" /> */}
                <div className="position-absolute" style={{'right':'0','bottom':'0','zIndex':'3'}}>
                    <img src="../Humaaan-1.png" style={{'width':'29%'}} />
                    <img src="../Humaaan-2.png" style={{'width':'33%'}} />
                </div>
                <Container className='h-100'>
                <Row className='h-100'>
                    <Col>
                    <div className="d-flex h-100 n-header-wrapped-container align-items-start justify-content-center flex-column position-relative">
                        <div className="position-relative" style={{'padding':'0 15px', 'zIndex' : '3'}}>
                            <h1 className="n-header-wrapped-title text-white">Terms & Conditions</h1>
                            <p className="n-header-wrapped-p text-white fs-25 f-light mb-0" style={{'maxWidth': '460px'}}>At Virtual Agent we care about you & the trust you give us</p>
                        </div>
                    </div>
                    </Col>
                </Row>
                </Container>
            </header>

            <Container className='position-relative content-spacer'>
                <Row>
                    <Col>
                        <div class="terms-ol">
                            <ol>
                                <li>
                                    <strong>Introduction</strong>
                                    <p>In these terms and conditions, “<strong>Virtual Agent</strong>”, “<strong>we</strong>”, “<strong>us</strong>” or “<strong>our</strong>” means Raw Property Australia Pty Ltd ABN 75 604 742 047, and “<strong>you</strong>” or “<strong>your</strong>” means you, the property management agency, that we have accepted as a user of the Software and the Services.</p>
                                </li>

                                <li>
                                    <strong>General</strong>
                                    <ol>
                                        <li>These terms and conditions constitute a legal agreement between Virtual Agent and you in relation to your access and use of the Software, and any Services.  By accessing the Website, Software and/or the Services you agree to these terms and conditions as amended by us from time to time.</li>
                                        <li>We may amend these terms and conditions at any time by publishing the amended terms and conditions on our Website.  We will notify you of any material changes to these terms and conditions by electronic notice to you.  Your continued use of the Software following such notification will mean that you agree to be bound by these terms and conditions, as amended.</li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>Authorised Users</strong>
                                    <ol>
                                        <li>You may authorise your officers, employees, landlords or tenants to access and use the Software and/or the Services on your behalf (Authorised Users).</li>
                                        <li>All dealings between you and your Authorised Users using the Software are solely between you and the Authorised User to our exclusion.  You are responsible for resolving any dispute arising between you and the Authorised User in connection with the Software or the Services.</li>
                                        <li>We reserve the right to communicate directly with or deal in any way with your Authorised Users in providing access to and use of the Software and/or the Services.</li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>Use of Software and Services</strong>
                                    <ol>
                                        <li>You must use the Software and Services in a manner that complies with any rules or guidelines as to the access and use of the Software and/or the Services issued by us in writing from time to time.</li>
                                        <li>
                                            Without limiting the generality of clause 4.1, you must:
                                            <ol>
                                                <li>ensure your Authorised Users of the Software undertake such training programs as may be required by us, prior to using the Software and/or the Services;</li>
                                                <li>ensure all information you enter using the Software is complete, accurate and up-to-date;</li>
                                                <li>comply with all procedures and security measures associated with access to the Software and the Services required by us;</li>
                                                <li>comply with all applicable laws when using the Software and the Services;</li>
                                                <li>not use the Software or Services for any dishonest, fraudulent, illegal or unlawful activity or purpose or any activity that may violate any rights of any third party;</li>
                                                <li>not engage in any false, misleading or deceptive acts or practices involving the Software or Services or your identity, agency or affiliation with any person or entity;</li>
                                                <li>not misuse the Software;</li>
                                                <li>not copy, modify, make derivative works of, disassemble, decompile, derive the source code, reverse engineer the Software or attempt to do so or any like act.</li>
                                            </ol>
                                        </li>
                                        <li>You acknowledge and agree you are solely responsible at your own cost for maintaining suitable digital communication equipment, computer hardware and software, internet access and any like infrastructure to enable you to access and use the Software and the Services.</li>
                                        <li>You are responsible for all activities that occur under your password or account.  You must ensure you and your Authorised Users keep your  passwords for the Software, as well as passwords for the computer or digital hardware used to access the Software, secure and confidential, and change passwords regularly in line with best practice.  You must immediately notify us of any unauthorised use of an Authorised User’s or your password or account for the Software or breach of security.</li>
                                        <li>You acknowledge and agree that we do not have any control over, and are not responsible or liable for, the completion of any Jobs accepted by a Supplier via the Software.  The Supplier is solely responsible and liable for the completion of any Jobs accepted via the Software.</li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>Software Outage</strong>
                                    <p>In the event that access to the Software becomes temporarily unavailable, you acknowledge and agree that you and your Authorised Users will revert to other means of contact (eg phone or email) during the outage period to ensure the impact to your business and Authorised Users is mitigated until the issue is resolved.  We will take reasonable steps to resolve the issue as soon as practicable.</p>
                                </li>
                                <li>
                                    <strong>Invoicing and payment</strong>
                                    <ol>
                                        <li>Invoices for the Monthly Access Fee will be issued to you monthly in advance, on the first day of each calendar month.  The Initial Set Up Fee will be included in your first invoice from us.</li>
                                        <li>You must make payment to us in accordance with and by the due date specified in the invoice.</li>
                                        <li>Unless otherwise agreed, subject to clause 11, payment of the Monthly Access Fee must be made by you authorising us to direct debit your nominated bank account on the first day of each month, one month in advance.  You must do all things necessary to authorise the direct debit and must not revoke that authority.  Any payment made by direct debit will be taken to be made once the relevant amount has been transferred to our account (and for so long as such transfer is not reversed or otherwise voided).</li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>Non-payment</strong>
                                    <p>In the event payment of an invoiced amount is not received by the specified due date, a notice for payment will be issued to you (“Non-Payment Notice”).  We may suspend your access to the Software if full payment has not been received by us within seven (7) days of the Non-Payment Notice being sent.  In that event, we will provide you with 24 hours’ written notice prior to suspending your access to the Software.</p>
                                </li>
                                <li>
                                    <strong>Supplier Contribution Fee</strong>
                                    <p>We reserve the right to charge a Supplier a Supplier Contribution Fee in respect of any Qualifying Job of the Supplier.  In that case, the Supplier Contribution Fee amount will be set by us in consultation with you.</p>
                                </li>
                                <li>
                                    <strong>FIX Coins</strong>
                                    <ol>
                                        <li>If we choose to charge a Supplier Contribution Fee to any one or more of your Suppliers under clause 9, we will maintain a notional credit account (“<strong>FIX Coin Account</strong>”) for you.  Credits known as “<strong>FIX Coins</strong>” will be notionally credited to your FIX Coin Account after we receive payment of a Supplier Contribution Fee in respect of a Qualifying Job.  The notional amount of FIX Coins credited to your account will be notionally equal to the amount of the Supplier Contribution Fee we receive in respect of the Qualifying Job, less a 5% processing fee.</li>
                                        <li>We are not responsible for any delay or failure of a Supplier to pay a Supplier Contribution Fee when due or to notify us of the completion of a Qualifying Job.</li>
                                        <li>We may unilaterally adjust your FIX Coin Account for erroneous, invalid, cancelled or reversed Supplier Contribution Fees or Qualifying Jobs at any time.</li>
                                        <li>You may use the Software to check your FIX Coin Account balance at any time.</li>
                                        <li>You cannot transfer, sell, assign, grant an interest in, charge, mortgage or otherwise give your FIX Coins to any other person.</li>
                                        <li>FIX Coins are notional and have no cash or monetary value and for the avoidance of doubt cannot be exchanged for cash or money other than pursuant to clause 11.</li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>Redemption of FIX Coins</strong>
                                    <ol>
                                        <li>Redemption of FIX Coins will operate as a discount to your Monthly Access Fee.  All redemptions will incur a processing fee of 5% of the redemption amount.  The processing fee will appear on your monthly invoice from us.</li>
                                        <li>Unless we agree otherwise and subject to clause 10.3, the balance of your FIX Coin Account will be automatically applied to the full extent possible on the first day of each month against amounts owing by you to us at that time in respect of your Monthly Access Fee.  The application of FIX Coins in these circumstances is at our sole discretion.  If you have insufficient FIX Coins to redeem the whole amount owing by you to us, you will remain responsible for paying Virtual Agent the difference following the redemption.</li>
                                        <li>If the balance of the FIX Coin Account at the start of a month exceeds the amounts owing by you to us at that time, any remaining balance of your FIX Coin Account (following the redemption) will be carried over to the following month (other than to January – in which case clause 11.4 applies).   </li>
                                        <li>At the end of each calendar year, any FIX Coins standing to the credit of your FIX Coin Account will be redeemed for cash and at your discretion either:
                                        
                                            <ol>
                                                <li>paid into your nominated bank account (less any processing fee); or </li>
                                                <li>paid by way of donation to an eligible charity of your choice (in which case we will waive the processing fee).</li>
                                            </ol>
                                            If you fail to provide us with reasonable prior notice as to how you wish any redemption to be paid under this clause 11.4, the balance will be redeemed and donated to an eligible charity chosen by us.
                                        </li>
                                        <li>
                                            In the event we incur additional credit card processing fees in connection with any redemption of FIX Coins, we reserve the right to offset these fees against any future FIX Coins standing to the balance of your FIX Coin Account.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>Termination</strong>
                                    <ol>
                                        <li>You may terminate this agreement by giving thirty (30) days’ prior written notice to us at any time.</li>
                                        <li>Without limiting clause 12.3, we may terminate this agreement with or without cause by giving seven (7) days’ prior written notice to you at any time.</li>
                                        <li>We may, in our absolute discretion, immediately suspend or terminate your access to all or part of the Software and/or the Services if:
                                            <ol>
                                                <li>you breach these terms and conditions; </li>
                                                <li>you are the subject of a complaint that we deem serious;</li>
                                                <li>we deem it necessary in order to repair, maintain or protect the integrity or reputation of the Software or the Services; or</li>
                                                <li>you suffer an Insolvency Event or otherwise cease or threaten to case trading.</li>
                                            </ol>
                                        </li>
                                        <li>Termination of this agreement does not affect any right that has accrued to a party before the date termination.</li>
                                        <li>Any term of this agreement that is expressly stated or intended by its nature to survive termination of this agreement will so survive.</li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>Exclusion and Limitation of Liability</strong>
                                    <ol>
                                        <li>You acknowledge that Virtual Agent provides the Software and the Services on an “as is” basis.  To the maximum extent permitted by law, we expressly exclude all conditions and warranties (whether express, implied or statutory).  To the extent a condition or warranty is implied by law and cannot be excluded, we limit our liability for any breach of such condition or warranty (to the extent possible) to the resupply of the Software and/or the Services, or paying the cost of resupplying the Software and/or the Services.</li>
                                        <li>You acknowledge and agree that Virtual Agent does not guarantee that access to the Software and/or Services will be uninterrupted or free from error.  To the maximum extent permitted by law, we exclude all liability for any loss (including indirect loss), damages or injury resulting from your access (or inability to access) or use of the Software or the Services, or as a consequence of any content or information obtained from or through the Software or the Services.</li>
                                        <li>Without limiting clauses 13.1, 13.2 and 14, to the maximum extent permitted by law, Virtual Agent will not be liable to you (whether in contract, tort, equity or otherwise) or to anyone else for any loss or damage, whether direct or indirect, special, incidental or consequential or economic (including loss of profits), whether or not Virtual Agent knew or could have known of the possibility of such loss or damage to you or anyone else.</li>
                                        <li>Without limiting clauses 13.1, 13.2 and 13.3, the total aggregate liability of Virtual Agent in respect of all claims made under this agreement or otherwise in respect of access to or use of the Software and/or the Services (including in respect of any claims in tort or negligence) is limited to the total Monthly Access Fees paid by you in the 12 month period prior to the date of the relevant claim.</li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>Indemnity</strong>
                                    <p>You agree to fully indemnify us and hold us harmless from and against any and all claims, suits, actions, proceedings or loss incurred, suffered or brought against us in respect of or in connection with:</p>
                                    <ol>
                                        <li>breach of these terms and conditions by you or an Authorised User;</li>
                                        <li>any negligent, fraudulent or willful act or omission by you or your officers, employees, agents or contractors or other Authorised User;</li>
                                        <li>access to and use of the Software and/or the Services by you or an Authorised User;</li>
                                        <li>any party that has gained access to the Software or Services in connection with your actions or omissions.</li>
                                    </ol>
                                    <p>This clause survives termination of this agreement.</p>
                                </li>
                                <li>
                                    <strong>Confidentiality</strong>
                                    <p>Each party to this agreement must keep confidential any information that party obtains about the other party’s business and must not disclose any such information except where required by law.  This clause survives termination of this agreement.</p>
                                </li>
                                <li>
                                    <strong>Privacy</strong>
                                    <p>All personal information collected and held by us through your use of the Software and/or the Services will be dealt with in accordance with our Privacy Policy available on our Website and via the Software.  Our Privacy Policy details the types of personal information we collect, who can access the information and the purposes for which it may be used.</p>
                                </li>
                                <li>
                                    <strong>Intellectual property rights</strong>
                                    <ol>
                                        <li>Unless otherwise indicated, we own or licence from third parties all rights, title and interest (including copyright, designs, patents, trademarks and other intellectual property rights) in the Software and in all of the material (including all text, graphics, logos, audio and software) made available through the Software, including all training guides, manuals and the like (“<strong>Content</strong>”).</li>
                                        <li>Your use of the Software and use of and access to any Content does not grant or transfer any rights, title or interest to you in relation to the Software or the Content.</li>
                                        <li>For the avoidance of doubt, you have no right to grant any licence, make any assignment or otherwise provide any rights to use the Software or the Content to any person – whether for value or not.</li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>Marketing</strong>
                                    <ol>
                                        <li>You agree to purchase the marketing collateral provided by us in connection with the Software and the Services  Prices for such marketing collateral will be as stated in our price list as separately notified by us to you.</li>
                                        <li>You may only use our branding (including the words “FIX” and/or the “FIX” logo) with our prior written consent, and only as approved by us and in accordance with any rules or guidelines issued by us in writing from time to time.</li>
                                        <li>You must not market or publicise your use of the Software or the Services, or use our branding (including any of the words “FIX”, “FIX Coin” or “Virtual Agent”) in any marketing, social media or other publicity materials, without our prior written approval (which approval may be withheld in our absolute discretion).</li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>GST</strong>
                                    <ol>
                                        <li>Any amount referred to in these terms and conditions which is relevant in determining a payment to be made by one of the parties to the other is exclusive of GST unless indicated otherwise. </li>
                                        <li>If we make a taxable supply to you that is exclusive of GST under these terms and conditions, then in addition to the amount payable you must pay us an additional amount equal to the GST payable on or for the taxable supply, subject only to the receipt of a valid tax invoice.</li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>Miscellaneous</strong>
                                    <ol>
                                        <li>These terms and conditions, any guidelines or instructions issued by us and any policies or guidelines referred to within these terms and conditions, record the entire agreement between the parties about its subject matter.</li>
                                        <li>You may not transfer your rights and obligations under these terms and conditions without prior written authorisation from us.  We may assign or transfer our rights and obligations to any third party without notice to you or consent from you.</li>
                                        <li>You agree to promptly execute all documents and do everything necessary or desirable to give full effect to these terms and conditions.</li>
                                        <li>We do not waive any provision of these terms and conditions unless that waiver is in writing and signed by an authorised representative of Virtual Agent.  Any such waiver will not be, or be deemed to be, a waiver of any other right under these terms and conditions.  If we fail or delay to enforce any provision of these terms and conditions, such failure or delay will not be considered to be a waiver of that provision.</li>
                                        <li>These terms and conditions are governed by the laws of South Australia and the parties submit to the non-exclusive jurisdiction of the Courts of that state with respect to any proceedings arising out of or in connection with these terms and conditions.</li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>Notices</strong>
                                    <p>In these terms and conditions, notices must be in writing and may be sent:</p>
                                    <ol>
                                        <li>by prepaid post to the person’s last notified address – in which case notice is taken to be received five (5) business days after posting; </li>
                                        <li>by electronic mail to the person’s last notified electronic mail address – in which case notice is taken to be received when the message is showing on the sender’s electronic mail system as having been properly transmitted; or </li>
                                        <li>by us to you by electronic means via the Software – in which case, notice will be taken to be received when the notice has been published via the Software and you have been notified by electronic mail that the notice is available and how you can obtain a copy.</li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>Interpretation</strong>
                                    <p>In these terms and conditions:</p>
                                    <ol>
                                        <li>headings do not affect interpretation;</li>
                                        <li>singular includes plural and plural includes singular;</li>
                                        <li>reference to a person includes a corporation, body corporate, joint venture, association, firm and any other entity;</li>
                                        <li>reference to a business day means a day other than a Saturday, Sunday or public holiday in Adelaide, South Australia;</li>
                                        <li>reference to a party includes that party's executors, administrators, successors and permitted assigns;</li>
                                        <li>a provision must be read down to the extent necessary to be valid and if it cannot be read down to that extent, it must be severed</li>
                                        <li>the use of the term “includes” or “including” does not imply any limitations;</li>
                                        <li>another grammatical form of a defined expression has a corresponding meaning.</li>
                                    </ol>
                                </li>
                            </ol>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Layout>
    )
}

export default Terms