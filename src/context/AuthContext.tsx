import { createContext, useState } from 'react';
import profile from '../my-profile.json';

interface User {
    username: string;
    password: string;
}

interface AuthContextType {
    user: User;
    isAuthenticated: boolean;
    login: (username: string, password: string) => void;
}

export interface Auth {
    user: {
        username: string;
        password: string;
    }
    isAuthenticated: boolean;
}


const Context: AuthContextType = {
    user: {
        username: '',
        password: '',
    },
    isAuthenticated: false,
    login: () => { },
}

const AuthContext = createContext<AuthContextType>(Context);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User>({
        username: '',
        password: '',
    });

    const login = (username: string, password: string) => {
        if (profile.name === username && profile.password === password) {
            setUser({ username, password });
            setIsAuthenticated(true);
        } else {
            alert("Identifiants incorrects !");
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
