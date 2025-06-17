// src/utils/apiFetcher.ts

import type { FunctionMap, StringMap } from "../../env";

const USE_MOCK = true; // Set to true to use mock data, false for live API

const random = (min: number, max: number) => Math.random() * (max - min) + min;

// --- MOCK DATA GENERATORS ---
const mockMessages = () => Array(15).fill(null).map(() => `${random(19.5, 22.8).toFixed(1)} C`);
const mockProducts = () => Array(5).fill(null).map((_, i) => `Product ${i + 1}: ${random(3, 8).toFixed(0)} units`);
const mockLogin = () => ({ success: true, user_id: 1, token: 'mock-jwt-token-123' });

// Map endpoint names to their corresponding mock functions
const MockEndpoints = {
    products: mockProducts,
    login: mockLogin,
    messages: mockMessages,
} as FunctionMap;

// Helper to call the correct mock function
const callMockFunction = (name: keyof typeof MockEndpoints) => {
    if (MockEndpoints[name]) {
        return MockEndpoints[name]();
    }
    console.warn(`No mock function found for endpoint: ${name}`);
    return null; // Or throw an error
};

// Generic mock fetch wrapper
const mockFetch = async <T>(name: keyof typeof MockEndpoints): Promise<T> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, random(100, 500)));
    const result = callMockFunction(name);
    if (result === null) {
        throw new Error(`Mock data for '${name}' not found.`);
    }
    return result as T;
};

// --- REAL API URLS ---
const URLS = {
    products: "https://api.example.com/products",
    messages: "https://api.example.com/messages",
    login: "https://api.example.com/login",
} as StringMap;

// Helper to get the real API URL
const getUrl = (name: keyof typeof URLS) => {
    if (URLS[name]) {
        return URLS[name];
    }
    throw new Error(`URL for '${name}' not found.`);
};

// Generic data fetching function for real API
async function getData(url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            // Handle HTTP errors
            const errorBody = await response.text();
            throw new Error(`API Response status: ${response.status} - ${response.statusText}. Body: ${errorBody}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", (error as Error).message);
        throw error; // Re-throw to be caught by store actions
    }
}

/**
 * Main data fetching function that switches between mock and real API.
 * @param name The endpoint name (e.g., 'messages', 'products', 'login').
 * @param mode Optional: HTTP method (currently only 'GET' implied for mock, but can be extended).
 * @returns A Promise resolving to the fetched data.
 */
export const apiFetcher = async <T>(name: keyof typeof URLS & keyof typeof MockEndpoints, mode?: 'GET'): Promise<T> => {
    if (USE_MOCK) {
        console.log(`Using mock data for ${name}`);
        return mockFetch<T>(name);
    } else {
        console.log(`Fetching live data for ${name}`);
        const url = getUrl(name);
        // Assuming real API returns data directly, adjust if it's nested (e.g., json.data)
        const response = await getData(url);
        return response as T;
    }
};
