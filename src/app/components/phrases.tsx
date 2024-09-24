"use client";

import { useState, useEffect } from "react";

const quotes = [
	"Creativity is the key to simplifying our complex world.",
	"Great ideas are born from simplicity.",
	"Creativity transforms challenges into opportunities.",
	"Simplicity is the ultimate sophistication.",
	"To innovate is to simplify the extraordinary.",
	"Complexity dissolves with creativity.",
];

const CurrentQuote = () => {
	const [currentQuote, setCurrentQuote] = useState(quotes[0]);
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		const quoteInterval = setInterval(() => {
			setFadeOut(true); // Começa a animação de saída

			setTimeout(() => {
				setCurrentQuote((prevQuote) => {
					const currentIndex = quotes.indexOf(prevQuote);
					return quotes[(currentIndex + 1) % quotes.length];
				});
				setFadeOut(false); // Reinicia a animação de entrada
			}, 500); // Aguarda 500ms para que a animação de saída complete
		}, 10000); // Troca a frase a cada 6 segundos

		return () => clearInterval(quoteInterval); // Limpa o intervalo ao desmontar o componente
	}, []);

	return (
		<h1
			className={`z-10 text-xl text-gray-500 text-center mb-4 transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}
		>
			"{currentQuote}"
		</h1>
	);
};

export default CurrentQuote;
