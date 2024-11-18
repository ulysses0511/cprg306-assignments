"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
 
export default function SignInPage() {
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error(error);
        }
    }

    async function handleSignOut() {
        console.log("Attempting to sign out...");
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">Welcome to the Shopping List App</h1>
            {!user ? (
                <button 
                    onClick={handleSignIn}
                >Sign in with GitHub
                </button>
            ) : (
                <div>
                    <p>Welcome, {user.displayName} ({user.email})</p>
                    <Link href="./week-10/shopping-list">
                    <p className="px-6 py-3 mt-4 hover:bg-red-600 rounded-md text-lg font-semibold">Go to Shopping List</p>
                    </Link>
                        <button
                            onClick={handleSignOut}
                        >
                            Logout
                        </button>
                </div>
            )}
        </div>
    );
}