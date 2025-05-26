import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';

export default function AuthPages() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!isLogin) {
            if (!formData.firstName) {
                newErrors.firstName = 'First name is required';
            }
            if (!formData.lastName) {
                newErrors.lastName = 'Last name is required';
            }
            if (!formData.phone) {
                newErrors.phone = 'Phone number is required';
            }
            if (!formData.confirmPassword) {
                newErrors.confirmPassword = 'Please confirm your password';
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(isLogin ? 'Login successful' : 'Registration successful', formData);
            alert(isLogin ? 'Login successful!' : 'Registration successful!');
        }
    };

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
        setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            phone: ''
        });
        setErrors({});
    };

    const styles = {
        container: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #00d4ff 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        },
        wrapper: {
            position: 'relative'
        },
        decoration1: {
            position: 'absolute',
            top: '-40px',
            left: '-40px',
            width: '300px',
            height: '300px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'pulse 4s ease-in-out infinite'
        },
        decoration2: {
            position: 'absolute',
            bottom: '-40px',
            right: '-40px',
            width: '300px',
            height: '300px',
            background: 'rgba(255, 192, 203, 0.2)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'pulse 4s ease-in-out infinite',
            animationDelay: '1s'
        },
        authCard: {
            position: 'relative',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '24px',
            padding: '40px',
            width: '100%',
            maxWidth: '450px',
            boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1)',
            zIndex: 1
        },
        toggleContainer: {
            display: 'flex',
            marginBottom: '32px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '4px'
        },
        toggleButton: {
            flex: 1,
            padding: '12px 24px',
            borderRadius: '12px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px'
        },
        toggleButtonActive: {
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        },
        toggleButtonInactive: {
            background: 'transparent',
            color: 'rgba(255, 255, 255, 0.7)'
        },
        header: {
            textAlign: 'center',
            marginBottom: '32px'
        },
        title: {
            fontSize: '32px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '8px'
        },
        subtitle: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '16px'
        },
        formContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
        },
        nameRow: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px'
        },
        inputGroup: {
            position: 'relative'
        },
        inputIcon: {
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'rgba(255, 255, 255, 0.5)',
            width: '20px',
            height: '20px'
        },
        input: {
            width: '100%',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            padding: '12px 12px 12px 44px',
            color: 'white',
            fontSize: '16px',
            outline: 'none',
            transition: 'all 0.3s ease',
            boxSizing: 'border-box'
        },
        inputWithEye: {
            paddingRight: '48px'
        },
        eyeButton: {
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.5)',
            cursor: 'pointer',
            transition: 'color 0.2s ease'
        },
        error: {
            color: '#ff9999',
            fontSize: '14px',
            marginTop: '4px'
        },
        forgotPassword: {
            textAlign: 'right'
        },
        forgotLink: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '14px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'color 0.2s ease'
        },
        submitButton: {
            width: '100%',
            background: 'linear-gradient(135deg, #e91e63, #9c27b0)',
            color: 'white',
            fontWeight: 'bold',
            padding: '16px 24px',
            borderRadius: '12px',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: 'scale(1)'
        },
        toggleText: {
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.7)'
        },
        toggleLink: {
            color: 'white',
            fontWeight: '600',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'underline',
            transition: 'all 0.2s ease'
        },
        divider: {
            marginTop: '32px'
        },
        dividerLine: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
        },
        dividerBorder: {
            flex: 1,
            height: '1px',
            background: 'rgba(255, 255, 255, 0.2)'
        },
        dividerText: {
            padding: '0 16px',
            background: 'transparent',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '14px'
        },
        socialButtons: {
            marginTop: '24px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px'
        },
        socialButton: {
            width: '100%',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            padding: '12px 16px',
            color: 'white',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
        }
    };

    return (
        <div style={styles.container}>
            <style>
                {`
          @keyframes pulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
          }
          
          input::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
          
          input:focus {
            border-color: rgba(255, 255, 255, 0.4);
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
          }
          
          button:hover {
            transform: scale(1.02);
          }
          
          .submit-button:hover {
            background: linear-gradient(135deg, #f06292, #ab47bc);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          }
          
          .social-button:hover {
            background: rgba(255, 255, 255, 0.2);
          }
          
          .forgot-link:hover {
            color: white;
          }
          
          .toggle-button:hover {
            color: white;
          }
          
          .eye-button:hover {
            color: white;
          }
        `}
            </style>

            <div style={styles.wrapper}>
                <div style={styles.decoration1}></div>
                <div style={styles.decoration2}></div>

                <div style={styles.authCard}>
                    {/* Toggle buttons */}
                    <div style={styles.toggleContainer}>
                        <button
                            onClick={() => setIsLogin(true)}
                            style={{
                                ...styles.toggleButton,
                                ...(isLogin ? styles.toggleButtonActive : styles.toggleButtonInactive)
                            }}
                            className="toggle-button"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            style={{
                                ...styles.toggleButton,
                                ...(isLogin ? styles.toggleButtonInactive : styles.toggleButtonActive)
                            }}
                            className="toggle-button"
                        >
                            Register
                        </button>
                    </div>

                    {/* Header */}
                    <div style={styles.header}>
                        <h2 style={styles.title}>
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h2>
                        <p style={styles.subtitle}>
                            {isLogin ? 'Sign in to your account' : 'Join us today'}
                        </p>
                    </div>

                    {/* Form */}
                    <div style={styles.formContainer}>
                        {/* Registration fields */}
                        {!isLogin && (
                            <>
                                <div style={styles.nameRow}>
                                    <div>
                                        <div style={styles.inputGroup}>
                                            <User style={styles.inputIcon} />
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                style={styles.input}
                                            />
                                        </div>
                                        {errors.firstName && <p style={styles.error}>{errors.firstName}</p>}
                                    </div>
                                    <div>
                                        <div style={styles.inputGroup}>
                                            <User style={styles.inputIcon} />
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                style={styles.input}
                                            />
                                        </div>
                                        {errors.lastName && <p style={styles.error}>{errors.lastName}</p>}
                                    </div>
                                </div>

                                <div>
                                    <div style={styles.inputGroup}>
                                        <Phone style={styles.inputIcon} />
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            style={styles.input}
                                        />
                                    </div>
                                    {errors.phone && <p style={styles.error}>{errors.phone}</p>}
                                </div>
                            </>
                        )}

                        {/* Email field */}
                        <div>
                            <div style={styles.inputGroup}>
                                <Mail style={styles.inputIcon} />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    style={styles.input}
                                />
                            </div>
                            {errors.email && <p style={styles.error}>{errors.email}</p>}
                        </div>

                        {/* Password field */}
                        <div>
                            <div style={styles.inputGroup}>
                                <Lock style={styles.inputIcon} />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    style={{ ...styles.input, ...styles.inputWithEye }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={styles.eyeButton}
                                    className="eye-button"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            {errors.password && <p style={styles.error}>{errors.password}</p>}
                        </div>

                        {/* Confirm password field */}
                        {!isLogin && (
                            <div>
                                <div style={styles.inputGroup}>
                                    <Lock style={styles.inputIcon} />
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        style={{ ...styles.input, ...styles.inputWithEye }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        style={styles.eyeButton}
                                        className="eye-button"
                                    >
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                                {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}
                            </div>
                        )}

                        {/* Forgot password */}
                        {isLogin && (
                            <div style={styles.forgotPassword}>
                                <button
                                    type="button"
                                    style={styles.forgotLink}
                                    className="forgot-link"
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                        {/* Submit button */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            style={styles.submitButton}
                            className="submit-button"
                        >
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </button>

                        {/* Toggle auth mode */}
                        <div style={styles.toggleText}>
                            <p>
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <button
                                    type="button"
                                    onClick={toggleAuthMode}
                                    style={styles.toggleLink}
                                >
                                    {isLogin ? 'Sign up' : 'Sign in'}
                                </button>
                            </p>
                        </div>
                    </div>

                    {/* Social login */}
                    <div style={styles.divider}>
                        <div style={styles.dividerLine}>
                            <div style={styles.dividerBorder}></div>
                            <span style={styles.dividerText}>Or continue with</span>
                            <div style={styles.dividerBorder}></div>
                        </div>

                        <div style={styles.socialButtons}>
                            <button style={styles.socialButton} className="social-button">
                                <svg width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                <span>Google</span>
                            </button>
                            <button style={styles.socialButton} className="social-button">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                <span>Facebook</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}