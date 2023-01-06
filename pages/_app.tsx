import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { supabase } from "../utilities/supabase";
import { Session } from "@supabase/gotrue-js/src/lib/types"

export default function App({ Component, pageProps }: AppProps<{ session: Session }>) {

  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    const baseAuth = supabase.auth.session();
    setSession(baseAuth);
    supabase.auth.onAuthStateChange((_event, auth) => {
      setSession(auth);
    });
  }, []);

  return <>
    <Navbar session={session} />
    <Component {...pageProps} />
    <Footer />
  </>
}
