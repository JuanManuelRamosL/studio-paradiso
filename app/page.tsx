"use client"


import Nav from "@/components/nav"
import Header from "@/components/Header"
import Body from "@/components/Body"
import Sponsor from "@/components/Sponsor"
import Foter from "@/components/Foter"


export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
     <Nav></Nav>
      {/* Hero Section with Background Video */}
      
     <Header></Header>
      {/* Content Tabs */}
      <Body></Body>

      {/* Sponsors Section */}
      <Sponsor></Sponsor>

      {/* Footer */}
     <Foter></Foter>
    </div>
  )
}

