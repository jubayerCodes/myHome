import { Box, Divider, Modal } from '@mui/material';
import { FaTimes } from 'react-icons/fa';
import './Login.css'
import loginBg from '../../../assets/images/couple.jpg'
import { useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../Utilities/Redux/features/modalSlice/modalSlice';

const Login = () => {
    const open = useSelector((state) => state.modal.open)

    const dispatch = useDispatch()

    const [register, setRegister] = useState(false)

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
                            <h4 className={`text-2xl text-center ${register ? 'hidden' : ''}`}>Sign into your account</h4>
                            <h4 className={`text-2xl text-center ${register ? '' : 'hidden'}`}>Create an account</h4>
                            <div className='px-5 xl:px-10 mt-10'>
                                <div className={` w-full ${register ? 'hidden' : ''}`}>
                                    <form className={`flex-col items-stretch justify-between`}>
                                        <input placeholder='Email' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="email" name="email" id="email-field" />
                                        <input placeholder='Password' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="password" name="password" id="password-field" />
                                        <input type="submit" value="Login" className='cursor-pointer w-full mb-5 primary-btn' style={{ width: '100%' }} />
                                    </form>
                                    <Divider>OR</Divider>
                                    <SocialLogin className={'mt-4'} />
                                </div>
                                <div className={`${register ? '' : 'hidden'}`}>
                                    <form className={`flex-col items-stretch justify-between `}>
                                        <input placeholder='Username' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="text" name="username" id="username-field" />
                                        <input placeholder='Email' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="email" name="email" id="email-field" />
                                        <input placeholder='Password' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="password" name="password" id="password-field" />
                                        <input placeholder='Retype Password' className='w-full mb-5 border focus:outline-none p-2 text-sm' type="password" name="confirm-password" id="confirm-password-field" />
                                        <select placeholder="Select User Type" className='w-full mb-5 border focus:outline-none p-2 text-sm capitalize' name="user-type" id="user-type-field">
                                            <option value="">Select User Type</option>
                                            <option value="user">user</option>
                                            <option value="agent">agent</option>
                                            <option value="agency">agency</option>
                                            <option value="developer">developer</option>
                                        </select>
                                        <input type="submit" value="Register" className='cursor-pointer w-full mb-5 primary-btn' style={{ width: '100%' }} />
                                    </form>
                                    <Divider>OR</Divider>
                                </div>
                                <div className='flex justify-between items-center mt-5'>
                                    <button onClick={() => setRegister(true)} className={`cursor-pointer transition hover:text-[var(--btn-bg)] ${register ? 'hidden' : ''}`}>Register here!</button>
                                    <button onClick={() => setRegister(false)} className={`cursor-pointer transition hover:text-[var(--btn-bg)] ${register ? '' : 'hidden'}`}>Back to login</button>
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