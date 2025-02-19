import { useState } from 'react';
import { InputField } from '../../components/atoms/InputField';
import styles from './SignInPage.module.css';
import { Button } from '../../components/atoms/Button';
import { signIn } from '../../api/api';
import { useNavigate } from 'react-router-dom';

export function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async(e: React.FormEvent) => {
        e.preventDefault();
        try {
            const signInDTO = {
                email,
                password
            };
            const response = await signIn(signInDTO.email, signInDTO.password);
            localStorage.setItem('authToken', response.data['jwt-token']);
            navigate('/plants-features');
        } catch (error) {
            console.log(error);
            alert("Falha ao tentar acessar. Verifique suas credenciais")
        }
    }

    return (
        <div className={styles.signInContainer}>
            <h1>Login</h1>

            <form onSubmit={handleSignIn}>
                <InputField 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    classNameLabel={styles.input}
                />

                <InputField 
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Senha"
                    classNameLabel={styles.input}
                    type="password"
                />

                <Button label="Acessar" />
            </form>
            
        </div>
    )
}