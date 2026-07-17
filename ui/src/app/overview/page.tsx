"use client";

import { Brain, FileText, Phone, Settings, Workflow } from "lucide-react";
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/lib/auth';

export default function OverviewPage() {
    const { user, provider } = useAuth();
    const isOSSMode = provider !== 'stack';

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight">
                        {isOSSMode ? "Welcome to Tera." : `Welcome${user?.displayName ? `, ${user.displayName.split(' ')[0]}` : ''}.`}
                    </h1>
                    <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
                        Your automated phone helpers are ready. Monitor your call activity, manage assistants, and review customer interactions here.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <Button variant="secondary" asChild className="rounded-full shadow-sm">
                        <Link href="/reports">
                            <FileText className="w-4 h-4 mr-2" />
                            View Logs
                        </Link>
                    </Button>
                    <Button asChild className="rounded-full shadow-sm bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="/workflow">
                            <Workflow className="w-4 h-4 mr-2" />
                            Create Assistant
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Overview Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Hero Card */}
                <div className="lg:col-span-2 relative overflow-hidden rounded-[20px] bg-card border border-border/50 p-6 md:p-8 flex flex-col justify-between shadow-sm min-h-[280px]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 shadow-inner">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold mb-3">Your assistants are online.</h2>
                        <p className="text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
                            They can answer common customer questions, route calls, and resolve issues autonomously.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-8 relative z-10">
                        <Button asChild className="rounded-full shadow-sm bg-primary text-primary-foreground hover:bg-primary/90">
                            <Link href="/reports">See Call History</Link>
                        </Button>
                        <Button variant="secondary" asChild className="rounded-full shadow-sm">
                            <Link href="/workflow">Manage Assistants</Link>
                        </Button>
                    </div>
                </div>

                {/* Quick Stats / Actions Column */}
                <div className="flex flex-col gap-4">
                    <Card className="rounded-[20px] shadow-sm border-border/50 hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-sm font-semibold flex items-center gap-2">
                                <Workflow className="w-4 h-4 text-primary" />
                                Call Pathways
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-muted-foreground mb-4">Design greetings and routing logic for your receptionists.</p>
                            <Button variant="outline" size="sm" asChild className="w-full rounded-full">
                                <Link href="/workflow">Manage</Link>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="rounded-[20px] shadow-sm border-border/50 hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-sm font-semibold flex items-center gap-2">
                                <Brain className="w-4 h-4 text-primary" />
                                AI Connections
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-muted-foreground mb-4">Connect API keys from OpenAI, Anthropic, or others.</p>
                            <Button variant="outline" size="sm" asChild className="w-full rounded-full">
                                <Link href="/model-configurations">Set Up</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Stat Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: "Total calls", value: "---", delta: "Active" },
                    { label: "Average call length", value: "---", delta: "Active" },
                    { label: "Handled automatically", value: "---", delta: "Active" },
                    { label: "Phone lines configured", value: "---", delta: "Status" },
                ].map((stat, i) => (
                    <div key={i} className="bg-card rounded-[16px] border border-border/50 p-5 shadow-sm">
                        <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                        <p className="text-3xl font-bold tracking-tight mt-2">{stat.value}</p>
                        <p className="text-xs font-semibold text-primary mt-2">{stat.delta}</p>
                    </div>
                ))}
            </div>
            
            {/* Resources Section (Hidden in demo mode for cleaner UI, but can be added back if needed) */}
        </div>
    );
}
