import { Box, Divider, Modal } from '@mui/material';
import { FaTimes } from 'react-icons/fa';
import './Login.css'
import loginBg from '../../../assets/images/couple.jpg'
import { useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../Utilities/Redux/features/modalSlice/modalSlice';
import { useForm } from 'react-hook-form';
import { loginWithEmailAndPassword, registerWithEmailAndPassword } from '../../../Utilities/Redux/features/authSlice/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm()

    const password = watch("password", "");



    const { register: registerLogin, handleSubmit: handleSubmitLogin, formState: { errors: errorsLogin }, reset: resetLogin, watch: watchLogin } = useForm()

    const open = useSelector((state) => state.modal.open)

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [isRegister, setIsRegister] = useState(false)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: 650,
        bgcolor: 'background.paper',
        boxShadow: 24,
        outline: 'none'
    };

    const imgStyle = {
        backgroundImage: `url(${loginBg})`,
    }

    const handleRegister = (data) => {
        const { firstName, lastName, email, password, role } = data

        const user = {
            firstName,
            lastName,
            email,
            password,
            role,
        }

        dispatch(registerWithEmailAndPassword(user))
            .then(() => {
                navigate("/dashboard");
            });

        reset()
    }

    const handleLogin = (data) => {
        const userCredentials = { ...data }

        dispatch(loginWithEmailAndPassword(userCredentials))
            .then(() => {
                navigate("/dashboard");
            });

        resetLogin()
    }

    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='w-[90%] xl:w-[750px]' borderRadius={2} boxSizing={'border-box'}>
                    <div className='flex justify-stretch items-stretch'>
                        <div className='flex-1 h-[650px] hidden xl:block bg-center rounded-s-md' style={imgStyle}>
                            <div className='flex items-end bg-gradient-to-t from-[#00000067] to-transparent to-40% w-full h-full'>
                                <h2 className='text-white text-3xl ml-10 mb-10'>Welcome to Your Real <br /> Estate Website</h2>
                            </div>
                        </div>
                        <button onClick={() => dispatch(closeModal())} className='text-[16px] absolute top-5 right-5 xl:top-10 xl:right-10 cursor-pointer z-50'>
                            <FaTimes />
                        </button>
                        <div className='flex-1 relative flex flex-col justify-center h-[550px] xl:h-[650px]'>
                            <h4 className={`text-2xl text-center ${isRegister ? 'hidden' : ''}`}>Sign into your account</h4>
                            <h4 className={`text-2xl text-center ${isRegister ? '' : 'hidden'}`}>Create an account</h4>
                            <div className='px-5 xl:px-10 mt-10'>
                                <div className={` w-full ${isRegister ? 'hidden' : ''}`}>
                                    <form onSubmit={handleSubmitLogin(handleLogin)} className={`flex-col items-stretch justify-between`}>
                                        <input {...registerLogin('email', { required: true })} placeholder='Email' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="email" name="email" id="login-email-field" required />
                                        <input {...registerLogin('password', { required: true })} placeholder='Password' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="password" name="password" id="login-password-field" required />
                                        <input type="submit" value="Login" className='cursor-pointer w-full mb-5 primary-btn' style={{ width: '100%' }} />
                                    </form>
                                    <Divider className='text-sm'>OR</Divider>
                                    <SocialLogin className={'mt-4'} />
                                </div>
                                <div className={`${isRegister ? '' : 'hidden'}`}>
                                    <form onSubmit={handleSubmit(handleRegister)} className={`flex-col items-stretch justify-between `}>
                                        <input required {...register('firstName', { required: true })} placeholder='First Name' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="text" name="firstName" id="firstName-field" />

                                        <input required {...register('lastName', { required: true })} placeholder='Last Name' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="text" name="lastName" id="lastName-field" />

                                        <input required {...register('email', { required: true })} placeholder='Email' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="email" name="email" id="register-email-field" />
                                        <input required {...register('password', {
                                            required: true,
                                            minLength: {
                                                value: 8,
                                                message: "Password must be at least 8 characters"
                                            }
                                        })} placeholder='Password' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="password" name="password" id="register-password-field" />

                                        {errors.password && <span className='form-warning'>{errors.password.message}</span>}

                                        <input required {...register('confirmPassword', {
                                            validate: value =>
                                                value === password || "Passwords do not match"
                                        })} placeholder='Retype Password' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="password" name="confirmPassword" id="confirm-password-field" />

                                        {errors.confirmPassword && <span className='form-warning'>{errors.confirmPassword.message}</span>}

                                        <select required {...register('role', { required: true })} placeholder="Select Role" className='w-full mb-5 border focus:outline-none p-2 text-sm capitalize' name="role" id="role-field">
                                            <option value="">Select Role</option>
                                            <option value="user">user</option>
                                            <option value="agent">agent</option>
                                            <option value="agency">agency</option>
                                            <option value="developer">developer</option>
                                        </select>
                                        <input type="submit" value="Register" className='cursor-pointer w-full mb-5 primary-btn' style={{ width: '100%' }} />
                                    </form>
                                    <Divider className='text-sm'>OR</Divider>
                                </div>
                                <div className='flex justify-between items-center mt-5'>
                                    <button onClick={() => setIsRegister(true)} className={`cursor-pointer transition hover:text-[var(--btn-bg)] ${isRegister ? 'hidden' : ''}`}>Register here!</button>
                                    <button onClick={() => setIsRegister(false)} className={`cursor-pointer transition hover:text-[var(--btn-bg)] ${isRegister ? '' : 'hidden'}`}>Back to login</button>
                                    <button className='cursor-pointer transition hover:text-[var(--btn-bg)]'>Forgot Password?</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default Login;