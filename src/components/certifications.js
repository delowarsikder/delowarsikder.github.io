import React from 'react';
import certifications from '../info/certifications.json';

const Certifications = () => {
    return (
        <div>
        <section className="template-achievements" data-section="certifications">
        <div className="template-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    {/*<span className="heading-meta">certifications</span>*/}
                    <h2 className="template-heading">Courses &amp; Certifications</h2>
                    {certifications.Certifications.map(item => {
                        return (
                            <div>
                                <li className="awards" dangerouslySetInnerHTML={{__html: item.Description}}></li>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    {item.images.map(img => {
                                        return (
                                            <img alt="awards" style={{height: 'auto', width: '100%', minWidth:'200px', maxWidth: '400px', marginLeft: '10px', marginRight: '10px', marginBottom: '20px'}} src={`${process.env.PUBLIC_URL}/images/certifications/${img}`}/>
                                        )
                                    })}
                                </div>
                                
                            </div>
                            
                        )
                    })}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    );
};

export default Certifications;