import React from 'react';

// 1st
export interface FirstProps {
	large: boolean;
	linkStyle: React.CSSProperties;
}

// Fade
export interface FadeProps {
	height: string;
	degrees: number;
}

// Carousel
export interface CarouselItemProps {
	width: string;
	item: { h1: string; src: string };
}
