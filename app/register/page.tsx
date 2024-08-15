"use client";
import React, { FormEvent, useState } from "react";
import styles from "./register.module.css";
import Link from "next/link";

const register = () => {
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        userName: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    console.log({ res });
  };

  return (
    <form onSubmit={handleRegister} className={styles.registerWrap}>
      <p className="text-4xl mb-2" style={{ marginTop: "10%" }}>
        Register
      </p>
      <input
        type="text"
        placeholder="Name"
        name="name"
        className={styles.inputFields}
      />
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
      <Link href="/login" className="mb-2">
        Already Have An Account? Login
      </Link>
      <button className={styles.button}>Register</button>
    </form>
  );
};

export default register;
