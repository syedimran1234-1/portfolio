import "../styles/experience.css";

function Experience() {
    return (
        <div className="experienceSection">
            <div className="expTitelCon">
                <h1 className="experienceTitle">Professional Experience</h1>
            </div>
            <div className="experienceCards">
                <div className="experienceCard">
                    <div className="expCardHeader">
                        <h2>Sr. Data Scientist Lead</h2>
                        <span className="expDuration">Present</span>
                    </div>
                    <div className="expCardContent">
                        <ul className="expResponsibilities">
                            <li>Designing and delivering end-to-end data science and AI solutions for business use cases</li>
                            <li>Working on machine learning, generative AI, and analytics-driven decision systems</li>
                            <li>Building NLP-based systems such as Natural Language to SQL, chatbots, and agentic AI workflows</li>
                            <li>Collaborating with stakeholders to translate business problems into scalable AI solutions</li>
                            <li>Leading projects involving data engineering, model development, deployment, and monitoring</li>
                        </ul>
                    </div>
                </div>

                <div className="experienceCard">
                    <div className="expCardHeader">
                        <h2>Data Scientist</h2>
                        <span className="expDuration">August 2015 – June 2018</span>
                    </div>
                    <div className="expCardContent">
                        <ul className="expResponsibilities">
                            <li>Developed predictive models and analytical solutions using structured and unstructured data</li>
                            <li>Implemented data preprocessing, feature engineering, and model evaluation pipelines</li>
                            <li>Worked on real-time and batch data processing systems</li>
                            <li>Supported business teams with actionable insights and dashboards</li>
                        </ul>
                    </div>
                </div>

                <div className="experienceCard">
                    <div className="expCardHeader">
                        <h2>Senior Oracle Database Administrator</h2>
                        <span className="expDuration">January 2012 – July 2015</span>
                    </div>
                    <div className="expCardContent">
                        <ul className="expResponsibilities">
                            <li>Managed large-scale Oracle database environments in production</li>
                            <li>Handled performance tuning, backup & recovery, and high availability configurations</li>
                            <li>Ensured database security, optimization, and 24/7 operational stability</li>
                            <li>Supported mission-critical enterprise applications</li>
                        </ul>
                    </div>
                </div>

                <div className="experienceCard">
                    <div className="expCardHeader">
                        <h2>Oracle Database Administrator</h2>
                        <span className="expDuration">April 2011 – November 2011</span>
                    </div>
                    <div className="expCardContent">
                        <ul className="expResponsibilities">
                            <li>Administered Oracle databases including installation, configuration, and monitoring</li>
                            <li>Performed routine maintenance, patching, and performance optimization</li>
                            <li>Supported development and production environments</li>
                        </ul>
                    </div>
                </div>

                <div className="experienceCard">
                    <div className="expCardHeader">
                        <h2>Oracle DBA Consultant</h2>
                        <span className="expDuration">December 2010 – April 2011</span>
                    </div>
                    <div className="expCardContent">
                        <ul className="expResponsibilities">
                            <li>Provided short-term consulting support for Oracle database administration</li>
                            <li>Assisted in database setup, troubleshooting, and optimization</li>
                            <li>Ensured smooth transition and handover to internal teams</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
