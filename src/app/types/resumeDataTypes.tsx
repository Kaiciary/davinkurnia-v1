type ResumeData = {
    about: string;
    experience: {
        company: string;
        position: string;
        period: string;
        details: string[];
    }[];
    education: {
        university: string;
        degree: string;
        period: string;
    }[];
    skills: {
        name: string;
        icon: string;
    }[];
};