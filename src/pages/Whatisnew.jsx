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

const Whatisnew = props => {
    
    const navigate = useNavigate();

    const markdown = ` ## Whta\'s new?
#### dev 0.0.9
* What's new? add new page
* Update text view

`

    return (
        <>

            <HelmetProvider>
                <Helmet>
                    <title>BFWD | What's new?</title>
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

export default Whatisnew;