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
                <title>Virtual Agent Privacy</title>
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
                            <h1 className="n-header-wrapped-title text-white">Privacy Policy</h1>
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
                    <div>
                    <h4 class="dgrey-text">Our Principals of Protecting Data</h4>
                    <p class="dgrey-text fs-16">We collect personal information from you and users of our website and services in order to deliver software services to you.</p>

                    <h4 class="dgrey-text">The types of data we collect</h4>
                    <p class="dgrey-text fs-16">The personal information which is collected from tenants and landlords includes full name, email address, property address, home/mobile number. </p>
                    <p class="dgrey-text fs-16">The personal information which is collected from your tradespeople include their business contact details such as email address, phone number, place of business and may also include relevant insurance documents.</p>

                    <h4 class="dgrey-text">How we collect your data</h4>
                    <p class="dgrey-text fs-16">When you use our services or visit our websites, we collect personal data. The ways we collect it are included below</p>
                    <p class="dgrey-text fs-16">Information you provide to us:</p>
                    <ul>
                        <li class="dgrey-text"><strong>Syncing</strong>. Information is collected when Virtual Agent syncs to your real estate software program used to manage your business activities. Information may also be collected during telephone or e-mail contact with you or your users.</li>
                        <li class="dgrey-text"><strong>Use of websites</strong>. When you or your users visit or use some parts of our websites and/or services we might ask users to provide personal data to us such as user names, passwords or tradespeople’s credit card details. Please note, this information is not stored.</li>
                    </ul>

                    <p class="dgrey-text fs-16">Information we collect automatically:</p>
                    <ul>
                        <li class="dgrey-text">When you visit our websites or use our services we collect some information about you automatically, like your IP address. We also collect information when you navigate through our websites such as what pages you and users have looked at and what links have been clicked on. This information helps us to gain a better understanding of how you and users are interacting with our website so that we can provide the best experience possible to you</li>
                        <li class="dgrey-text">Some of this information is collected by using cookies and similar tracking technologies. </li>
                    </ul>

                    <p class="dgrey-text fs-16">When we collect personal data, we'll only process it:</p>
                    <ol>
                        <li class="dgrey-text">To perform the responsibilities under our Agreement with you, or</li>
                        <li class="dgrey-text">where we have legitimate interests to process the personal data so long as it is not in conflict with your rights, or</li>
                        <li class="dgrey-text">in accordance with a legal obligation, or</li>
                        <li class="dgrey-text">where we have your consent.</li>
                    </ol>

                    <p class="dgrey-text fs-16">If you don't want to provide us with personal data, you don’t have to, but it might mean you can’t use some parts of our websites or services.</p>

                    <h4 class="dgrey-text">How we use your data</h4>
                    <p class="dgrey-text fs-16">The primary use of your personal data is so we can operate our websites, provide you with any services you’ve requested as well as managing our relationship with you. This includes:</p>
                    <ol>
                        <li class="dgrey-text">
                            <strong>Communicating with you and users</strong>. For example, sending release notes to users, organising training, providing general updates on our software or asking for feedback.
                            This also includes providing contact information (landlord, tenants or agency) to contractors or other service providers.
                        </li>
                        <li class="dgrey-text">
                            <strong>Supporting you</strong>. This includes providing technical or training support by email, phone or otherwise.
                        </li>
                        <li class="dgrey-text">
                            <strong>Invoicing and billing</strong>. This includes sending emails, invoices and/or receipts for billing purposes.
                        </li>
                        <li class="dgrey-text">
                            <strong>Product Improvement and feedback</strong>. Monitoring the use of our websites and services ensures we keep improving our product. It also allows us to carry out technical analysis of our websites and services to optimize the user experience.
                        </li>
                        <li class="dgrey-text">
                            <strong>To improve our services</strong>. We collect and use personal information about you or users of our websites and services to view a combined picture of how users are interacting with our tools,
                            including the historical activities and actions of users. We use data from users to understand their engagement with our products to allow us to make informed predictions, decisions and to better understand users and their behaviors.
                            This may be shared with 3rd parties in an aggregate form.
                        </li>
                        <li class="dgrey-text">
                            <strong>Tenant Login</strong>. We use, disclose and visually display tenants’ last name on the product website for log in purposes for tenants.
                        </li>
                        <li class="dgrey-text">
                            <strong>Analytical Reporting</strong>. For our data analytics, we use data about our users activities and behaviors to understand their engagement while on our websites or using our services.
                            This includes personal data such as individual users response times to jobs, selection of trades, feature use. This may be shared with 3rd parties in an aggregate form.
                        </li>
                        <li class="dgrey-text">
                            <strong>Display property and tenancy information</strong>. Depending on your level of subscription, we may use and display current and historical property and financial information relating to tenants and landlords on our websites such as rental property information, rental payment history, rental transactions, personal documents, property inspections and other information relating to the property or tenancy.
                        </li>
                    </ol>

                    <h4 class="dgrey-text">How we can share your data</h4>
                    <p class="dgrey-text fs-16">There will be times when we need to share your personal data with third parties for reasons other than the primary use examples above. We will only disclose your personal data to:</p>
                    <ul>
                        <li class="dgrey-text">third party service providers or partners. These are providers who assist in the delivery of our service to you, provide functionality on the website or allows us to market or promote our goods and services to you; or</li>
                        <li class="dgrey-text">regulators, government agencies, courts or other third parties where we have been required to comply with applicable laws or regulations, or to exercise, establish or defend our legal rights. Where possible and appropriate, we will endeavor to notify you of this type of disclosure; or</li>
                        <li class="dgrey-text">a potential or actual buyer (and its agents and advisers) in connection with an actual or proposed purchase, merger or acquisition of any part of our business; or</li>
                        <li class="dgrey-text">any other people with your consent.</li>
                    </ul>

                    <h4 class="dgrey-text">How we store your data:</h4>
                    <p class="dgrey-text fs-16">To protect the security of personal information, data is stored electronically in a security protected database or in secure archiving/storage areas.</p>
                    <p class="dgrey-text fs-16">Electronic records are stored within Virtual Agent’s secure, restricted access computer systems, which is constantly upgraded to ensure security protection. Our servers are located on Azure, a Microsoft product.</p>

                    <p class="dgrey-text fs-16">
                        <i>Likelihood of overseas disclosure:</i><br />
                        Virtual Agent is an Australian based company and whilst possible, it is unlikely that your information will be disclosed to overseas recipients. The location of Azure servers used by Virtual Agent are in Australia. Virtual Agent relies on the terms of service with Azure, of which all data is stored within Australia.
                    </p>

                    <h4 class="dgrey-text">Retention of data</h4>
                    <p class="dgrey-text fs-16">How long we retain your personal information and data depends on what it is and whether we have an ongoing business need to retain it. For example, to provide you with access to our services or to comply with any required laws.</p>
                    <p class="dgrey-text fs-16">When we no longer have an ongoing business need to retain your data we’ll make sure it is deleted or anonymised or, if this is not possible (for example, because it’s been stored in backups), then we'll store it securely as outlined above.</p>

                    <h4 class="dgrey-text">Other information disclosure:</h4>
                    <p class="dgrey-text fs-16">
                        Virtual Agent’s databases are stored centrally on Azure for all clients. Virtual Agent collects all ‘usage data’ of its products and this data may be kept, used and stored as Virtual Agent sees fit including for marketing purposes.
                    </p>
                    <p class="dgrey-text fs-16">
                        In the event you wish to disconnect from a Virtual Agent product, the history notes, work orders and job invoices can be made available by Virtual Agent. This information will be provided in a suitable format and delivery method as determined by Virtual Agent.
                    </p>

                    <h4 class="dgrey-text">Your rights</h4>
                    <p class="dgrey-text fs-16">
                        It’s your personal data and you have certain rights relating to it. When it comes to marketing communications, you can ask us not to send you these at any time. Please follow the unsubscribe link on the email or marketing communication, or you can send your request to <a href="mailto:privacy@virtualagent.com.au">privacy@virtualagent.com.au</a>.
                    </p>
                    <p class="dgrey-text fs-16">
                        You also have rights to:
                    </p>
                    <ul>
                        <li class="dgrey-text">know what personal data we hold about you, and to make sure it’s correct and up to date; or</li>
                        <li class="dgrey-text">request a copy of your personal data, or ask us to restrict processing your personal data or delete it; or</li>
                        <li class="dgrey-text">object to our continued processing of your personal data.</li>
                    </ul>
                    <p class="dgrey-text fs-16">You can exercise these rights at any time by sending an email to <a href="mailto:privacy@virtualagent.com.au">privacy@virtualagent.com.au</a>.</p>

                    <h4 class="dgrey-text">If you have a query or complaint:</h4>
                    <p class="dgrey-text fs-16">
                        Employees of Virtual Agent are aware of their privacy obligations to you and must comply with clear privacy guidelines when dealing with your personal information. Any inappropriate dealings with your personal information will be seen as a serious matter and dealt with accordingly.
                    </p>
                    <p class="dgrey-text fs-16">Should you have a query, or wish to provide feedback about privacy matters, or wish to make a privacy- related complaint, please contact our Privacy Officer by emailing <a href="mailto:privacy@virtualagent.com.au">privacy@virtualagent.com.au</a> or calling 0412 024 210.</p>

                    <h4 class="dgrey-text">Privacy Changes:</h4>
                    <p class="dgrey-text fs-16">
                        Virtual Agent will continue to review and update this policy to ensure we are compliant with the Privacy Act 1988 and current real estate practices and procedures. The latest version of this policy will always be available on our website, or you can contact our Privacy Officer to obtain the latest version at any time.
                    </p>
                </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Layout>
    )
}

export default Terms