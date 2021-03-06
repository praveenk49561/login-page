import React, { useState, useEffect, useRef }from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import InfoCard from "../../Component/InfoCard";
import Loader from "../../Component/Loader";
import { doGet } from "../../Utils/fetchWrapper";


const ProjectsPanel = () => {
    const [projectList, setProjectList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let abortController = new AbortController();

    useEffect(() => {
        setIsLoading(true);
        doGet('/projects', abortController).then((res) => {
            setProjectList([...res?.data?.projects]);
            setIsLoading(false);
        }).catch((error) => {
            console.log(error);
            setIsLoading(false);
        })

        return () => {
            if (abortController) {
                abortController?.abort();
            }
        }
    }, []);

    return <div className="projects-panel-main-container">
        <div className="projects-panel-dash-header">
            <div><FontAwesomeIcon color="#5473E3" icon={faProjectDiagram} /></div>
            <div>Ongoing Projects</div>
        </div>
        {isLoading && <Loader />}
        {!isLoading && <div className="projects-panel-dash-cards-container">
            {projectList?.map((ep) => <div key={ep?.id}><InfoCard 
                name={ep?.name} 
                subNameOne={ep?.year} 
                subNameTwo={<React.Fragment>
                        <div>{ep?.members}</div>
                        <div>
                            <FontAwesomeIcon icon={faUserFriends} />
                        </div>
                    </React.Fragment>}
                subNameTwoClassName="projects-panel-cards-sub-two"
            /></div>)}
        </div>}
    </div>
};

export default ProjectsPanel;