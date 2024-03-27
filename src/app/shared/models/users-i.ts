import { DocumentData, DocumentReference, Timestamp } from "@angular/fire/firestore";

export interface UsersI {
    //value?(monDoc: DocumentReference<DocumentData, DocumentData>, value: any, arg2: { merge: true; }): unknown;
    lastlogin?: number;
    dateCreation?: number;
    nom:string;
    prenom:string;
    id?:string;
    email:string;
    infos?:string;
    token?:string;
    statut:string;
    avatar?:string;
    

}

export interface FireUserI{
    nom:string;
    prenom:string;
    id?:string;
    email:string;
    emailVerified?:boolean;
    infos?:string;
    token?:string;
    statut:string;
    avatar?:string;
    accessToken?:string;
    displayName:string;
    dateCreation : Date;
    lastlogin: number;
}

interface Metadata{
    createdAt: Timestamp
​​    creationTime: Date
​​    lastLoginAt: Timestamp
​    lastSignInTime: Timestamp

}

export interface ContactI{
    nom:string;
    prenom:string;
    age?:number;
    adresse:AdresseI;
    tel?:string;
    mobile:string;
    email:string;
    statut?:string;
    infos?:string;
}
interface AdresseI{
    rue?:string;
    codePostal:number;
    ville:string;
}
export interface inscriptionI {
    nom:string;
    prenom:string;
    age?:number;
    adresse:AdresseI;
    tel?:string;
    mobile:string;
    email:string;
    statut?:string;
    infos?:string;

}

