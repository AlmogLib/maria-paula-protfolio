import { createContext, useContext, ReactNode, useState } from 'react';

interface LanguageContextProps {
    children: ReactNode;
}

interface LanguageContextValue {
    language: string;
    setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<LanguageContextProps> = ({ children }) => {
    const [language, setLanguage] = useState<string>('en');

    const contextValue: LanguageContextValue = {
        language,
        setLanguage,
    };

    return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }

    return context;
};
