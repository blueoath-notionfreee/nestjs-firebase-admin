import * as adminCore from 'firebase-admin';

export * from './firebase/firebase.module';
export * from './firebase/firebase.service';
export * from './firebase/firebase.middleware';
export const admin = adminCore;

admin.firestore

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Express {
        interface Request {
            user: adminCore.auth.DecodedIdToken;
        }
    }
}
