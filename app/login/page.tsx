"use client";
import React, { FormEvent, useState } from "react";
import styles from "./form.module.css";
import Link from "next/link";
import { signIn } from "next-auth/react";

const login = () => {
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    // console.log(res);
  };

  return (
    <form onSubmit={handleLogin} className={styles.registerWrap}>
      <p className="text-4xl mb-2" style={{ marginTop: "10%" }}>
        Login
      </p>
      <input
        type="email"
        placeholder="Email"
        name="email"
        className={`my-2 ${styles.inputFields}`}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className={`mb-2 ${styles.inputFields}`}
      />
      <Link href="/register" className="mb-2">
        Don't have an account? Register
      </Link>
      <button className={styles.button}>Login</button>
    </form>
  );
};

export default login;
