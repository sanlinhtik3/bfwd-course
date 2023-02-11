import { NavLink, useNavigate, useParams } from "react-router-dom";
import {decode} from 'html-entities';
import { useEffect, useState } from "react";
import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Mark Down
import MarkDown from "../components/MarkDown";

const Logos = props => {
    const navigate = useNavigate();

    const markdown = `
# inficreax Logo
    `

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>BFWD | Logos</title>
                </Helmet>
            </HelmetProvider>

            <div className="container mx-auto px-3 py-5 lg:px-10 2xl:px-32 lg:pt-9">
                <button onClick={() => navigate('/')} className="text-emerald-500 mb-5"><i className="fa-solid fa-angle-left"></i> Back</button>
                <div className="flex items-center space-x-3 mb-5">
                    <h1 className="m-0"></h1>
                </div>

                <MarkDown markdown={markdown}/>

                <div className="grid mt-5 gap-y-9">
                    <div className="hover:scale-[0.99] transition shadow p-3 rounded-lg flex flex-col justify-center items-center text-center">
                        <img className=" w-80" src="/inficreax.svg" alt="" />
                        <a href="/inficreax.svg" className="bg-emerald-500 p-3 w-full rounded-md no-underline hover:bg-emerald-400 transition hover:text-slate-50" download>Download Logo</a>
                    </div>
                    <div className="hover:scale-[0.99] transition shadow p-3 rounded-lg flex flex-col justify-center items-center text-center">
                        <img className=" w-80" src="/img/brand-logo.svg" alt="" />
                        <a href="/img/brand-logo.svg" className="bg-emerald-500 p-3 w-full rounded-md no-underline hover:bg-emerald-400 transition hover:text-slate-50" download>Download Logo</a>
                    </div>
                    <div className="hover:scale-[0.99] transition shadow p-3 rounded-lg flex flex-col justify-center items-center text-center">
                        <p>Source ဖိုင်ထဲမှာ Light & Dark Logos များပါဝင်ပါတယ်။</p>
                        <a href="/img/Archive.zip" className="bg-emerald-500 p-3 w-full rounded-md no-underline hover:bg-emerald-400 transition hover:text-slate-50" download>Download Source</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Logos;