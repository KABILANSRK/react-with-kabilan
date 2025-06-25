import '../styles/Intro.css'

import { useState } from "react";

const Intro = () => {

    const [finishedTopics, setFinishedTopics] = useState({
        jsx: false,
        components: false,
        UseState: false,
        eventHandling: false,
        rendering: false,
        conditionalRendering: false,
        listRendering: false,
        forms: false,
    });

    return (
        <>
            <div className="heading">
                REACT WITH &nbsp; <span className="head-span">KABILANSRK</span>
            </div>
            <div className="body-whitebg">
                <div className="body-blackbg">
                    <h2>INTERACTIVE LEARNING PLATFORM WITH HANDS-ON <br />EXERCISES.</h2>
                </div>
            </div>
            <div className="footer-whitebg">
                <div className="topics-blackbg">
                    <h2>TOPICS</h2>
                    <div className="topic-blackbg">
                        <h4>INTRO TO JSX</h4>
                        <input 
                            type="checkbox" 
                            checked={finishedTopics.jsx}
                            onChange={() => 
                                setFinishedTopics({ ...finishedTopics, jsx: !finishedTopics.jsx })}
                        />
                    </div>
                    <div className="topics-whitebg">
                        <h4>COMPONENTS</h4>
                        <input 
                            type="checkbox" 
                            checked={finishedTopics.jsx}
                            onChange={() => 
                                setFinishedTopics({ ...finishedTopics, jsx: !finishedTopics.components })}
                        />                    </div>
                    <div className="topic-blackbg">
                        <h4>USESTATE</h4>
                        <input 
                            type="checkbox" 
                            checked={finishedTopics.jsx}
                            onChange={() => 
                                setFinishedTopics({ ...finishedTopics, jsx: !finishedTopics.UseState })}
                        />                    </div>
                    <div className="topics-whitebg">
                        <h4>EVENT HANDLING</h4>
                        <input 
                            type="checkbox" 
                            checked={finishedTopics.jsx}
                            onChange={() => 
                                setFinishedTopics({ ...finishedTopics, jsx: !finishedTopics.eventHandling })}
                        />                    </div>
                    <div className="topics-whitebg">
                        <h4>RENDERING</h4>
                        <input 
                            type="checkbox" 
                            checked={finishedTopics.jsx}
                            onChange={() => 
                                setFinishedTopics({ ...finishedTopics, jsx: !finishedTopics.rendering })}
                        />                    </div>
                    <div className="topic-blackbg">
                        <h4>CONDITIONAL RENDERING</h4>
                        <input 
                            type="checkbox" 
                            checked={finishedTopics.jsx}
                            onChange={() => 
                                setFinishedTopics({ ...finishedTopics, jsx: !finishedTopics.conditionalRendering })}
                        />                    </div>
                    <div className="topics-whitebg">
                        <h4>LIST RENDERING</h4>
                        <input 
                            type="checkbox" 
                            checked={finishedTopics.jsx}
                            onChange={() => 
                                setFinishedTopics({ ...finishedTopics, jsx: !finishedTopics.listRendering })}
                        />                    </div>
                    <div className="topic-blackbg">
                        <h4>FORMS</h4>
                        <input 
                            type="checkbox" 
                            checked={finishedTopics.jsx}
                            onChange={() => 
                                setFinishedTopics({ ...finishedTopics, jsx: !finishedTopics.forms })}
                        />
                    </div>
                </div>
                <div className="features-blackbg">
                    <div className="features-blackbg">
                        <h4>REAL TIME EXAMPLES</h4>
                    </div>
                    <div className="features-whitebg">
                        <h4>STRUCTURED CURRICULUM</h4>
                    </div>
                    <div className="features-blackbg">
                        <h4>CHALLANGES & MORE</h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Intro;