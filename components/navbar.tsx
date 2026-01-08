"use client"

import { useIsMobile } from "@/lib/hooks/useIsMobile"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu"
import Link from "next/link"
import { Github, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Navbar() {
    const isMobile = useIsMobile()

    return (
        <NavigationMenu viewport={isMobile}>
            <NavigationMenuList className="flex flex-wrap flex-row items-center justify-center">
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/">Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/projects">Projects</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/about">About</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Socials</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[100px] gap-4">
                            <li>
                                <NavigationMenuLink className="flex flex-row items-center" href="https://github.com/LimeGradient" target="_blank">
                                    <Github size={20}/> Github
                                </NavigationMenuLink>
                                <NavigationMenuLink className="flex flex-row items-center" href="https://x.com/limegradient" target="_blank">
                                    <Twitter size={20}/> Twitter
                                </NavigationMenuLink>
                                <NavigationMenuLink className="flex flex-row items-center" href="https://www.youtube.com/@limegradient" target="_blank">
                                    <Youtube size={20}/> Youtube
                                </NavigationMenuLink>
                                <NavigationMenuLink className="flex flex-row items-center" href="https://www.linkedin.com/in/kfb07/" target="_blank">
                                    <Linkedin size={20}/> Linkedin
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}