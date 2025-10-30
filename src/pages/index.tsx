"use client"; // if using App Router (optional but safe)
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card"; 
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  const cards = [
    {
      title: "Track Your Progress",
      description: "Monitor completion and progress across all your courses.",
    },
    {
      title: "Upcoming Deadlines",
      description:
        "Never miss an assignment deadline again with our reminders.",
    },
    {
      title: "Join Webinars",
      description:
        "Discover and register for live learning events and webinars.",
    },
  ];
  return (
    <>
      <main className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Header />
        <section className="flex flex-col items-center justify-center text-center mt-16 px-6">
          <h2 className="text-3xl font-bold mb-4">
            Welcome to Your Study Planner
          </h2>
          <p className="max-w-2xl text-gray-600 mb-8">
            Organize your courses, manage tasks, and stay on top of deadlines —
            all in one place.
          </p>
          <div className="w-full max-w-md">
            <Input placeholder="Search courses or topics..." />
          </div>
        </section>
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-6 mt-16 max-w-6xl mx-auto">
          {cards.map((c, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{c.title}</CardTitle>
                <CardDescription>{c.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  More details or stats can go here.
                </p>
              </CardContent>
            </Card>
          ))}
        </section>
        <Footer />
      </main>
    </>
  );
}
