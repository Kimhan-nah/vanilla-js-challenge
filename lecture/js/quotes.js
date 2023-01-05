const quotes = [
	{
		quote : "1. Live is a series...",
		author: "Hannah"
	},
	{
		quote : "2. Live is a series...",
		author: "Hannah"
	},
	{
		quote : "3. Live is a series...",
		author: "Hannah"
	},
	{
		quote : "4. Live is a series...",
		author: "Hannah"
	},
	{
		quote : "5. Live is a series...",
		author: "Hannah"
	},
	{
		quote : "6. Live is a series...",
		author: "Hannah"
	},
	{
		quote : "7. Live is a series...",
		author: "Hannah"
	},
	{
		quote : "8. Live is a series...",
		author: "Hannah"
	},
	{
		quote : "9. Live is a series...",
		author: "Hannah"
	},
	{
		quote : "10. Live is a series...",
		author: "Hannah"
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const rand = Math.floor(Math.random() * quotes.length);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;