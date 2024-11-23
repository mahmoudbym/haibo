export const products = [
    {
        id: "1",
        name: "Become an Athlete",
        desc: "Transform your passion into performance with our comprehensive athlete development course. Designed for aspiring athletes, this program dives into strategies to enhance physical performance, build mental resilience, and master essential skills to excel in your sport. With HAIBO, we help you achieve your peak potential and rise to greatness.",
        price: 18,
        img: '/src/assets/athlete.png',
        category: "pro"
    },
    {
        id: "2",
        name: "Psychologie",
        desc: "Unlock the power of your mind with our psychology course. Explore techniques to improve focus, overcome mental barriers, and boost motivation in your personal and professional life. With HAIBO, we guide you on the journey to mental strength and clarity, helping you conquer every challenge.",
        price: 15,
        img: '/src/assets/psycho.png',
        category: "pro"
    },
    {
        id: "3",
        name: "Bodybuilding",
        desc: "Our first bodybuilding course explains everything for beginners entering the world of bodybuilding. HAIBO FITNESS created the best online course, covering foundational knowledge of this exciting world. Building on basics, Bodybuilding 2 teaches advanced methods to grow and define muscles. It includes specific exercises for each muscle group, techniques like supersets, drop sets, and pyramid sets. Designed to challenge you, it helps you keep progressing, building a balanced physique, and becoming the best version of yourself. With HAIBO FITNESS, together we rise.",
        price: 18,
        img: '/src/assets/bodybuilding.png',
        category: "fitness"
    },
    {
        id: "4",
        name: "Hockey Course",
        desc: "Step onto the ice with confidence! Our hockey course is designed to teach you the fundamentals of skating, puck handling, and teamwork. Perfect for players of all levels, this program helps you sharpen your skills and dominate the rink. With HAIBO, take your game to the next level.",
        price: 18,
        img: '/src/assets/hockey.png',
        category: "collective"
    },
    {
        id: "5",
        name: "Boxe Course",
        desc: "Unleash your power with our boxing course. Learn the art of striking, defensive techniques, and conditioning to build strength and confidence. Whether you're looking to compete or stay fit, this program is your ticket to mastering boxing fundamentals. With HAIBO, every punch counts.",
        price: 18,
        img: '/src/assets/boxe.png',
        category: "combat"
    },
    {
        id: "7",
        name: "Management",
        desc: "Lead with confidence! This course explores essential management principles to improve productivity, build effective teams, and achieve organizational goals. With HAIBO, master the art of leadership and elevate your professional growth.",
        price: 15,
        img: '/src/assets/management.png',
        category: "pro"
    },
    {
        id: "8",
        name: "Soccer",
        desc: "Elevate your game with our soccer course! From passing and dribbling to strategic play, this program is perfect for players who want to refine their skills and dominate the field. With HAIBO, discover the secrets to becoming a soccer star.",
        price: 15,
        img: '/src/assets/soccer.png',
        category: "collective"
    },
    {
        id: "9",
        name: "Basketball Course",
        desc: "Shoot for greatness with our basketball course! Learn the fundamentals of dribbling, shooting, and team coordination while improving your physical and mental game. With HAIBO, step onto the court ready to win.",
        price: 18,
        img: '/src/assets/basket.png',
        category: "collective"
    },
    {
        id: "10",
        name: "Baseball",
        desc: "Step up to the plate with our baseball course! Learn essential techniques for batting, pitching, and fielding, while understanding the strategies that make a winning team. With HAIBO, get ready to hit a home run in your baseball journey.",
        price: 15,
        img: '/src/assets/baseball.png',
        category: "collective"
    },
    {
        id: "11",
        name: "Volleyball",
        desc: "Master the court with our volleyball course! From serving and spiking to team coordination, this program is designed to help you elevate your game and excel in every match. With HAIBO, play like a champion.",
        price: 18,
        img: '/src/assets/voley.png',
        category: "collective"
    },
    {
        id: "12",
        name: "Injury Prevention",
        desc: "Stay safe and strong with our injury prevention course. Learn effective techniques to avoid common sports injuries, improve flexibility, and build resilience. With HAIBO, protect your body and maximize your performance.",
        price: 15,
        img: '/src/assets/injury.png',
        category: "other"
    },
    {
        id: "13",
        name: "Football",
        desc: "Dominate the pitch with our football course! From dribbling and passing to advanced tactics, this program is tailored for players looking to enhance their skills and shine on the field. With HAIBO, become the MVP of your team.",
        price: 18,
        img: '/src/assets/football.png',
        category: "collective"
    },
    {
        id: "14",
        name: "Weight Loss",
        desc: "Achieve your fitness goals with our weight loss course! Designed to help you shed pounds sustainably, this program includes effective workouts, nutrition tips, and motivational strategies. With HAIBO, take the first step toward a healthier you.",
        price: 15,
        img: '/src/assets/diet.png',
        category: "fitness"
    },
    {
        id: "15",
        name: "Martial Arts",
        desc: "Master the art of self-defense with our martial arts course. Learn techniques from various disciplines, improve your agility, and build confidence in your abilities. With HAIBO, unleash your inner warrior and achieve peak physical conditioning.",
        price: 18,
        img: '/src/assets/martial-art.png',
        category: "combat"
    }
    

];

// json.js
export const getCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart ? cart : [];
  };
  
  export const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  