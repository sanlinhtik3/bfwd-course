import { NavLink, useNavigate, useParams } from "react-router-dom";
import {decode} from 'html-entities';
import { useEffect, useState } from "react";
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

const About = props => {
    const navigate = useNavigate();

    const markdown = ` Web Development ကို လေ့လာမည့် သူများအတွက် ရေးဆွဲထားခြင်းဖြစ်ပါတယ်။ လောလောဆယ်မှာ BFWD Course ပဲ့ရှိပါတယ်။ BFWD က Free Course ဖြစ်ပါတယ်။ \n ### သင်ခန်းစာများကို ဘယ်လိုလေ့လာရမှာလဲ? \n သင်ခန်းစာများကိုလေ့လာတဲ့အခါ Page ကို Reload မလုပ်ပါနဲ့။ Page Not Fount ဖြစ်သွားတတ်လို့ပါ။ မိမိတစ်နေ့ လေ့လာပြီးသွားတဲ့ သင်ခန်းစာများကို မှတ်ထားပေးပါ။ နောက်တစ်ခါ ပြန်ပြီးလေ့လာတဲ့အခါ အစကနေ ပြန်ပြီးရောက်သွားတတ်လို့ဖြစ်ပါတယ်။ `

    return (
        <>
            <div className="container mx-auto px-3 lg:px-10 2xl:px-32 lg:pt-9">
                <button onClick={() => navigate('/')} className="text-pink-500 mb-5"><i className="fa-solid fa-angle-left"></i> Back</button>
                <div className="flex items-center space-x-3 mb-5">
                    <h1 className="m-0"></h1>
                </div>

                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm, rehypeHighlight]} />
            </div>
        </>
    )
}

export default About;