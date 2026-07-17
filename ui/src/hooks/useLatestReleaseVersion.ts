"use client";

import { useEffect, useState } from "react";

interface Options {
    enabled: boolean;
}

interface Result {
    latest: string | null;
    isBehind: boolean;
    isLatest: boolean;
}

const CACHE_KEY = "dograh-latest-release";
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;
const SEMVER_RE = /^v?(\d+)\.(\d+)\.(\d+)$/;

function parseSemver(tag: string): [number, number, number] | null {
    const m = tag.match(SEMVER_RE);
    if (!m) return null;
    return [Number(m[1]), Number(m[2]), Number(m[3])];
}

function isOlder(current: string, latest: string): boolean {
    const c = parseSemver(current);
    const l = parseSemver(latest);
    if (!c || !l) return false;
    for (let i = 0; i < 3; i++) {
        if (c[i] < l[i]) return true;
        if (c[i] > l[i]) return false;
    }
    return false;
}

export function useLatestReleaseVersion(
    currentVersion: string | undefined,
    { enabled }: Options,
): Result {
    return { latest: null, isBehind: false, isLatest: false };
}
