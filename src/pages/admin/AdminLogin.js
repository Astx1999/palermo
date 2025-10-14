import React, { useState } from 'react';
import { useAuth } from './useAuth';
import { useNavigate } from 'react-router-dom';
import styles from './adminLogin.module.scss';

function AdminLogin() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/admin'); // redirect to admin panel
        } catch (err) {
            setErrorMsg(err.message);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Admin Login</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    className={styles.input}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className={styles.button} type="submit">Login</button>
                {errorMsg && <p className={styles.error}>{errorMsg}</p>}
            </form>
        </div>
    );
}

export default AdminLogin;
