import { User, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import Card from "../common/Card";
import Button from "../common/Button";
import AuthInput from "../auth/AuthInput";
import GenderSelector from "./GenderSelector";
import PasswordStrength from "./PasswordStrength";
import PasswordRequirements from "./PasswordRequirements";

export default function RegisterCard() {
    const [password, setPassword] = useState("");
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });
    return (
        <Card className="w-full max-w-[560px] p-6 sm:p-8 lg:p-10">

            {/* Heading */}

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

            {/* Form */}

            <form className="mt-10 space-y-6">

                <AuthInput
                    label="Full Name"
                    icon={User}
                    placeholder="John Doe"
                    value={form.fullName}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            fullName: e.target.value,
                        })
                    }
                />
                <AuthInput
                    label="Email Address"
                    type="email"
                    icon={Mail}
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value,
                        })
                    }
                />

                <AuthInput
                    label="Password"
                    type="password"
                    icon={Lock}
                    placeholder="Create password"
                    value={form.password}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            password: e.target.value,
                        })
                    }
                />

                <PasswordStrength password={form.password} />

                <PasswordRequirements password={form.password} />

                <AuthInput
                    label="Confirm Password"
                    type="password"
                    icon={Lock}
                    placeholder="Confirm password"
                    value={form.confirmPassword}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            confirmPassword: e.target.value,
                        })
                    }
                />
                <GenderSelector
                    value={form.gender}
                    onChange={(gender) =>
                        setForm({
                            ...form,
                            gender,
                        })
                    }
                />

                <label className="flex items-start gap-3">

                    <input
                        type="checkbox"
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

                <Button
                    className="w-full"
                    size="lg"
                >
                    Start Growing
                </Button>

            </form>

            {/* Divider */}

            <div className="my-8 flex items-center">

                <div className="h-px flex-1 bg-white/10" />

                <span className="px-4 text-xs uppercase tracking-[4px] text-gray-500">
                    or
                </span>

                <div className="h-px flex-1 bg-white/10" />

            </div>

            {/* Google */}

            <Button
                variant="outline"
                size="lg"
                className="w-full"
            >
                Continue with Google
            </Button>

            {/* Footer */}

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