export type UserInterface = {
    id: string;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    position: string;
    accessLevel: number;
    department?: string;
    tasks: Task[];
    createdAt: Date;
    updatedAt: Date;
    profilePicture?: string;
};