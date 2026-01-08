"use client"

import { redirect, RedirectType } from "next/navigation"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { useEffect } from "react"

interface ProjectCardProps {
    projectTitle: string,
    projectLink?: string,
    projectGithub?: string,
    githubAPILink?: string,
    children: React.ReactNode
}

export default function ProjectCard(props: ProjectCardProps) {
    const {projectTitle, projectLink, projectGithub, githubAPILink, children} = props

    useEffect(() => {
        if (githubAPILink) {
            /* fetch(`${githubAPILink}/languages`)
                .then(res => res.json())
                .then((data) => {
                    const keys = Object.keys(data)
                    let totalBytes: number = 0;
                    keys.forEach((key) => {
                        totalBytes += parseInt(data[key])
                    })

                    console.log(totalBytes)
                }) */
        }
    }, [])

    return (
        <Card className="w-full max-w-sm z-1000 flex flex-col h-full">
            <CardHeader className="justify-center">
                <CardTitle>{projectTitle}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center text-center">
                {children}
            </CardContent>
            <CardFooter className="flex-col gap-2 mt-auto">
                {projectLink ?
                    <Button type="submit" className="w-full hover:cursor-pointer" onClick={() => redirect(projectLink, RedirectType.push)}>Open</Button>
                    : <></>
                }
                {projectGithub ? 
                    <Button variant="outline" className="w-full hover:cursor-pointer" onClick={() => redirect(projectGithub, RedirectType.push)}>Github</Button>
                    : <></>
                }
            </CardFooter>
        </Card>
    )
}