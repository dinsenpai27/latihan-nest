import { Exclude, Expose } from "class-transformer";
import { Role } from "@prisma/client"; // Ensure @prisma/client is installed

export class User{
    @Expose()
    id : number;
    @Expose()
    username : string;

    @Exclude()
    password : string;

    @Expose()
    role : Role;

}