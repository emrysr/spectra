/// <reference types="vite/client" />
import type { Component, ComponentPublicInstance, AsyncComponentLoader } from 'vue';
export interface RouteComponent {
    title: string;
    icon?: string;
    parent?: string;
    component: AsyncComponentLoader;
}
export type ComponentMap = { [key: string]: RouteComponent };
export type StringMap = { [key: string]: string };
export type FunctionMap = { [key: string]: (...args: any[]) => any };

export interface Message {
    visible: boolean;
    message: string;
    className: string;
}