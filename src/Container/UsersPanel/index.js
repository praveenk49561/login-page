import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import InfoCard from '../../Component/InfoCard';
import Loader from '../../Component/Loader';
import { doGet } from '../../Utils/fetchWrapper';
import { useRef } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const UsersPanel = () => {

    const navigate = useNavigate();
    const [usersList, setUsersList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let abortController = new AbortController();

    useEffect(() => {
        setIsLoading(true);
        doGet('/users/', abortController).then((res) => {
            setUsersList([...res?.data?.users]);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setIsLoading(false);
        })

        return () => {
            if (abortController) {
                abortController?.abort();
            }
        }
    }, []);

    const onEditUser = (id) => {
        if (id) {
            navigate(`/user_details/${id}`, {
                state: { id },
            });
        };
    }

    return <div className="users-panel-main-container">
        <div className="users-panel-dash-header">
            <div><FontAwesomeIcon color='#5473E3' icon={faUser} /></div>
            <div>Users</div>
        </div>
        {isLoading && <Loader />}
        {!isLoading && <div className="users-panel-dash-cards-container">
            {usersList?.map((eu) => <div key={eu?._id}><InfoCard
                name={eu?.name} 
                subNameOne={<div>
                    <div>{eu?.empId}</div>
                    <div>{eu?.emailId}</div>
                    <div>{eu?.mobileNo}</div>
                </div>} 
                subNameTwo={<div onClick={() => { onEditUser(eu?._id); }}>
                    <FontAwesomeIcon icon={faEdit} />
                </div>}
            /></div>)}
        </div>}
    </div>
};

export default UsersPanel;