// pages/sport-games/index.js
import Image from "next/image";
import Link from "next/link";

const sportsAndGamesData = [
	{
		id: 1,
		title: "Tennis",
		image: "/images/games/tennis.jpg",
		description:
			"Explore the world of tennis with high-quality equipment and techniques.",
		details:
			"Tennis is a racket sport that can be played individually against a single opponent or between two teams of two players each. Master your serves and volleys with our premium tennis gear.",
	},
	{
		id: 2,
		title: "Football",
		image: "/images/games/football.jpg",
		description: "Football gear for professional and recreational players.",
		details:
			"Football, also known as soccer, is a globally popular team sport played with a spherical ball between two teams of 11 players. Score the winning goal with our collection of footballs, boots, and training gear.",
	},
	{
		id: 3,
		title: "Basketball",
		image: "/images/games/basketball.jpg",
		description:
			"Dribble your way to success with the latest basketball equipment.",
		details:
			"Basketball is a fast-paced team sport played on a rectangular court. Improve your shooting skills with our selection of basketballs and hoops designed for professionals and amateurs alike.",
	},
	{
		id: 4,
		title: "PlayStation 5",
		image: "/images/games/ps5.jpg",
		description:
			"The ultimate gaming experience awaits you with PlayStation 5.",
		details:
			"The PlayStation 5 (PS5) is Sony's next-gen gaming console, delivering an immersive gaming experience with cutting-edge graphics, faster load times, and exclusive titles. Experience gaming like never before.",
	},
	{
		id: 5,
		title: "Handheld Games",
		image: "/images/games/handgame.jpg",
		description: "Enjoy handheld games anytime, anywhere.",
		details:
			"Handheld gaming consoles are portable devices that allow you to play video games on the go. Choose from a wide selection of handheld consoles and games for endless entertainment.",
	},
	{
		id: 6,
		title: "Table Tennis",
		image: "/images/games/table-tennis.jpg",
		description: "Get ready for some intense table tennis action.",
		details:
			"Table tennis, also known as ping pong, is a fast-paced indoor sport played with small paddles and a lightweight ball. Our table tennis equipment is perfect for players of all levels, whether you're playing recreationally or competitively.",
	},
	{
		id: 7,
		title: "Bowling",
		image: "/images/games/bowling.jpg",
		description: "Strike every pin with precision and style.",
		details:
			"Bowling is a sport in which players roll a heavy ball down a lane to knock down pins. With our top-tier bowling balls and accessories, you can perfect your roll and enjoy a fun time with family or friends.",
	},
	
	{
		id: 9,
		title: "Gaming Controllers",
		image: "/images/games/gamepad.jpg",
		description:
			"Take control of your gaming with high-performance controllers.",
		details:
			"Enhance your gaming experience with our ergonomic gaming controllers, designed for precision and comfort. Whether you're playing on PlayStation, Xbox, or PC, we have the right controller for you.",
	},
	{
		id: 10,
		title: "Classic Game Cartridges",
		image: "/images/games/sonic-game.jpg",
		description: "Relive the nostalgia with classic gaming cartridges.",
		details:
			"Bring back the memories with retro gaming cartridges featuring your favorite titles like Sonic the Hedgehog and more. Our collection of vintage games is perfect for collectors and enthusiasts.",
	},
];

const SportGamesPage = () => {
	return (
		<div className="container mx-auto p-6">
			<h1 className="text-4xl font-bold text-center mb-8">Sport & Games</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{sportsAndGamesData.map((item) => (
					<div key={item.id} className="border p-4 rounded-lg shadow-lg">
						<Image
							src={item.image}
							alt={item.title}
							width={400}
							height={300}
							className="rounded-lg"
						/>
						<h2 className="text-2xl font-semibold mt-4">{item.title}</h2>
						<p className="text-gray-700 mt-2">{item.description}</p>
						<Link
							href={`/sport-games/${item.id}`}
							className="block mt-4 text-blue-500 underline"
						>
							View More
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default SportGamesPage;
