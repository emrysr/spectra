/// <reference types="vite/client" />
import type { Component, ComponentPublicInstance, AsyncComponentLoader } from 'vue';
interface RouteComponent {
    title: string;
    icon?: string;
    parent?: string;
    component: AsyncComponentLoader;
}
interface ComponentMap {
    [key: string]: RouteComponent;
}