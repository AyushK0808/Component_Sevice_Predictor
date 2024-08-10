
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";




export function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="shadow-2xl p-8 rounded-lg bg-gray-800 text-white w-full max-w-md">

                <div className="text-4xl font-bold text-gray-400 text-center pt-6">Sign In</div>

                <SubHeading label="Enter your credentials to access your account" />
                <InputBox 
                    onChange={(e) => setUsername(e.target.value)} 
                    id="Email" 
                    inputType="email" 
                    label="Email" 
                    placeholder="Arghya123@gmail.com" 
                    className="text-black"
                />
                <InputBox 
                    onChange={(e) => setPassword(e.target.value)} 
                    id="password" 
                    inputType="password" 
                    label="Password" 
                    placeholder="123456" 
                    className="text-black"
                />
                <Button 
                    onClick={async () => {

                        const response = await axios.post("http://localhost:3000/auth/login", {

                            username,
                            password,
                        });


                        localStorage.setItem("token", response);
                        navigate("/Dashboard?name=" + username);

                    }} 
                    label="Sign In" 
                    className="bg-blue-500 hover:bg-blue-700 text-white w-full py-2 rounded mt-4"
                />
                <div className=" text-sm py-1 pb-4 flex justify-center text-blue-400">
            <div>Don't have an account?</div>
            <Link className="pointer underline pl-1 cursor-pointer" to="/signup">Sign Up</Link>
            
        </div>
            </div>
        </div>
    );

}
