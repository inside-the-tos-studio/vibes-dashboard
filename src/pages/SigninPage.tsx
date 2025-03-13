import { Button, Card, TextField } from "@mui/material";
import { CardContent } from "@mui/material";
import { useContext, useState } from "react";
import '../styles/signin.scss';
import { AuthContext } from "../context/AuthContext";

export const SigninPage = () => {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async () => {
        login(username, password);
    };

    return (
        <div className="signin-page">
            <Card sx={{ minWidth: 275 }}>
                <CardContent className="signin-container">
                    <h1 className="signin-title">Connexion</h1>
                    <div className="signin-form">
                        <TextField
                            type="text"
                            placeholder="Nom d'utilisateur"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            type="password"
                            placeholder="Mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button variant="contained" color="primary" onClick={handleLogin}>Se connecter</Button>
                </CardContent>
            </Card>
        </div>

    );
};
