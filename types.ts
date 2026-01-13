// Fix: Added React import to resolve the 'React' namespace error for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  category: 'AI' | 'Dev' | 'Workflow';
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  metrics: { label: string; value: string }[];
  description: string;
  imageUrl: string;
  link?: string;
}

export interface NavItem {
  label: string;
  path: string;
}