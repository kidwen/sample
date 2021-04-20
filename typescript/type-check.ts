export class TypeCheck {
    public user: UserOrPerson;

    public check(user: UserOrPerson): user is User {
        return true;
    }
}

export type UserOrPerson = User | Person;

export interface ResourceBase {
    id: string;
}

export interface User extends ResourceBase {
    name?: string;
}


export interface Person extends ResourceBase {
    age?: string;
}
