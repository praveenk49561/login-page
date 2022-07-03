import React, { useState, useEffect }from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import InfoCard from "../../Component/InfoCard";
import Loader from "../../Component/Loader";
import { doGet } from "../../Utils/fetchWrapper";


const ProjectsPanel = () => {
    const [projectList, setProjectList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        doGet('/projects').then((res) => {
            setProjectList([...res?.data?.projects]);
            setIsLoading(false);
        }).catch((error) => {
            console.log(error);
            setIsLoading(false);
        })
    }, []);

    return <div className="projects-panel-main-container">
        <div className="projects-panel-dash-header">Ongoing Projects</div>
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