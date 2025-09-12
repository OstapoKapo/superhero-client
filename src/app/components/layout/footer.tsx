const Footer = () => {
    return (
        <footer className="w-full h-10 flex items-center justify-center bg-gray-800 text-white">
            {<p>&copy; {new Date().getFullYear()} SuperHero Archive. All rights reserved.</p>}
        </footer>
    );
};

export default Footer; 