import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar";
import InfoCard from "../../Component/InfoCard";
import { doGet } from "../../Utils/fetchWrapper";

const HomePage = () => {
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
    }, [])
    return <div className="home-page-main-container">
        <Navbar title="Home" />
        <div className="home-page-sub-container">
            {isLoading && <div className="loading">Loading ...</div>}
            {!isLoading && projectList?.length > 0 && <React.Fragment>
                <div className="home-page-dash-header">Ongoing Projects</div>
                <div className="home-page-dash-cards-container">
                    {projectList?.map((ep) => <InfoCard key={ep?.name} name={ep?.name} year={ep?.name} members={ep?.members} />)}
                </div>
            </React.Fragment>}
        </div>
    </div>;
};

export default HomePage;
