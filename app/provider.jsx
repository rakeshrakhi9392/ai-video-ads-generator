"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import React from 'react'

function Provider({ children }) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    return (
        <ConvexProvider client={convex}>
            <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
                <div>{children}</div>
            </PayPalScriptProvider>
        </ConvexProvider>
    )
}

export default Provider