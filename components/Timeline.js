import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css'

const Timeline = () => {
    return(
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#5abcbd', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #5abcbd' }}
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8"><strong>June 2012</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0'>
            <img src='/gen-suz-bw-thumb.jpg' alt="Suzannah and Genevieve Toop" title="Suzannah and Genevieve Toop" />
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 f-light">Suzannah and Genevieve return to Toop&Toop.</p>
        </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8 text-dgrey"><strong>November 2013</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center'>
           <i className='fal fa-chart-line text-white'></i>
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 text-lgrey f-light">Email traffic analyzed. 80% of Property Management emails were Maintenance related.</p>
        </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8 text-dgrey"><strong>December 2013</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center'>
           <i className='fal fa-lightbulb text-white'></i>
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 text-lgrey f-light">Lightbulb moment!</p>
        </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8"><strong>December 2013</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0'>
            <img src='/marcus-bw-thumb.jpg' alt="Marcus" title="Marcus" />
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 f-light">Marcus joined the FIX project</p>
        </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8 text-dgrey"><strong>January 2014</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center'>
           <i className='fal fa-cog fa-spin text-white'></i>
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 text-lgrey f-light">1st product in building phase</p>
        </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8"><strong>January 2014</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0'>
            <img src='/aaron-bw-thumb.jpg' alt="Aaron" title="Aaron" />
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 f-light">Aaron joined the FIX project</p>
        </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8 text-dgrey"><strong>November 2014</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center'>
           <i className='fal fa-rocket text-white'></i>
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 text-lgrey f-light">Beta launch to Toop&Toop Tenants, Trades & Landlords</p>
        </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8 text-dgrey"><strong>March 2016</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center'>
           <i className='fal fa-trophy-alt text-white'></i>
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 text-lgrey f-light">2016 REIA Australia Innovation of the Year winner</p>
        </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8 text-dgrey"><strong>August 2016</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center'>
           <i className='fal fa-user-check text-white'></i>
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 text-lgrey f-light">Early FIX adopters</p>
        </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8 text-dgrey"><strong>February 2017</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center'>
           <i className='fal fa-rocket text-white'></i>
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 text-lgrey f-light">FIX Official Launch</p>
        </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8 text-dgrey"><strong>March 2017</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center'>
           <i className='fal fa-trophy-alt text-white'></i>
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 text-lgrey f-light">2017 REIA Australia Innovation of the Year winner</p>
        </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8 text-dgrey"><strong>July 2017</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center'>
           <i className='fal fa-building text-white'></i>
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 text-lgrey f-light">Virtual Agent Pty Ltd founded</p>
        </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8 text-dgrey"><strong>July 2017</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center'>
            <img src='/jordan-bw-thumb.jpg' alt="Jordan" title="Jordan" />
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 text-lgrey f-light">Jordan joined the team</p>
        </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8 text-dgrey"><strong>July 2017</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center'>
            <img src='/mittali-bw-thumb.jpg' alt="Mittali" title="Mittali" />
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 text-lgrey f-light">Mittali joined the team</p>
        </div>
    </div>
  </VerticalTimelineElement>  
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8 text-dgrey"><strong>August 2017</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center'>
            <img src='/keith-bw-thumb.jpg' alt="Keith" title="Keith" />
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 text-lgrey f-light">Keith joined the team</p>
        </div>
    </div>
  </VerticalTimelineElement> 
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8 text-dgrey"><strong>March 2018</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center'>
            <i className='fal fa-trophy-alt text-white'></i>
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 text-lgrey f-light">2018 REIA Australia Innovation of the Year winner</p>
        </div>
    </div>
  </VerticalTimelineElement>  
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8 text-dgrey"><strong>March 2018</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center'>
            <img src='/frank-bw-thumb.jpg' alt="Frank" title="Frank" />
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 text-lgrey f-light">Frank joined the team</p>
        </div>
    </div>
  </VerticalTimelineElement> 
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8 text-dgrey"><strong>October 2018</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center'>
            <img src='/jason-bw-thumb.jpg' alt="Jason" title="Jason" />
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 text-lgrey f-light">Jason joined the team</p>
        </div>
    </div>
  </VerticalTimelineElement>  
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#ececec', color: '#fff' }}
  >
    <p className="mt-0 mb-8 text-dgrey"><strong>December 2018</strong></p>
    <div className='d-flex flex-shrink-0 timeline-outer-container align-items-center'>
        <div className='timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center'>
            <img src='/lipu-bw-thumb.jpg' alt="Lipu" title="Lipu" />
        </div>
        <div>
            <p className="vertical-timeline-element-subtitle mt-0 text-lgrey f-light">Lipu joined the team</p>
        </div>
    </div>
  </VerticalTimelineElement>                
</VerticalTimeline>        
    )
}
export default Timeline