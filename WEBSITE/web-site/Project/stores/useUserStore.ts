import { defineStore } from 'pinia';
import type { IUser } from '~/types';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as IUser | null,
        isAuthenticated: false,
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async login(email: string, password: string) {
            this.loading = true;
            this.error = null;
            try {
                const auth = getAuth();
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                this.setUser({
                    uid: user.uid,
                    email: user.email || '',
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    createdAt: user.metadata.creationTime || new Date().toISOString()
                });
            } catch (err: any) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        },
        async register(email: string, password: string) {
            this.loading = true;
            this.error = null;
            try {
                const auth = getAuth();
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                this.setUser({
                    uid: user.uid,
                    email: user.email || '',
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    createdAt: user.metadata.creationTime || new Date().toISOString()
                });
            } catch (err: any) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        },
        async logout() {
            const auth = getAuth();
            await signOut(auth);
            this.user = null;
            this.isAuthenticated = false;
        },
        setUser(user: IUser | null) {
            this.user = user;
            this.isAuthenticated = !!user;
        }
    },
});
