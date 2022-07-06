import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAddressCard, faLock, faEnvelope, faMobile, faIdBadge, faEye, faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import InputField from "../../Component/InputField";
import Button from "../../Component/Button";
import Loader from "../../Component/Loader";
import Navbar from "../../Component/Navbar";
import Notification from "../../Component/Notification";
import { doGet, doPut, doDelete } from "../../Utils/fetchWrapper";


const UserDetailsPage = (props) => {

    const navigate = useNavigate();
    const location = useLocation();
    const user_Id = location?.state?.id;
    const [data, setData] = useState({});
    const [viewPassword, setViewPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        doGet(`/users/${user_Id}`).then((res) => {
            setData({
                userNameField: res?.data?.user?.name || '',
                passwordField: res?.data?.user?.password || '',
                userEmpIdField: res?.data?.user?.empId || '',
                userEmailIdField: res?.data?.user?.emailId || '',
                userMobileNoField: res?.data?.user?.mobileNo || '',
            });
            setIsLoading(false);
        }).catch((error) => {
            console.log(error);
            Notification(error?.message || '', 'Error');
            setIsLoading(false);
        })
    }, []);

    console.log(data);
   


    const onChangeData = (event) => {
        let updatedData = { ...data };
        switch (event?.target?.name) {
            case 'rememberMeField':
                updatedData = { ...updatedData, [event.target.name]: event.target.checked };
                break;
            default:
                updatedData = { ...updatedData, [event.target.name]: event.target.value };
                break;
        }
        setData({ ...data, ...updatedData });
    };

    const onClickUpdate = () => {
        const postableData = {
            name: data?.userNameField ?? '',
            password: data?.passwordField ?? '',
            empId: data?.userEmpIdField ?? '',
            emailId: data?.userEmailIdField ?? '',
            mobileNo: data?.userMobileNoField ?? '',

        }
        if (user_Id) {
            doPut(`/users/${user_Id}`, postableData).then((res) => {
                navigate('/home_page');
                Notification(res?.message || '', 'Success');
            }).catch((error) => {
                Notification(error?.message || '', 'Error');
                console.log(error);
            })
        }
    };

    const onDeleteUser = () => {
        if (user_Id) {
            doDelete(`/users/${user_Id}`).then((res) => {
                navigate('/home_page');
                Notification(res?.message || '', 'Success');
            }).catch((error) => {
                console.log(error);
                Notification(error?.message || '', 'Error');
            });
        }
    };

    const onClickBack = () => {
        navigate('/home_page');
    }

    const onToggleViewPassword = () => {
        setViewPassword(!viewPassword);
    }
     

    return <div className="user-details-page-main-container">
        <Navbar title="User Details" />
        <div className="user-details-page-sub-container">
            {isLoading && <Loader />}
            {!isLoading && 
            <div className="user-details-page-details-panel">
                <div>
                    <div className="user-details-page-field-header">Name</div>
                    <InputField
                        classNameContainer="user-details-input-field"
                        className="user-details-input-tag"
                        classNamePrefix="user-details-input-prefix"
                        type="text"
                        placeHolder="Your Name"
                        name="userNameField"
                        value={data?.userNameField ?? ''}
                        onChange={onChangeData}
                        prefix={<FontAwesomeIcon icon={faUser} />}
                        // suffix={<FontAwesomeIcon color="#818181" icon={faAddressCard} />}
                    />
                </div>
                <div>
                    <div className="user-details-page-field-header">Employee ID</div>
                    <InputField
                        classNameContainer="user-details-input-field"
                        className="user-details-input-tag"
                        classNamePrefix="user-details-input-prefix"
                        type="text"
                        placeHolder="Your Emp Id"
                        name="userEmpIdField"
                        value={data?.userEmpIdField ?? ''}
                        onChange={onChangeData}
                        prefix={<FontAwesomeIcon icon={faIdBadge} />}
                        // suffix={<FontAwesomeIcon color="#818181" icon={faAddressCard} />}
                    />
                </div>
                <div>
                    <div className="user-details-page-field-header">Email ID</div>
                    <InputField
                        classNameContainer="user-details-input-field"
                        className="user-details-input-tag"
                        classNamePrefix="user-details-input-prefix"
                        type="email"
                        placeHolder="Your Email Id"
                        name="userEmailIdField"
                        value={data?.userEmailIdField ?? ''}
                        onChange={onChangeData}
                        prefix={<FontAwesomeIcon icon={faEnvelope} />}
                        // suffix={<FontAwesomeIcon color="#818181" icon={faAddressCard} />}
                    />
                </div>
                <div>
                    <div className="user-details-page-field-header">Mobile No</div>
                    <InputField
                        classNameContainer="user-details-input-field"
                        className="user-details-input-tag"
                        classNamePrefix="user-details-input-prefix"
                        type="text"
                        placeHolder="Your Mobile No"
                        name="userMobileNoField"
                        value={data?.userMobileNoField ?? ''}
                        onChange={onChangeData}
                        prefix={<FontAwesomeIcon icon={faMobile} />}
                        // suffix={<FontAwesomeIcon color="#818181" icon={faAddressCard} />}
                    />
                </div>
                <div>
                <div className="user-details-page-field-header">Password</div>
                    <InputField
                        classNameContainer="user-details-input-field"
                        className="user-details-input-tag"
                        classNamePrefix="user-details-input-prefix"
                        classNameSuffix="user-details-input-suffix"
                        type={viewPassword ? "text" : "password"}
                        placeHolder="Password"
                        name="passwordField"
                        onChange={onChangeData}
                        value={data?.passwordField ?? ''}
                        prefix={<FontAwesomeIcon icon={faLock} />}
                        suffix={<FontAwesomeIcon className="user-details-input-view-icon" onClick={onToggleViewPassword} color="#818181" icon={viewPassword ? faEyeLowVision : faEye} />}
                />
                </div>
                <div style={{ flex: '0 1 100%', display: 'flex', justifyContent: 'center' }}>
                    <Button
                        classNameContainer="user-details-btn"
                        className="user-details-btn-tag back-btn"
                        onClick={onClickBack}
                    >
                        Back
                    </Button>
                    <Button
                        classNameContainer="user-details-btn"
                        className="user-details-btn-tag update-btn"
                        onClick={onClickUpdate}
                    >
                        Update
                    </Button>
                    <Button
                        classNameContainer="user-details-btn"
                        className="user-details-btn-tag remove-btn"
                        onClick={onDeleteUser}
                    >
                        Remove
                    </Button>
                </div>
            </div>}
        </div>
    </div>;
};

export default UserDetailsPage;