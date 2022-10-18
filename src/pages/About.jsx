import { NavLink, useNavigate, useParams } from "react-router-dom";
import {decode} from 'html-entities';
import { useEffect, useState } from "react";
import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Mark Down
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'
import rehypeRaw from 'rehype-raw'

const About = props => {
    const navigate = useNavigate();

    const markdown = ` Web Development ကို လေ့လာမည့် သူများအတွက် ရေးဆွဲထားခြင်းဖြစ်ပါတယ်။ လောလောဆယ်မှာ BFWD Course ပဲ့ရှိပါတယ်။ BFWD က Free Course ဖြစ်ပါတယ်။
### သင်ခန်းစာများကို ဘယ်လိုလေ့လာရမှာလဲ?
* တစ်နေ့ သင်ခန်းစာ (3) ပုဒ်နှုန်းဖြင့်လေ့လာပေးပါ။
* မိမိတစ်နေ့ လေ့လာပြီးသွားတဲ့ သင်ခန်းစာများကို မှတ်ထားပေးပါ။

\`အဆင်ပြေကြပါစေဗျာ\` `

    return (
        <>

            <HelmetProvider>
                <Helmet>
                    <title>BFWD | About</title>
                </Helmet>
            </HelmetProvider>

            <div className="container mx-auto px-3 pt-5 lg:px-10 2xl:px-32 lg:pt-9">
                <button onClick={() => navigate('/')} className="text-pink-500 mb-5"><i className="fa-solid fa-angle-left"></i> Back</button>
                <div className="flex items-center space-x-3 mb-5">
                    <h1 className="m-0"></h1>
                </div>

                <ReactMarkdown
                    className="markdown-body font-sans"
                    remarkPlugins={[remarkSlug, remarkToc, remarkGfm]}
                    rehypePlugins={[[rehypeHighlight, {ignoreMissing: true}]]}
                >
                    {markdown}
                </ReactMarkdown>
            </div>
        </>
    )
}

export default About;