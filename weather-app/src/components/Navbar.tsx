import { useState } from 'react';
import { MdWbSunny, MdOutlineLocationOn } from 'react-icons/md';
import { MdMyLocation } from 'react-icons/md';
import axios from 'axios';
import { loadingCityAtom, placeAtome } from '@app/atom';
import { useAtom } from 'jotai';

type Props = { location?: string };

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

export default function Navbar({ location }: Props) {
	return (
		<nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
			<div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto ">
				<p className="flex items-center justify-center gap-2"></p>
				<h2 className="text-gray-500 text-3xl">Weather</h2>
				<MdWbSunny className="text-yellow-300 text-3xl mt-1" />
			</div>
		</nav>
	);
}
