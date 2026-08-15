import { User, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

import Card from "../common/Card";
import Button from "../common/Button";
import AuthInput from "../auth/AuthInput";
import GenderSelector from "./GenderSelector";
import PasswordStrength from "./PasswordStrength";
import PasswordRequirements from "./PasswordRequirements";

import api from "../../services/api";

export default function RegisterCard() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const [agreeTerms, setAgreeTerms] = useState(false);

    const [loading, setLoading] = useState(false);


    // ==========================================
    // Handle Input Changes
    // ==========================================

    const handleChange = (field, value) => {

        setForm((previous) => ({
            ...previous,
            [field]: value,
        }));

    };


    // ==========================================
    // Register User
    // ==========================================

    const handleRegister = async (e) => {

        e.preventDefault();
        // console.log("REGISTER FORM:", form);  For development porpose


        // ==========================================
        // Validate Required Fields
        // ==========================================

        if (
            !form.fullName.trim() ||
            !form.email.trim() ||
            !form.password ||
            !form.confirmPassword ||
            !form.gender
        ) {

            toast.error(
                "Please fill in all required fields."
            );

            return;
        }


        // ==========================================
        // Validate Password
        // ==========================================

        if (form.password.length < 8) {

            toast.error(
                "Password must be at least 8 characters."
            );

            return;
        }


        // ==========================================
        // Confirm Password
        // ==========================================

        if (
            form.password !==
            form.confirmPassword
        ) {

            toast.error(
                "Passwords do not match."
            );

            return;
        }


        // ==========================================
        // Terms
        // ==========================================

        if (!agreeTerms) {

            toast.error(
                "Please agree to the Terms and Privacy Policy."
            );

            return;
        }


        try {

            setLoading(true);


            // ==========================================
            // Send Registration Request
            // ==========================================

            await api.post(
                "/auth/register",
                {
                    name: form.fullName.trim(),
                    email: form.email.trim(),
                    password: form.password,
                    gender: form.gender,
                }
            );


            // ==========================================
            // Success
            // ==========================================

            toast.success("Account created successfully!", {
                description: "You can now log in to your account.",
            });

            // ==========================================
            // Go To Login
            // ==========================================

            navigate("/login");


        } catch (error) {

            console.error(
                "Registration error:",
                error
            );


            toast.error(
                error.response?.data?.message ||
                "Unable to create your account."
            );


        } finally {

            setLoading(false);

        }

    };


    return (

        <Card className="w-full max-w-[560px] p-6 sm:p-8 lg:p-10">

            {/* ==========================================
                Heading
            ========================================== */}

            <div className="space-y-3">

                <span className="inline-flex w-fit rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    Create Account
                </span>

                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Start Your Journey
                </h2>

                <p className="text-gray-400">
                    Create your free account and become
                    part of a community that grows together.
                </p>

            </div>


            {/* ==========================================
                Form
            ========================================== */}

            <form
                onSubmit={handleRegister}
                className="mt-10 space-y-6"
            >

                {/* Full Name */}

                <AuthInput
                    label="Full Name"
                    icon={User}
                    placeholder="John Doe"
                    value={form.fullName}
                    onChange={(e) =>
                        handleChange(
                            "fullName",
                            e.target.value
                        )
                    }
                />


                {/* Email */}

                <AuthInput
                    label="Email Address"
                    type="email"
                    icon={Mail}
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) =>
                        handleChange(
                            "email",
                            e.target.value
                        )
                    }
                />


                {/* Password */}

                <AuthInput
                    label="Password"
                    type="password"
                    icon={Lock}
                    placeholder="Create password"
                    value={form.password}
                    onChange={(e) =>
                        handleChange(
                            "password",
                            e.target.value
                        )
                    }
                />


                {/* Password Strength */}

                <PasswordStrength
                    password={form.password}
                />


                {/* Password Requirements */}

                <PasswordRequirements
                    password={form.password}
                />


                {/* Confirm Password */}

                <AuthInput
                    label="Confirm Password"
                    type="password"
                    icon={Lock}
                    placeholder="Confirm password"
                    value={form.confirmPassword}
                    onChange={(e) =>
                        handleChange(
                            "confirmPassword",
                            e.target.value
                        )
                    }
                />


                {/* Gender */}

                <GenderSelector
                    value={form.gender}
                    onChange={(gender) =>
                        handleChange(
                            "gender",
                            gender
                        )
                    }
                />


                {/* Terms */}

                <label className="flex cursor-pointer items-start gap-3">

                    <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) =>
                            setAgreeTerms(
                                e.target.checked
                            )
                        }
                        className="mt-1 accent-emerald-500"
                    />

                    <span className="text-sm leading-6 text-gray-400">

                        I agree to the

                        <Link
                            to="/terms"
                            className="mx-1 text-emerald-400"
                        >
                            Terms
                        </Link>

                        and

                        <Link
                            to="/privacy"
                            className="ml-1 text-emerald-400"
                        >
                            Privacy Policy
                        </Link>

                    </span>

                </label>


                {/* Submit */}

                <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={loading}
                >

                    {loading
                        ? "Creating Account..."
                        : "Start Growing"
                    }

                </Button>

            </form>


            {/* ==========================================
                Divider
            ========================================== */}

            <div className="my-8 flex items-center">

                <div className="h-px flex-1 bg-white/10" />

                <span className="px-4 text-xs uppercase tracking-[4px] text-gray-500">
                    or
                </span>

                <div className="h-px flex-1 bg-white/10" />

            </div>


            {/* ==========================================
                Google
            ========================================== */}

            <Button
                variant="outline"
                size="lg"
                className="w-full"
            >
                Continue with Google
            </Button>


            {/* ==========================================
                Footer
            ========================================== */}

            <p className="mt-8 text-center text-gray-400">

                Already building?

                <Link
                    to="/login"
                    className="ml-2 font-semibold text-emerald-400"
                >
                    Sign In
                </Link>

            </p>

        </Card>
    );
}