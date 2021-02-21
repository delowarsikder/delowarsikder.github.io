import React from 'react';
import responsibility from '../info/responsibility.json';

const Responsibility = () => {
    return (
        <div>
            <section class="template-experience" data-section="responsibility">
				<div class="template-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							
							<h2 class="template-heading animate-box">RESPONSIBILITIES</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
				         <div class="timeline-centered">
                             {responsibility["Responsibilities"].map((item, index) => {
                                 return (
                                    <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					                    <div class="timeline-entry-inner">

					                       <div className={`timeline-icon color-${index + 1}`}>
					                          <i class="icon-pen2"></i>
					                       </div>

					                       <div class="timeline-label">
					                          <h2>
                                                <div style={{"marginBottom": "5px"}}><b>{item.Position}</b> at <a href={item["Comapny URL"]} target="_blank" rel="noopener noreferrer">{item["Organization Name"]}</a></div>
                                                <div><span>{`(${item.Timeline.Start} - ${item.Timeline.End})`}</span></div>
                                              </h2>
                                              {item["Key Responsibilities"].map(entry => {
                                                  return (
                                                    <li className="responsibility" dangerouslySetInnerHTML={{__html:entry}}></li>
                                                  );
                                              })}
					                       </div>
					                    </div>
					                </article>
                                 )
                             })}
					         <article class="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
					            <div class="timeline-entry-inner">
					               <div class="timeline-icon color-none">
					               </div>
					            </div>
					         </article>
					      </div>
					   </div>
				   </div>
				</div>
			</section>
        </div>
    );
};

export default Responsibility;