'use client';
import React from 'react'
import Link from "next/link";
import "./navigation.css"

const NavigationBar = () => {
  return (
    <div className="navBar">
        <div className="flex justify-between items-center h-full">
            <div className="flex items-center h-full navTitle">
                <Link href="/">
                    <h1>Faruq Afolabi</h1>
                </Link>
            </div>
            <div className="flex justify-between px-4 items-center navList">
                <ul className="hidden md:flex gap-x-12">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <p>Projects</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/research">
                            <p>Research</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/other">
                            <p>Other</p>
                        </Link>
                    </li>
                </ul>
            </div>    
        </div>
    </div>
  )
}

export default NavigationBar