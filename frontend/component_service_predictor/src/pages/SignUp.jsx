import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export function SignUp() {
    const [username, setUsername] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            < div className="shadow-2xl mt-20 p-8 rounded-lg bg-gray-800 text-gray-300 w-full max-w-md">
                <div className="text-4xl font-bold text-gray-400 text-center pt-6">Sign Up</div>
                <SubHeading label="Enter your information to create an account" />
                <InputBox 
                    onChange={(e) => setFirstname(e.target.value)} 
                    id="First_name" 
                    inputType="text" 
                    label="First Name" 
                    placeholder="Arghya" 
                    className="text-gray-800"
                />
                <InputBox 
                    onChange={(e) => setLastname(e.target.value)} 
                    id="Last_name" 
                    inputType="text" 
                    label="Last Name" 
                    placeholder="Ghosh" 
                    className="text-gray-800"
                />
                <InputBox 
                    onChange={(e) => setUsername(e.target.value)} 
                    id="Email" 
                    inputType="email" 
                    label="Email" 
                    placeholder="Arghya123@gmail.com" 
                    className="text-gray-800"
                />
                <InputBox 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                    id="Phone_number" 
                    inputType="tel" 
                    label="Phone Number" 
                    placeholder="+1234567890" 
                    className="text-gray-800"
                />
                <InputBox 
                    onChange={(e) => setPassword(e.target.value)} 
                    id="password" 
                    inputType="password" 
                    label="Password" 
                    placeholder="123456" 
                    className="text-gray-800"
                />
                <Button 
                    label="Sign Up" 
                    onClick={async () => {
                        const response = await axios.post("http://localhost:3000/auth/signup", {
                            username,
                            firstName,
                            lastName,
                            phoneNumber,
                            password,
                        });
                        localStorage.setItem("token", response);
                        navigate("/Dashboard?name=" + username);
                    }} 
                    className="bg-blue-500 hover:bg-blue-700 text-white w-full py-2 rounded mt-4"
                />
                {/* <BottomWarning 
                    linkTo="Sign in" 
                    link="/signin" 
                    warningMessage="Already have an account?" 
                    className="text-blue-400 hover:underline"
                /> */}
                <div className=" text-sm py-1 pb-4 flex justify-center text-blue-400">
            <div>Already have an account? </div>
            <Link className="pointer underline pl-1 cursor-pointer" to="/signin">Sign In</Link>
            </div>
                
            </div>
            </div>
    );
}