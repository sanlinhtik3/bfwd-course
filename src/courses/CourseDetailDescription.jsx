import { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate, json } from "react-router-dom";
import {decode} from 'html-entities';
import React from 'react'

// Mark Down
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'
import rehypeRaw from 'rehype-raw'

const CourseDetailDescription = props => {
    const markdown = decode(props.descriptions.description)

    return (
        <>
            <div className="mt-20">
                <div className="">
                    <h5 className="">About This Lesson</h5>
                    <hr className="mt-3 mb-10" />
                    <div className="">
                        <h1 className="text-xl lg:text-2xl">{props.descriptions.title}</h1>
                        <p className="lg:max-w-2xl">
                            {props.descriptions.description != "" ?
                                <ReactMarkdown
                                    className="markdown-body"
                                    remarkPlugins={[remarkSlug, remarkToc, remarkGfm]}
                                    rehypePlugins={[[rehypeHighlight, {ignoreMissing: true}]]}
                                >
                                    {markdown}
                                </ReactMarkdown> : <h4>No description!</h4>
                            }
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseDetailDescription;