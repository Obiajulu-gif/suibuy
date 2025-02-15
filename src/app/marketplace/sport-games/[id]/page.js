// pages/sport-games/[id].js
"use client"
import { useParams } from "next/navigation"; // Use useParams from next/navigation
import Image from "next/image";

const sportsAndGamesData = [
	{
		id: 1,
		title: "Tennis",
		image: "/images/games/tennis.jpg",
		description:
			"Explore the world of tennis with high-quality equipment and techniques.",
		details:
			"Tennis is a sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles). It is an Olympic sport and can be played at all levels of society by all ages.",
	},
	{
		id: 2,
		title: "Football",
		image: "/images/games/football.jpg",
		description: "Football gear for professional and recreational players.",
		details:
			"Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. The most popular form of the game is association football, also known as soccer.",
	},
	{
		id: 3,
		title: "Basketball",
		image: "/images/games/basketball.jpg",
		description:
			"Dribble your way to success with the latest basketball equipment.",
		details:
			"Basketball is a fast-paced team sport where two teams, typically of five players each, compete to score by shooting a ball through a hoop. It is widely played in both organized leagues and pickup games.",
	},
	{
		id: 4,
		title: "PlayStation 5",
		image: "/images/games/ps5.jpg",
		description:
			"The ultimate gaming experience awaits you with PlayStation 5.",
		details:
			"PlayStation 5 is Sony's latest home video game console offering an immersive gaming experience with cutting-edge graphics and high-speed performance.",
	},
	{
		id: 5,
		title: "Handheld Games",
		image: "/images/games/handgame.jpg",
		description: "Enjoy handheld games anytime, anywhere.",
		details:
			"Handheld gaming consoles offer the convenience of playing games on the go. With a variety of devices and game titles, players can immerse themselves in their favorite games no matter where they are.",
	},
	{
		id: 6,
		title: "Table Tennis",
		image: "/images/games/table-tennis.jpg",
		description: "Get ready for some intense table tennis action.",
		details:
			"Table tennis, also known as ping pong, is an indoor sport played with small paddles and a lightweight ball. It is fast-paced and enjoyed by players of all ages and skill levels.",
	},
	{
		id: 7,
		title: "Bowling",
		image: "/images/games/bowling.jpg",
		description: "Strike every pin with precision and style.",
		details:
			"Bowling is a popular recreational and competitive sport where players roll a heavy ball to knock down pins. It can be played solo or in teams, making it a fun social activity.",
	},
	{
		id: 9,
		title: "Gaming Controllers",
		image: "/images/games/gamepad.jpg",
		description:
			"Take control of your gaming with high-performance controllers.",
		details:
			"Gaming controllers are essential for a great gaming experience. Our selection includes controllers for various platforms, designed for comfort, precision, and durability.",
	},
	{
		id: 10,
		title: "Classic Game Cartridges",
		image: "/images/games/sonic-game.jpg",
		description: "Relive the nostalgia with classic gaming cartridges.",
		details:
			"Bring back memories with classic game cartridges from beloved consoles. Whether you're into Sonic the Hedgehog or other retro titles, our collection will take you back in time.",
	},
];

const SportGameDetailPage = () => {
	const { id } = useParams(); // Use useParams to get the dynamic id from URL
	const sportGame = sportsAndGamesData.find((item) => item.id === parseInt(id));

	if (!sportGame) {
		return <p>Sport/Game not found</p>;
	}

	return (
		<div className="container mx-auto p-6">
			<div className="flex flex-col items-center">
				<Image
					src={sportGame.image}
					alt={sportGame.title}
					width={600}
					height={400}
					className="rounded-lg"
				/>
				<h1 className="text-4xl font-bold mt-6">{sportGame.title}</h1>
				<p className="text-gray-700 mt-4">{sportGame.description}</p>
				<p className="text-gray-700 mt-4">{sportGame.details}</p>
			</div>
		</div>
	);
};

export default SportGameDetailPage;
