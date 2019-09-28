export interface UserModel {
    uid: string;
    name: string;
    email: string;
    handler: string;
    contact?: Array<string>;
}