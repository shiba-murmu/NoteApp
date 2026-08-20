import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";


import api from "../../services/api";
import { toast } from "sonner";
import Card from "../common/Card";
import Button from "../common/Button";
import AuthInput from "./AuthInput";
import { useQueryClient } from "@tanstack/react-query";

export default function LoginCard() {

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    // ==============================
    // Form State
    // ==============================

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    // ==============================
    // Login Handler
    // ==============================

    const handleLogin = async (e) => {

        e.preventDefault();

        setError("");


        // ==============================
        // Basic Validation
        // ==============================

        if (!email || !password) {
            setError("Please enter your email and password.");
            return;
        }


        try {

            setLoading(true);


            // ==============================
            // Send Login Request
            // ==============================

            const response = await api.post(
                "/auth/login",
                {
                    email,
                    password,
                }
            );


            const data = response.data;


            // ==============================
            // Store JWT
            // ==============================

            localStorage.setItem(
                "accessToken",
                data.token
            );
            await queryClient.fetchQuery(
                {
                    queryKey: ["currentUser"],
                    queryFn: async () => {
                        const response = await api.get("/auth/me");
                        return response.data.user;
                    },
                }
            )


            // ==============================
            // Navigate to Dashboard
            // ==============================

            toast.success("Welcome back!");

            navigate("/dashboard");


        } catch (error) {

            console.error(
                "Login error:",
                error
            );

            toast.error(
                error.response?.data?.message ||
                "Unable to connect to the server."
            );


            // ==============================
            // Backend Error
            // ==============================

            if (error.response) {

                setError(
                    error.response.data?.message ||
                    "Login failed."
                );

            } else {

                setError(
                    "Unable to connect to the server."
                );

            }

        } finally {

            setLoading(false);

        }

    };


    return (
        <Card className="w-full md:mt-10 max-w-[560px] p-6 sm:p-8 lg:p-10">

            {/* ==============================
                Heading
            ============================== */}

            <div className="space-y-3">

                <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    Welcome Back
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Let's make today count.
                </h2>

                <p className="leading-7 text-gray-400">
                    Continue building your goals, sharing your progress,
                    and growing with the community.
                </p>

            </div>


            {/* ==============================
                Login Form
            ============================== */}

            <form
                onSubmit={handleLogin}
                className="mt-10 space-y-6"
            >

                {/* Email */}

                <AuthInput
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    icon={Mail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />


                {/* Password */}

                <AuthInput
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    icon={Lock}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />


                {/* Error */}

                {error && (
                    <p className="text-sm text-red-400">
                        {error}
                    </p>
                )}


                {/* ==============================
                    Options
                ============================== */}

                <div className="flex items-center justify-between text-sm">

                    <label className="flex cursor-pointer items-center gap-3 text-gray-400">

                        <input
                            type="checkbox"
                            className="h-4 w-4 rounded accent-emerald-500"
                        />

                        Remember me

                    </label>


                    <Link
                        to="/forgot-password"
                        className="font-medium text-emerald-400 transition hover:text-emerald-300"
                    >
                        Forgot Password?
                    </Link>

                </div>


                {/* ==============================
                    Sign In
                ============================== */}

                <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-2xl"
                    disabled={loading}
                >
                    {loading
                        ? "Signing In..."
                        : "Sign In"
                    }
                </Button>

            </form>


            {/* ==============================
                Divider
            ============================== */}

            <div className="my-8 flex items-center">

                <div className="h-px flex-1 bg-white/10" />

                <span className="px-4 text-xs uppercase tracking-[3px] text-gray-500">
                    or
                </span>

                <div className="h-px flex-1 bg-white/10" />

            </div>


            {/* ==============================
                Google Login
            ============================== */}

            <Button
                variant="outline"
                size="lg"
                className="w-full gap-3"
            >

                <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="h-5 w-5"
                />

                Continue with Google

            </Button>


            {/* ==============================
                Footer
            ============================== */}

            <p className="mt-8 text-center text-gray-400">

                Don't have an account?

                <Link
                    to="/register"
                    className="ml-2 font-semibold text-emerald-400 transition hover:text-emerald-300"
                >
                    Create Account
                </Link>

            </p>

        </Card>
    );
}