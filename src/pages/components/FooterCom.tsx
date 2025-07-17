const FooterCom: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-5 flex flex-col items-center">
        <p>© 2025 Biel's Gallery. All rights reserved.</p>
        <p className="mt-2 text-sm">Made by Nabil Satya Pramana</p>
        <div className="mt-4 flex space-x-6">
          <a href="https://www.instagram.com/satyanabil461?igsh=Mjl6enozb3gyZTF0" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 110 2.25 1.12 1.12 0 010-2.25z"/>
            </svg>
          </a>
          <a href="https://open.spotify.com/user/31lyprvst5emyh6obew5c25ut6v4?si=88994e5509ef4e57" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="Spotify">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 168 168">
              <path d="M84 0a84 84 0 1084 84 84.095 84.095 0 00-84-84zm38.4 121.2a5.6 5.6 0 01-7.7 1.9c-21-12.8-47.5-15.7-78.7-8.5a5.6 5.6 0 11-2.7-10.8c33.3-8.3 62.3-5 85.3 9.7a5.6 5.6 0 012.8 7.7zm10.9-20.1a7 7 0 01-9.6 2.3c-24.1-14.7-60.9-19-89.5-10.3a7 7 0 11-3.4-13.5c32.9-8.3 73.1-3.5 100.7 11.7a7 7 0 012 9.8zm.3-21.3c-28.3-17-75-18.5-102.3-10a8.4 8.4 0 11-4.1-16.1c31.6-8.1 83.3-6.3 115.3 11.5a8.4 8.4 0 11-8.9 14.6z"/>
            </svg>
          </a>
          <a href="https://github.com/BielssNabil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6a3.1 3.1 0 00-1.3-1.7c-1-.7.1-.7.1-.7a2.5 2.5 0 011.8 1.2 2.6 2.6 0 003.5 1 2.6 2.6 0 01.8-1.6c-2.6-.3-5.3-1.3-5.3-5.8a4.5 4.5 0 011.2-3.1 4.2 4.2 0 01.1-3s1-.3 3.3 1.2a11.3 11.3 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2a4.2 4.2 0 01.1 3 4.5 4.5 0 011.2 3.1c0 4.5-2.7 5.5-5.3 5.8a2.9 2.9 0 01.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterCom;
