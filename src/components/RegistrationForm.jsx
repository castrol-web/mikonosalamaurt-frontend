import React, { useState, useRef, useEffect } from 'react'
import logo from "../images/logo.png"
//connection between front end and back needs axios
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import html2canvas from 'html2canvas';
import { URL } from '../App';


const RegistrationForm = () => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [parentJob, setParentJob] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [streetName, setStreetName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [childFName, setChildFName] = useState("");
    const [childLName, setChildLName] = useState("");
    const [DOB, setDOB] = useState("");
    const [gender, setGender] = useState("Male");
    const [nationality, setNationality] = useState("Tanzania");
    // checking whether the child has allergies or not
    const [hasAllergies, setHasAllergies] = useState(false);
    const [Allergy, setAllergy] = useState('')


    //checking for logo has loaded
    const [logoLoaded, setLogoLoaded] = useState(false);
    //setting the image to true once the logo has loaded
    useEffect(() => {
        const img = new Image();
        img.src = logo;
        img.onload = () => {
            setLogoLoaded(true);
        };
    }, []);

    const formRef = useRef(null); // Ref to the form element
    //Email validation

    function checkEmail(event) {
        const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        setEmail(event.target.value);
        if (emailRegex.test(email) === false) {
            setError("Please Enter valid Email");
        } else {
            setError('');
            return true;
        }
    }


    function validatePhone(phoneNumber) {
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/im;
        return phoneRegex.test(phoneNumber);
    }
    //handles a change in radio button choices
    function handleRadioChange(event) {
        setHasAllergies(event.target.value === "YES");
    }

    //handles allergy change
    function handleAllergyChange(event) {
        setAllergy(event.target.value);
    }


    function handleFirstName(event) {
        setFirstName(event.target.value);
    }

    function handleLastName(event) {
        setLastName(event.target.value);
    }

    function handleStreetName(event) {
        setStreetName(event.target.value);
    }

    function handleParentJob(event) {
        setParentJob(event.target.value);
    }

    function handlePhoneNumber(event) {
        setPhoneNumber(event.target.value);
    }


    // functions to handle child details 
    function handleChildFName(event) {
        setChildFName(event.target.value);
    }

    function handleChildLName(event) {
        setChildLName(event.target.value);
    }

    function handleDOB(event) {
        setDOB(event.target.value);
    }

    function handleGender(event) {
        setGender(event.target.value);
    }

    function handleNationality(event) {
        setNationality(event.target.value);
    }

    function handleProfileChange(event) {
        setProfilePicture(event.target.files[0]);
        console.log(event.target.files[0]);
    }

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    formData.append("parentJob", parentJob);
    formData.append("streetName", streetName);
    formData.append("childFName", childFName);
    formData.append("childLName", childLName);
    formData.append("gender", gender);
    formData.append("nationality", nationality);
    formData.append("Allergy", Allergy);
    formData.append("profilePicture", profilePicture);
    formData.append("DOB", DOB);
    //submission function on the submit event
    async function submitForm(e) {
        e.preventDefault();
        if (!validatePhone(phoneNumber)) {
            return toast.error("Invalid PhoneNumber format", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        try {
            await axios.post(`${URL}/api/registration`, formData)
                .then(res => {
                    if (res.data ==="exist") {
                        toast.warning("Email already exists please use another email",{
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: false,
                            progress: undefined,
                            theme: "dark",
                        })
                    } else {
                        toast.success("user registered successfully,bring screenshot to our offices", {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: false,
                            progress: undefined,
                            theme: "dark",
                        })
                        //Reset form fields after submission
                        setAllergy("");
                        setChildFName('');
                        setDOB('');
                        setEmail('');
                        setChildLName('');
                        setFirstName('');
                        setLastName('');
                        setParentJob('');
                        setPhoneNumber('');
                        setStreetName('');
                        setNationality('Tanzania');
                        setProfilePicture(null);
                        // Take a snapshot of the submitted form
                        takeScreenshot();
                    }
                })
        } 
        catch (err) {
            toast.error(`${err},failed to submit`);
        }
    }

    // Function to take a snapshot of the submitted form
    const takeScreenshot = () => {
        if (!logoLoaded) {
            toast.error("Logo is loading.A moment before trying again.");
        }
        html2canvas(formRef.current).then((canvas) => {
            // `canvas` contains the screenshot of the form
            //downloading the image as a PNG file:
            const imageURL = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imageURL;
            link.download = 'submitted_form.png';
            link.click();
        });
    };
    return (
        <>
            <div className='container registration_container'>
                <div className='form__wrapper' ref={formRef}>
                    <form action={`${URL}/api/registration`} method="post" encType="multipart/form-data" onSubmit={submitForm}>
                        {/* form heading with the logo */}
                        <div className='form__heading-container'>
                            <div className='form-header'>
                                <img src={logo} alt='mikono salama logo' className='Reg_logo'></img>
                                <h3>Joining Form</h3>
                            </div>
                        </div>
                        {/* parents info */}
                        <div className='parent__info'>
                            <div className='parents_heading'><h5>Either of the parent's information</h5></div>
                            <div className='row g-2 mb-3'>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text" onChange={handleFirstName} className="form-control" id="firstName" placeholder="firstName" value={firstName} required></input>
                                        <label htmlFor="firstName">First Name</label>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="lastName" placeholder="lastName" onChange={handleLastName} value={lastName} required></input>
                                        <label htmlFor="lastName">Last Name</label>
                                    </div>

                                </div>
                            </div>
                            <div className="row g-2">
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="EmailAddress" placeholder="Enter Email" value={email} required onChange={checkEmail}></input>
                                        <label htmlFor="EmailAddress">Enter Email</label>
                                        <p className='text-danger p-2'>{error}</p>
                                    </div>

                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="tel" onChange={handlePhoneNumber} className="form-control" id="phoneNumber" placeholder="Enter phone number" name='phonenumber' value={phoneNumber} required></input>
                                        <label htmlFor="phoneNumber">Phone Number</label>
                                    </div>

                                </div>

                                <div className='row g-2'>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="text" onChange={handleParentJob} className="form-control" id="parentJob" placeholder="Enter Ocupation" name='parentJob' value={parentJob} required></input>
                                            <label htmlFor="parentJob">Parent's Job</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" onChange={handleStreetName} id="lastName" placeholder="Enter street name" name="streetName" required value={streetName}></input>
                                            <label htmlFor="lastName">Street Name</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* child's details */}
                        <div className='child__details'>
                            <div className='childs-heading'><h5>Child's Details</h5></div>
                            <div className="row g-2 mb-3">
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text" onChange={handleChildFName} className="form-control" id="EmailAddress" placeholder="firstChildName" value={childFName} required></input>
                                        <label htmlFor="firstChildName">First name</label>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text" onChange={handleChildLName} className="form-control" id="phoneNumber" placeholder="lastChildName" value={childLName} required></input>
                                        <label htmlFor="lastChildName">Last name</label>
                                    </div>
                                </div>
                            </div>


                            <div className="row g-2">
                                <div className="col-md">
                                    <div className="form-floating">
                                        <select className="form-select" onChange={handleGender} id="genderSelection" aria-label="Gender selected label" value={gender} required>
                                            <option defaultValue="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        <label htmlFor="genderSelection">Gender selected</label>
                                    </div>
                                </div>

                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="date" onChange={handleDOB} className="form-control" id="Birthday" placeholder="Birthday" value={DOB} required></input>
                                        <label htmlFor="Birthday">Birthday</label>
                                    </div>
                                </div>

                                <div className="col-md">
                                    <div className="form-floating">
                                        <select className="form-select" onChange={handleNationality} id="nationality" aria-label="nationality selected label" value={nationality}>
                                            <option defaultValue="tanzania">Tanzania</option>
                                            <option value="kenya">Kenya</option>
                                            <option value="uganda">Uganda</option>
                                            <option value="Rwanda">Rwanda</option>
                                            <option value="Burundi">Burundi</option>
                                            <option value="Sudan">Sudan</option>
                                            <option value="Malawi">Malawi</option>
                                            <option value="Ethiopia">Ethiopia</option>
                                            <option value="United States">United States</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <label htmlFor="nationality">Nationality</label>
                                    </div>
                                </div>

                                <div className="form-check">
                                    <h6>Any allergies?</h6>
                                    <input className="form-check-input" type="radio" name="alergies" id="allergyOptions" value="YES" onChange={handleRadioChange} checked={hasAllergies}></input>
                                    <label className="form-check-label" htmlFor="allergyOptions">
                                        YES
                                    </label>
                                </div>
                                <div className="form-check">
                                    {/* if the below is checked means the child has no allergie */}
                                    <input className="form-check-input" type="radio" name="alergies" value="NO" checked={!hasAllergies} onChange={handleRadioChange}></input>
                                    <label className="form-check-label" htmlFor="allergyOptions">
                                        NO
                                    </label>
                                </div>


                                {hasAllergies && (

                                    <div className="mb-3">
                                        <label htmlFor="allergyTextArea" className="form-label">If Yes,specify</label>
                                        <textarea className="form-control" id="allergyTextArea" rows="3" value={Allergy} onChange={handleAllergyChange}></textarea>
                                    </div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="profilePicture" className="form-label">Upload child profile picture</label>
                                <input className="form-control form-control-sm" id="profilePicture" type="file" onChange={handleProfileChange} name="profilePicture"></input>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                                <label className="form-check-label" htmlFor="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Submit Form</button>
                        </div>
                    </form>

                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default RegistrationForm;