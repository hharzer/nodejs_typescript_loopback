
import { IAccount } from "./account.interface";

export class AccountService implements IAccount {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    passwordResetToken: string;
    passwordResetExpires: Date;
    facebook: string;
    profile: { name: string; gender: string; location: string; website: string; picture: string; };

    constructor(_userid?: string, _firstName?: string, _lastName?: string) {
        this.firstName = _firstName;
        this.lastName = _lastName;
    }
    public getAccount(): any {

        // call to the DB
        const account = [{
            name: "William",
            lastname: "Diaz"
        }];

        return account;
    }

    public saveAccount(): any {

        // call to the DB
        return this.lastName;
    }
    public deleteAccount(): any {

        // call to the DB
        return this.lastName;
    }

    public updateAccount(): any {

        // call to the DB
        return this.lastName;
    }

    public putAccount(): any {

        // call to the DB
        return this.lastName;
    }

    public serialize(): string {
        return JSON.stringify(this);
    }
}

