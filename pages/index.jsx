"use client";

import GoogleButton from "react-google-button";
import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";
import styles from "../styles/Home.module.css";

const Home = () => {
  const { data: session } = useSession();
  if (session) {
  }
  return (
    <main className={styles.container}>
      <p className={styles.title}>Ads Play Area</p>
      {session ? (
        <div
          style={{
            alignItems: "center",
            // borderWidth: 1,
            // borderStyle: "solid",
            // borderColor: "blue",
            display: "flex",
            flexDirection: "column",
            marginTop: "6rem",
          }}
        >
          <p
            style={{
              fontSize: 35,
              //   borderWidth: 1,
              //   borderStyle: "solid",
              //   borderColor: "red",
            }}
          >
            Hello{" "}
            <strong style={{ fontStyle: "italic" }}>{session.user.name}</strong>
          </p>
          <button
            onClick={() => signOut()}
            style={{
              padding: "0.5rem",
              color: "#000",
              backgroundColor: "#fff",
              borderRadius: "10rem",
              width: "8rem",
              height: "3rem",
              fontSize: 16,
              marginTop: "10rem",
              borderColor: "black",
            }}
          >
            Sign out
          </button>
        </div>
      ) : (
        <>
          <div className={styles.loginContainer}>
            <GoogleButton
              onClick={() => signIn("google")}
              className={styles.login}
            ></GoogleButton>
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
